describe('Handling Of Doropdown With Select Class', ()=>
{
    it("Select By Index", ()=>
    {
        cy.visit("https://the-internet.herokuapp.com/dropdown");
        cy.get("select#dropdown").select(2);
        cy.wait(2000);
    });

    it('Select By Value', ()=>
    {
        cy.visit("https://the-internet.herokuapp.com/dropdown");
        cy.get("select#dropdown").select("1");
        cy.wait(2000);
    });

    it('Select By Visible text', ()=>   
        {
            cy.visit("https://the-internet.herokuapp.com/dropdown");
            cy.get("select#dropdown").select("Option 1");
            cy.wait(2000);
        });
})