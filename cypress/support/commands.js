// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//To access all the cypress commands using cy module.

//To use Xpath in cypress
///



//All the resusbale methods/commands we will write here.
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

//Command to get the Iframe
Cypress.Commands.add('getIframe', (loacator)=>
{
 return  cy.get(loacator).its('0.contentDocument.body')
   .should('be.visible')
   .then(cy.wrap);
})

//Command to get the text present onto the WebElement
Cypress.Commands.add('getTextPresentOntoTheWebElement', (locator)=>
{
    return  cy.get(locator).invoke('text');
 
});


//Command to get the text present onto the alert   (Not working need to check)
Cypress.Commands.add('getTextOntoTheAlert', () => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Timed out waiting for alert'));
    }, 5000); // Set a timeout of 5 seconds

    cy.on('window:alert', (text) => {
      clearTimeout(timeout); // Clear the timeout if alert is triggered
      resolve(text);
    });
  });
});



