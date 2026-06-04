const url = process.env.CYPRESS_BASE_URL || "https://lacreisaude.com.br";

module.exports = {
  ci: {
    collect: {
      url: [url],
      numberOfRuns: 1,
      settings: {
        formFactor: "mobile",
        screenEmulation: {
          mobile: true,
          width: 390,
          height: 844,
          deviceScaleFactor: 2,
          disabled: false,
        },
      },
    },
    assert: {
      assertions: {
        "categories:accessibility": ["warn", { minScore: 0.9 }],
        "categories:performance": ["warn", { minScore: 0.7 }],
        "interactive": ["warn", { maxNumericValue: 5000 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "reports/lighthouse",
    },
  },
};
