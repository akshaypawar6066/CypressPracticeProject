describe('Test the Login Application using valid and Invalid credentials', () => {
    it('Login to application using valid as well as Invalid Credentails', () => {
        cy.fixture('DataDrivenTest.json').then((data) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username, { delay: 100 });
                cy.get("input[placeholder='Password']").type(userdata.Password, { delay: 100 });
                cy.get("button[type='submit']").click();

                if (userdata.username == "Admin" && userdata.Password == "admin123") {
                    //Verify Text after the Login
                    cy.xpath("//span[text()='Admin']").should('have.text', userdata.expectedMessage);
                    cy.wait(2000);

                    //Screenshot of Home page
                    cy.screenshot("HomePageScreenshot");

                    //Screenshot of Logo
                    cy.get("img[alt='client brand banner']").screenshot("ApplicationLogo");
                    cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
                    cy.wait(1000);
                    cy.xpath("//a[text()='Logout']").click();
                    cy.wait(8000);
                }

                else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text', userdata.expectedMessage);
                }

            })
        })
    });

    it.skip('Login to application using valid as well as Invalid Credentails in Random Order', () => {
        cy.fixture('DataDrivenTestInRandomOrder.json').then((data) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username, { delay: 100 });
                cy.get("input[placeholder='Password']").type(userdata.Password, { delay: 100 });
                cy.get("button[type='submit']").click();

                if (userdata.username == "Admin" && userdata.Password == "admin123") {
                    //Verify Text after the Login
                    cy.xpath("//span[text()='Admin']").should('have.text', userdata.expectedMessage);
                    cy.wait(2000);
                    cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
                    cy.wait(1000);
                    cy.xpath("//a[text()='Logout']").click();
                    cy.wait(8000);
                }

                else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text', userdata.expectedMessage);
                }

            })
        })
    })
})