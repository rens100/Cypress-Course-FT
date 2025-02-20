const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 800,
  viewportWidth: 1200,
  screenshot: {
    overwrite: true, // Ustaw nadpisywanie screenshotów
  },

  e2e: {
    baseUrl: "https://simpletestsite.fabrykatestow.pl/",
  },
});
