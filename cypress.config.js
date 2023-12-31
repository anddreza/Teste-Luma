const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://magento2-demo.magebit.com/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    failOnStatusCode: false
  },
});
