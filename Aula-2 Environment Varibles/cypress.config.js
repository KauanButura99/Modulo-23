const { defineConfig } = require("cypress");
// require('dotenv').config({ path: `${process.cwd()}/cypress/support/config/local.env` }) //outra forma de executar testes usando arquivos que não estão na raiz do projeto
const dotenvPlugin = require('cypress-dotenv');
//require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    env: {
      baseUrl: 'http://lojaebac.ebaconline.art.br/'
    },
    setupNodeEvents(on, config) {
      //config.env.HOST = process.env.CYPRESS_HOST // Config para rodar o test com 'dotenv'
      config = dotenvPlugin(config) //Config para rodar o test com o 'Cypress-dotenv'

      return config
    }
  },
});
