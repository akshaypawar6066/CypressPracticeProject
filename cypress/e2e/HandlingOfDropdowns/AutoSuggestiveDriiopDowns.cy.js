describe('HAndling of Autosuggestive DropDownls', () => {
    it('Using Contains Command', () => {
        cy.visit("https://www.google.com/");
        cy.get("#APjFqb").type("Mumbai");
        cy.xpath("//div[@id='Alh6id']//ul[@role='listbox']/li").should('have.length', 10);

        cy.xpath("//div[@id='Alh6id']//ul[@role='listbox']/li").contains('mumbai to delhi flight').click();
        cy.get("#APjFqb").should('include.value', 'mumbai to delhi flight');
    });


    it.only('Dynamic Dropdown', () => {
        cy.visit("https://www.google.com/");
        cy.get("#APjFqb").type("Mumbai");
        cy.wait(2000);
        cy.xpath("//div[@class='wM6W7d']/span").each(($ele, index, $list)=>
        {
         let actualText = $ele.text();
         if(actualText=="Mumbai University")
            {
                cy.wrap($ele).click();
            }

         /*
            if(actualText.includes("Mumbai University"))
                {
                    cy.wrap($ele).click();
                }

                */
        });
        cy.get('#APjFqb').should('have.value', 'mumbai university');
    })
})