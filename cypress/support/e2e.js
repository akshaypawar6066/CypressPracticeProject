// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

//To use xpath in cypress
import 'cypress-xpath'
//To use cypress-iframe plugin command
import 'cypress-iframe';

//To use cypress-fileUpload plugin
import 'cypress-file-upload';

//For mochawesomereport Geneartion
import 'cypress-mochawesome-reporter/register';



// Alternatively you can use CommonJS syntax:
// require('./commands')

