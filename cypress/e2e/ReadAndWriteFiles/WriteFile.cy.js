describe("Writing into the files", () => {
    it("Writing data into the text file:", () => {
        cy.writeFile("./cypress/fixtures/DemoTextFileForWrite.txt", "I am is the Demo File Contenet");
    });

    it("Writing data into the Json File", () => {
        cy.writeFile("./cypress/fixtures/DemoJsonFileForWrite.json", { "Username": "Akshay", "password": "Akshay@123" });
    });

    it("Writing data into the CSV file", () => {
        // Data to be written into the CSV file
        const csvData = "Name,Age\nJohn,30\nDoe,25";

        // Write data into the CSV file
        cy.writeFile("./cypress/fixtures/DemoCsvFileForWrite.csv", csvData);
    });
})