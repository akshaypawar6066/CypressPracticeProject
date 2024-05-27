describe('Handling  FileUpload using Default Method of Cypress that is selectFile() Method', () => {

    it('Handling FileUpload using default method of cypress that is selectFile() method', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.wait(2000);
        cy.get("#file-upload").selectFile("cypress/fixtures/DemoTextFile.txt");
        cy.wait(2000);
    })

    it('Handling multiple FileUpload using default method of cypress that is selectFile() method', () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.wait(2000);

        //Before Uploading file No file choosen is visible
        cy.xpath("//li[normalize-space()='No Files Selected']").should('be.visible');

        //Upload files
        cy.get("#filesToUpload").selectFile(["cypress/fixtures/DemoTextFile1.txt", "cypress/fixtures/DemoTextFile2.txt"]);
        cy.wait(2000);

        //After uplaoding file no file choosen should not be xists
        cy.xpath("//li[normalize-space()='No Files Selected']").should('not.exist');

    })
});



describe('Handling  FileUpload using FileUpload Plugin  Method of Cypress that is attachFile Method', () => {

    let testData;
    before('Hook for Getting Test Data', () => {
        cy.fixture('example.json').then((data) => {
            testData = data;
        })
    })
    it('Handling FileUpload using cypress file upload plugin method that is  attachFile() method', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.wait(2000);
        cy.get("#file-upload").attachFile("Yatra Registration Letter - UTDB.pdf");
        cy.wait(2000);
    });

    it('Upload file by changing its name', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.wait(2000);
        cy.get("#file-upload").attachFile({ filePath: "Yatra Registration Letter - UTDB.pdf", fileName: "ABC.pdf" })
        cy.wait(2000);
    })

    it('Upload file by Using dap and drop', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.wait(2000);
        cy.get("#file-upload").attachFile("Yatra Registration Letter - UTDB.pdf", { subjectType: "drag-n-drop" });;
        cy.wait(2000);
    })

    it('Upload Multiple files using cypress fle upload plugin method that is attachFile() method', () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.wait(2000);



        //Before Uploading file No file choosen is visible
        cy.xpath("//li[normalize-space()='No Files Selected']").should('be.visible');

        //Upload files
        cy.get("#filesToUpload").attachFile(["Yatra Registration Letter - UTDB (1).pdf", "Yatra Registration Letter - UTDB (2).pdf"]);
        cy.wait(2000);

        //After uplaoding file no file choosen should not be exists
        cy.xpath("//li[normalize-space()='No Files Selected']").should('not.exist');

    });
    it('Upload the File in which where file uplaod option is present inside the another dom of main dom(Shadow DOM)', () => {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/');

        cy.frameLoaded(".demo-frame");
        cy.iframe(".demo-frame").find("input[class='smart-browse-input']", { includeShadowDom: true }).attachFile("DemoTextFile.txt");
        cy.wait(4000);

        //Validate file is attched or not
        cy.iframe('.demo-frame').find('.smart-item-name', { includeShadowDom: true }).should('contain.text', 'DemoTextFile.txt');
    });

    it('Upload the file and verify the expected text by fetching it from fixture file', () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#file-upload").invoke('removeAttr', 'target').click();

        //Upload the file
        cy.get("#myFile").attachFile("DemoTextFile.txt");
        cy.get("#submit-button").click();
        
        //Once clicked on confirm, Alert should present and have expected text which is specified in the fixtue data
        cy.on('window:alert', (text) => {
            expect(text).to.equal(testData.expectedAlertText);
        });

    });

        it('Get The text present onto the WebElement using Resusbale Command', ()=>
        {
            cy.visit("https://www.webdriveruniversity.com/");
            cy.get("#file-upload").invoke('removeAttr', 'target').click();

            cy.getTextPresentOntoTheWebElement("div[id='main-header'] h1").then((text)=>
            {
                cy.log("Text present onto the WebElement is:"+text);
            })

        })

    })
