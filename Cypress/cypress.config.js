const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  allureWriter(on, config);
  return config;
}

module.exports = defineConfig({
  /* e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/features/*.feature",
    stepDefinitions: "./cypress/e2e/step_definitions/*.js",
    baseUrl: "http://localhost:3002/",
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
    },
  }, */

  e2e: {
    setupNodeEvents,
    specPattern: "cypress/semana7/*/*/*.cy.js",
    baseUrl: "http://localhost:3002/",
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
    },
  }
});