describe('Handling of child Browser', () => {
    it('Handling of Child Browser by removing target attribute', () => {
        let newPageUrl = 'https://the-internet.herokuapp.com/windows/new';
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.url().should('eq', 'https://the-internet.herokuapp.com/windows');
        cy.title().should('eq', 'The Internet');

        cy.get("a[href='/windows/new']").invoke('removeAttr', 'target').click();
        cy.url().should('eq', newPageUrl);
        cy.title().should('eq', 'New Window');

        //Verify text once navigate to child Tab
        let textOnNewPage = 'New Window';

        cy.get(".example>h3").should('have.text', textOnNewPage);
        cy.get(".example>h3").invoke('text').should('eq', textOnNewPage);
        cy.get(".example>h3").invoke('text').then((text) => {
            expect(text).to.eq(textOnNewPage);

        })

        cy.get(".example>h3").then((ele) => {
            let actualText = ele.text();
            assert.equal(actualText, textOnNewPage);
        })

        cy.get(".example>h3").contains(textOnNewPage);

         //Navigate Back to the Main Page
         cy.go('back');
         let expectedMainPageUrl = 'https://the-internet.herokuapp.com/windows';
         let expectedMainPageTitle= 'The Internet';

         cy.url().should('eq', expectedMainPageUrl);
         cy.title().should('eq', expectedMainPageTitle);

         cy.go('forward');
         cy.url().should('eq', newPageUrl);
        cy.title().should('eq', 'New Window');

    });

    it('Handling of child Tab by cathing href attribute and visit to the url again', ()=>
    {
        let expectedNewPageUrl = 'https://the-internet.herokuapp.com/windows/new';
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.url().should('eq', 'https://the-internet.herokuapp.com/windows');
        cy.title().should('eq', 'The Internet');

        cy.get('.example>a').then((ele)=>
        {
           let newUrl =  ele.prop('href');
           let target = ele.prop('target');

           cy.log("New Window Url is:"+newUrl);
           cy.log("Taget element is:"+target)
           cy.visit(newUrl);
        })

        cy.url().should('eq', expectedNewPageUrl);
        cy.title().should('eq', 'New Window');
        

        let expectedTextOnNewPage = 'New Window';

        cy.get(".example>h3").should('have.text', expectedTextOnNewPage);
        cy.get(".example>h3").invoke('text').should('eq', expectedTextOnNewPage);
        cy.get(".example>h3").invoke('text').then((text) => {
            expect(text).to.equal(expectedTextOnNewPage);

        })

        cy.get(".example>h3").then((ele) => {
            let actualText = ele.text();
            assert.equal(actualText, expectedTextOnNewPage);
        })

        cy.get(".example>h3").contains(expectedTextOnNewPage);

       //Navigate Back to the Main Page
       cy.go('back');
       let expectedMainPageUrl = 'https://the-internet.herokuapp.com/windows';
       let expectedMainPageTitle= 'The Internet';

         cy.url().should('eq', expectedMainPageUrl);
         cy.title().should('eq', expectedMainPageTitle);

         cy.go('forward');
         cy.url().should('eq', expectedNewPageUrl);
        cy.title().should('eq', 'New Window');


    })
})