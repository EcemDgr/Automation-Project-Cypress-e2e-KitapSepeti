const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.js",
    supportFile: "cypress/support/e2e.js",

    env: {
      email: "gnnbbecem@gmail.com",
      password: "Ee123456@@"
    },

    setupNodeEvents(on, config) {
      return config;
    },
  },

  reporter: "allure",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: false,
    json: true
  }
});