describe('Handling of Tables in CYpress', () => {
    let testData;
    before('Get The Expected Text Data from fixture file', () => {
        cy.fixture('example.json').then((data) => {
            testData = data;
        })
    })
    beforeEach('Navigate to the Website', () => {
        cy.visit("https://trends.builtwith.com/websitelist/DataTables");
        cy.reload();
        cy.wait(2000);
    });



    it('Verify No of Rows and columns in the table', () => {
        //Verify No of rows count
        cy.get("table[class='table table-responsive-sm table-sm mt-2 table-hover']>tbody>tr").should('have.length', testData.expectedRowLength);
        //Verify No of columns count
        cy.get("table[class='table table-responsive-sm table-sm mt-2 table-hover']>thead>tr>th").should('have.length', testData.expectedColLength)

    });

    it("Verfy the data of specific cell", ()=>
    {
      cy.xpath("//tr[@data-domain='bootbarn.com']//td[contains(text(),'Medium')]").should('have.text', testData.expectedCellText);
    });

    it('Itearte all the rows and read the data of each column:', ()=>
    {
          cy.get("tbody>tr").each(($row, index, $rows)=>
        {
          cy.wrap($row).within(()=>
        {
            cy.get('td').each(($col, index, $cols)=>
            {
                let cellText = $col.text();
                cy.log(cellText);
            })
        })
        })
    })
})