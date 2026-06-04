const fs = require("node:fs");
const path = require("node:path");
const { performance } = require("node:perf_hooks");

try {
  require("dotenv").config();
} catch (_) {
  // dotenv is available after npm install; CI/local runs can still use process env only.
}

const baseUrl = process.env.CYPRESS_BASE_URL || "https://lacreisaude.com.br";
const users = Number(process.env.PERF_VIRTUAL_USERS || 30);
const thresholdMs = Number(process.env.PERF_P95_THRESHOLD_MS || 500);
const defaultTargets = [
  joinUrl(baseUrl, process.env.CYPRESS_REGISTER_PATH || "/"),
  joinUrl(baseUrl, process.env.CYPRESS_SEARCH_PATH || "/"),
];

const targets = (process.env.PERFORMANCE_URLS || defaultTargets.join(","))
  .split(",")
  .map((item) => item.trim())
  .filter(Boolean);

function joinUrl(base, route) {
  try {
    return new URL(route, base).toString();
  } catch (_) {
    return base;
  }
}

async function timedRequest(url, userIndex) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  const startedAt = performance.now();

  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": "lacrei-qa-performance-smoke/1.0",
      },
    });
    await response.arrayBuffer();

    return {
      url,
      userIndex,
      status: response.status,
      ok: response.ok,
      durationMs: Math.round(performance.now() - startedAt),
    };
  } catch (error) {
    return {
      url,
      userIndex,
      status: 0,
      ok: false,
      durationMs: Math.round(performance.now() - startedAt),
      error: error.message,
    };
  } finally {
    clearTimeout(timeout);
  }
}

function percentile(values, p) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.ceil((p / 100) * sorted.length) - 1;
  return sorted[Math.max(0, index)];
}

function summarize(results) {
  const grouped = new Map();
  for (const result of results) {
    if (!grouped.has(result.url)) grouped.set(result.url, []);
    grouped.get(result.url).push(result);
  }

  return [...grouped.entries()].map(([url, items]) => {
    const durations = items.map((item) => item.durationMs);
    const failures = items.filter((item) => !item.ok);

    return {
      url,
      requests: items.length,
      failures: failures.length,
      minMs: Math.min(...durations),
      medianMs: percentile(durations, 50),
      p95Ms: percentile(durations, 95),
      maxMs: Math.max(...durations),
      passed: failures.length === 0 && percentile(durations, 95) <= thresholdMs,
    };
  });
}

function writeReports(summary, results) {
  const outputDir = path.join("reports", "performance");
  fs.mkdirSync(outputDir, { recursive: true });

  const payload = {
    generatedAt: new Date().toISOString(),
    virtualUsers: users,
    thresholdMs,
    summary,
    results,
  };

  fs.writeFileSync(
    path.join(outputDir, "performance-smoke.json"),
    JSON.stringify(payload, null, 2),
  );

  const lines = [
    "# Performance Smoke",
    "",
    `Gerado em: ${payload.generatedAt}`,
    `Usuários simultâneos por URL: ${users}`,
    `Meta p95: <= ${thresholdMs}ms`,
    "",
    "| URL | Requests | Falhas | Mediana | p95 | Máximo | Status |",
    "| --- | ---: | ---: | ---: | ---: | ---: | --- |",
    ...summary.map((item) =>
      [
        item.url,
        item.requests,
        item.failures,
        `${item.medianMs}ms`,
        `${item.p95Ms}ms`,
        `${item.maxMs}ms`,
        item.passed ? "Aprovado" : "Reprovado",
      ].join(" | "),
    ),
    "",
  ];

  fs.writeFileSync(path.join(outputDir, "performance-smoke.md"), lines.join("\n"));
}

async function main() {
  const results = [];

  for (const target of targets) {
    const requests = Array.from({ length: users }, (_, index) =>
      timedRequest(target, index + 1),
    );
    results.push(...(await Promise.all(requests)));
  }

  const summary = summarize(results);
  writeReports(summary, results);

  console.table(
    summary.map((item) => ({
      url: item.url,
      requests: item.requests,
      failures: item.failures,
      medianMs: item.medianMs,
      p95Ms: item.p95Ms,
      maxMs: item.maxMs,
      passed: item.passed,
    })),
  );

  if (summary.some((item) => !item.passed)) {
    process.exitCode = 1;
  }
}

main();
