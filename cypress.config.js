const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa los listeners de eventos aquí
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
    baseUrl: "https://suite8demo.suiteondemand.com",
    viewportHeight: 1080,
    viewportWidth: 1920,
    experimentalStudio: true,
    defaultCommandTimeout: 15000,
  },
});
