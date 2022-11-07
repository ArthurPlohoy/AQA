
describe('Verifying variables, cypress commands and jquery commands', () => {
    // it('Navigating to specific product page', () => {
        // cy.visit("https://www.automationteststore.com/");

        // // The following will fail
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup');
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare');
        // makeupLink.click();
        // skincareLink.click();

        // // The following will pass
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup');
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare');
        // skincareLink.click();

        //Recommended Approach 
        // cy.get("a[href*='product/category&path=']").contains('Makeup').click();
        // cy.get("a[href*='product/category&path=']").contains('Skincare').click();

    // });
    it('Navigating to specific product page, next step', () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();
        
        // const header = cy.get('h1 .maintext')
        // cy.log(header);

        cy.get('h1 .maintext').then(($headerText) =>{
            const headerText = $headerText.text();
            cy.log('Found header text: ' + headerText);
            expect(headerText).to.equal('Makeup');
        })
    });

    it.only('Validate properties of the Contact Us Page', () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:')
        
    });
});