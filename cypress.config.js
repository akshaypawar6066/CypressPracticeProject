const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress-Automation-Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);   //For HTML Report
    },

    env: {
      Username: "Admin",
      Password: "admin123",
      AppUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    },

    retries: {

      runMode: 0,
      openMode: 0
    },


    screenshotOnRunFailure: true,
    experimentalRunAllSpecs: true,
    //video: true
    includeShadowDom: true,
    watchForFileChanges: true
  },

});
