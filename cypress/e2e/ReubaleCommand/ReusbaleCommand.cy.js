describe('Verify Login Functionality', ()=>
{
    let loginData

    before('Hook to get the Login Data', ()=>
    {

        cy.fixture("LoginData.json").then((data)=>
        {
            loginData = data;
        })
       
    });


    beforeEach('Navigate to the Application', ()=>
    {
        cy.log("Navigating to the Application...!!!")
        cy.visit(Cypress.env("AppUrl"));
    });


    it('Login to application using correct credentails', ()=>
    {
        cy.loginToTheApplication(loginData.validUsername, Cypress.env("Password"));
        cy.VerfyLoginWithCorrectCredentails(loginData.ExpectedHomePageUrl);
    });

    it('Login to application using Incorrect credentails', ()=>
        {
            cy.loginToTheApplication(loginData.inValidUsername,loginData.inValidPassword);
            cy.VerfyLoginWithInCorrectCredentails(loginData.expectedMsgOnInavlidCredentails);
        })
})