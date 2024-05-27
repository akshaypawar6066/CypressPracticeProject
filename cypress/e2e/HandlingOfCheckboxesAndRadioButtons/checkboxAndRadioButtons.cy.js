describe('Handling Of Checkboxes And Radio Buttons', () => {
    it('Handeling checkBox Operations in cypress', () => { 
        cy.visit('https://the-internet.herokuapp.com/checkboxes');

        //To check nad Uncheck
        cy.get("input[type='checkbox']:last-child").should('be.checked').uncheck().should('not.be.checked');
        cy.get("input[type='checkbox']:first-child").should('not.be.checked').check().should('be.checked');

    })


    it('Handeling Radio Buttons Operations in cypress', () => { 
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/');
        
        //To check if radio button is alreday checked anf then uncheck
        cy.get("input[value='pumpkin']").should('be.checked');

        //To check if rado Button is not selected alreday and then select.
        cy.get("input[value='lettuce']").should('not.be.checked').check().should('be.checked');

        //To check if radio button is disbaled or not
        cy.get("input[value='cabbage']").should('be.disabled');
        cy.get("input[value='cabbage']").should('not.be.enabled');
    })
})
