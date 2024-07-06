const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    env:{
      apiUrl: 'http://localhost:3333' // variavel de ambiente 
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
