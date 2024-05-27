describe('Dropdown without Select Tag', ()=>
{
    it('Select dropdown by Typing value in text box', ()=>
    {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
        cy.get('span#select2-billing_country-container').click({force:true});
        cy.get("input[class='select2-search__field']").should('be.visible');
        cy.get("input[class='select2-search__field']").should('exist');
        cy.get("input[class='select2-search__field']").should('not.be.hidden');
        cy.get("input[class='select2-search__field']").type("India", {delay:300}).type('{enter}');
       
    })
})