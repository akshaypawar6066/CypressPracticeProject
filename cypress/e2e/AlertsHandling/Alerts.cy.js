describe('Handling of alert In JS:', () => {
    beforeEach(() => {
        cy.log("Navigating to the Websire:");
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    })
    it('Handling Basic Java Script alert', () => {
        //Alert having some text and Ok button  --->Cypress automatically handles alert with Ok Button, But to validate text present on alert we need to trigger some event.

        cy.get("#result").should('not.be.visible');

        cy.get("button[onclick='jsAlert()']").click();
        cy.on('window:alert', (t) => {
            let alertText = t;
            assert.equal(alertText, "I am a JS Alert");
            expect(t).to.equal("I am a JS Alert");

        })
        cy.get("#result").should('have.text', 'You successfully clicked an alert');
    });

    it('Handling JavaScript Confirm Alert', () => {
        //By default Cypress will clos the alert pop up using Ok Button, To close the alert pop up using cancel button, we need to raise the another event.

        cy.xpath("//p[@id='result']").should('not.be.visible');
        cy.get("button[onclick='jsConfirm()']").click();   //Cypress by default accept the alert pop up using ok button.

        cy.on('window:confirm', (t)=>
        {
            assert.equal(t, 'I am a JS Confirm');
            expect(t).to.equal('I am a JS Confirm');
        })

        cy.log(":Below are the ways to test the text present on to the WebElement:")

        cy.xpath("//p[@id='result']").should('have.text', 'You clicked: Ok');

        cy.xpath("//p[@id='result']").then((ele)=>
        {
            let actualText = ele.text();
            assert.equal(actualText, 'You clicked: Ok');
        });
        cy.xpath("//p[@id='result']").contains('You clicked: Ok');

    });

    it('Handling JavaSCript confirm alert with Cancel Buttin', ()=>
    {
        cy.get("#result").should('not.be.visible');
        cy.get("button[onclick='jsConfirm()']").click();
        //Handle JavaScript alet with cancel button
        cy.on('window:confirm', (text)=>
        {
            expect(text).to.equal('I am a JS Confirm');
            return false;
        });

        //Validate text present on to the WebElement after clicking the cancel button.
        cy.get("#result").should('have.text', 'You clicked: Cancel');
    });


    it('Handling JavaScript Prompt alert', () => {
        // Stubbing the window.prompt method
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('WelCome Bro...!!!');
        });
    
        // Trigger the prompt alert by clicking the button
        cy.get("button[onclick='jsPrompt()']").click();
    
        // Assert the text present on the prompt alert
        cy.on('window:prompt', (t) => {
            expect(t).to.equal('I am a JS prompt');
        })
    
        // Validate the text present on the web element after clicking OK button
        cy.get("#result").should('have.text', 'You entered: WelCome Bro...!!!');
    });

    it('Handling JavaScript Prompt alert using cancel button', () => {
        // Stubbing the window.prompt method to simulate clicking the cancel button
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(null);
        });
    
        // Trigger the prompt alert by clicking the button
        cy.get("button[onclick='jsPrompt()']").click();
    
        // Assert the text present on the prompt alert (if necessary)
        cy.on('window:prompt', (text) => {
            expect(text).to.equal("I am a JS prompt");
        });
    
        // Validate the text present on the web element after canceling the prompt
        cy.get("#result").should('have.text', 'You entered: null');
    });

    it.only('Handling Authentication Pop-up-Approach-1', ()=>
    {
        //1.Approach-1: Pass the Authuentication while launching the Website:
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth:{username:'admin', password:'admin'}});


        cy.get("div[class='example']>p").should('include.text', 'Congratulations');
    })
    
    it.only('Handling Authentication Pop-up Approach-2', ()=>
        {
            //1.Approach-2: Pass the Authuentication in the url itself:
            cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    
    
            cy.get("div[class='example']>p").should('include.text', 'Congratulations');
        })
        
})
