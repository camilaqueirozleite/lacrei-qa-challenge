const fs = require("node:fs");
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

if (fs.existsSync(".env")) {
  require("dotenv").config();
}

const env = (name, fallback = "") => process.env[name] || fallback;

module.exports = defineConfig({
  video: true,
  screenshotsFolder: "reports/screenshots",
  videosFolder: "reports/videos",
  downloadsFolder: "cypress/downloads",
  reporter: "junit",
  reporterOptions: {
    mochaFile: "reports/junit/results-[hash].xml",
    toConsole: true,
  },
  e2e: {
    baseUrl: env("CYPRESS_BASE_URL", "https://lacreisaude.com.br"),
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    viewportWidth: 390,
    viewportHeight: 844,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    env: {
      REGISTER_PATH: env("CYPRESS_REGISTER_PATH", "/"),
      SEARCH_PATH: env("CYPRESS_SEARCH_PATH", "/"),
      FORGOT_PASSWORD_PATH: env("CYPRESS_FORGOT_PASSWORD_PATH", "/"),
      TEST_USER_NAME: env("TEST_USER_NAME", "Pessoa QA Lacrei"),
      TEST_USER_EMAIL: env("TEST_USER_EMAIL", "qa.lacrei+teste@example.com"),
      TEST_USER_PASSWORD: env("TEST_USER_PASSWORD", "SenhaForte!2026"),
      TEST_USER_PHONE: env("TEST_USER_PHONE", "11999999999"),
      TEST_USER_CPF: env("TEST_USER_CPF", "12345678909"),
      TEST_USER_CITY: env("TEST_USER_CITY", "São Paulo"),
      TEST_USER_STATE: env("TEST_USER_STATE", "SP"),
      TEST_SPECIALTY: env("TEST_SPECIALTY", "Psicologia"),
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );

      return config;
    },
  },
});
