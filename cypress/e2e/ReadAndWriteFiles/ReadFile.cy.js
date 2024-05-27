describe("Reading file in cypress:", () => {
    it("Read Json File", () => {
        cy.readFile("./cypress/fixtures/DemoJsonFileForWrite.json").then((fileContent) => {
            cy.log(fileContent)
        });
    });

    
    it("Read CSV File", () => {
        cy.readFile("./cypress/fixtures/DemoCsvFileForWrite.csv").then((fileContent) => {
            cy.log(fileContent)
        });
    })

    it("Read Text File", () => {
        cy.readFile("./cypress/fixtures/DemoTextFileForWrite.txt").then((fileContent) => {
            cy.log(fileContent)
        });
    })


})