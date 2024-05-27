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

    env : {
      
      
    },

    retries : {

      runMode: 1,
      openMode: 2
    },


    screenshotOnRunFailure: true,
    experimentalRunAllSpecs: true,
    //video: true
    includeShadowDom: true,
    watchForFileChanges: false
  },

});
