describe('Handling Of Iframe in Cypress', () => {

    it('Handling Iframe ->First Approach', () => {
        cy.visit("https://jqueryui.com/droppable/");
        //cy.get('#draggable>p').should('have.text','Drag me to my target');

        let iframe = cy.get(".demo-frame")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        iframe.find('#draggable>p').then((ele) => {
            let eleText = ele.text();
            expect(eleText).to.equal("Drag me to my target");
        })

    });

    it('Handling iframe -->Second Aproach', () => {
        cy.visit("https://jqueryui.com/droppable/");
        //cy.getIframe('.demo-frame').find('#droppable>p').should('have.text', 'Drop here');
        let iframe = cy.getIframe('.demo-frame');

        iframe.find('#droppable>p').should('have.text', 'Drop here');

    });

    it('Handling Iframe using cypress-iframe plugin', () => {
        cy.visit("https://jqueryui.com/droppable/");
        cy.frameLoaded('.demo-frame');
        cy.iframe('.demo-frame').find('#droppable>p').should('have.text', 'Drop here');
        cy.xpath("//a[normalize-space()='Accordion']").click().url().should('eq', 'https://jqueryui.com/accordion/');
    });
    

})