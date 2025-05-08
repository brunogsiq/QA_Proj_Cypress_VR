const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1300,
  viewportHeight: 800,
  video: true,
  env: {
    baseUrl: "https://www.vr.com.br",
  },
  e2e: {
    hideXHRInCommandLog: true,
    experimentalRunAllSpecs: true,
    //Aqui ficarão todos os meus testes:
    specPattern: [
       "cypress/tests/scenes/01 - Validar acesso a home page.cy.js",
       "cypress/tests/scenes/02 - Validar acesso a tela Pra Você.cy.js",
       "cypress/tests/scenes/03 - Validar acesso a tela Onde usar meu cartão.cy.js",
       "cypress/tests/scenes/04 - Validar acesso a tela de buscas pelo mapa.cy.js",
       "cypress/tests/scenes/05 - Validar buscas pelo mapa.cy.js",
    ],
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig(
{
    viewportWidth: 1300,
    viewportHeight: 800,
    video: true,
    chromeWebSecurity: false,
    reporter: "mochawesome",
    reporterOptions: {
        reportDir: 'cypress/report',
        overwrite: true,
        html: true,
        json: false,
        timestamp: 'dd-mm-yyyy_HH-MM-ss'
    },
    e2e: {
        defaultCommandTimeout: 9000,
        experimentalRunAllSpecs: true,
        hideXHRInCommandLog: true,
        baseUrl: "https://webdriveruniversity.com/index.html",
        //Aqui ficarão todos os meus testes:
        setupNodeEvents(on, config) {
          // implement node event listeners here
        },
    },
});