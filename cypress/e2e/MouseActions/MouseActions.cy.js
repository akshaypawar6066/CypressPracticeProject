import '@4tw/cypress-drag-drop'
describe('Handling Of Mouse Actions', () => {
    it('MouseHover', () => {
        cy.visit('https://the-internet.herokuapp.com/hovers');


        //Before performing mouse Hover element should not be visible
        cy.get("a[href='/users/1']").should('not.be.visible');

        //Perfor MouseHover
        cy.xpath("//div[@class='example']//div[1]//img[1]").trigger('mouseover');

        //After Mouse Hover Element should be visible
        cy.get("a[href='/users/1']").should('have.text', 'View profile');

    });

    it('Perform Right Click Operation', () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        //Before performing Right Click Element should not be visible
        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-copy").should('not.be.visible');

        //Perform the right click Operation
        cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');

        //Afetr perorming right click operation Element should  be visible
        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-copy").should('be.visible');

    });

    it('Perform the Double click operation', () => {
        cy.visit("https://demo.guru99.com/test/simple_context_menu.html");

        //Perform doucble click operation
        cy.get("button[ondblclick='myFunction()']").trigger('dblclick');

        //After double clicking on WebElement alert should have below text
        cy.on('window:alert', (text) => {
            expect(text).to.equal('You double clicked me.. Thank You..');
        });


    });

    it('Perform Drag and Drop Operation', () => {
        cy.visit("https://demo.guru99.com/test/drag_drop.html");
        cy.wait(2000);
        cy.get("#credit2").drag("#bank");

    });

    it.only('Scrolling WebPage to specific WebElement', ()=>
    {

        cy.visit('https://www.jsonschema2pojo.org/');

        //Scrolling to specific WebElement
        cy.get("#preview-button").scrollIntoView();

        cy.wait(2000);

        //Scrolling to end of the WebPage   --->Get footer element and do the srolling.
        cy.xpath("//p[contains(text(),'If the')]//code[contains(text(),'javaInterfaces')]").scrollIntoView();
    })

})