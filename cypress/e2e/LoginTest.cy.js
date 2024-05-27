describe('Validate Login Functionality', ()=>
{
    
    it('Validate the login functionality with correct credentails', ()=>
    {
        let expectedUrl="https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index";

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name='username']").type("Admin");
        cy.get("input[type='password']").type("admin123");
        cy.xpath("//button[@type='submit']").click();

        cy.url().should('eq', expectedUrl);
        cy.url().should('include', expectedUrl);
        cy.url().then((url)=>
        {
            assert.equal(url, expectedUrl);
            cy.log("Url of dashboard page is:"+url)
        })
    });

    
    it.only('Validate the login functionality with Incorrect credentails', ()=>
        {
            let expectedErrorMessageMessageText="Invalid credentials";
    
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            cy.get("input[name='username']").type("Adminn");
            cy.get("input[type='password']").type("admin123");
            cy.xpath("//button[@type='submit']").click();

            cy.xpath("//p[text()='Invalid credentials']").should('be.visible');

            cy.xpath("//p[text()='Invalid credentials']").should('have.text', expectedErrorMessageMessageText);    //1
            cy.xpath("//p[text()='Invalid credentials']").invoke('text').should('contain', expectedErrorMessageMessageText);  //2
            cy.xpath("//p[text()='Invalid credentials']").invoke('text').then((text)=>
            {
                expect(text).to.equal(expectedErrorMessageMessageText);                                           //3
            })

            cy.xpath("//p[text()='Invalid credentials']").then((ele)=>
            {
                let actulText = ele.text();
                assert.equal(actulText, expectedErrorMessageMessageText);                                    //4
            })

            cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").contains("Invalid credentials");               //5

            cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").then(($ele)=>
                {
                  cy.wrap($ele).click();                     //Use cypress commans onto the Non-cypress elements.
                })
        })
})