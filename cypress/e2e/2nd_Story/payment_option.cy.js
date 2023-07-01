
describe("Test Suite - Adding Payment Option",()=>{

    beforeEach(()=>{
        cy.visit("https://juice-shop.herokuapp.com/#/") // Visit the URL
        cy.get('.close-dialog').click()  // Close the dialog
        cy.get('.cc-btn').click() // Close the cookies
        cy.get('#navbarAccount > .mat-button-wrapper > span').click() // Click on the account button
        cy.get('#navbarLoginButton').click() // Click on the login button
        cy.get('.mat-form-field.ng-tns-c21-11 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("patitos@hotmail.com") // Click on the email field
        cy.get('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Patitojuan1") // Click on the password field
        cy.get('#loginButton').click() // Click on the login button    
        cy.get('body').click() 
        cy.get('#navbarAccount').click ()// Click on the account button
        cy.get('.mat-menu-content > [aria-label="Show Orders and Payment Menu"] > span').click();
        cy.get('[routerlink="/saved-payment-methods"] > span').click();
        cy.get('#mat-expansion-panel-header-0').click();
    })
    it("Story - TC_ID_01",()=>{  //Add successfully a payment option filling all the field
       
        cy.get('#mat-input-3').type("Juan Perez");
        cy.get('#mat-input-4').type("1234 5678 9101 1121");
        cy.get('#mat-input-5').select("6");
        cy.get('#mat-input-6').select("2081")
        cy.get('#submitButton').click();

    })
    
    it("Story - TC_ID_02",()=>{  //Add a payment option without filling the fields 
       

        cy.get('#submitButton').should('be.disabled');

    })
    it("Story - TC_ID_03",()=>{  //Add a payment option with just 15 digits in card number
       
        cy.get('#mat-input-3').type("Jose Perez");
        cy.get('#mat-input-4').type("1234 2678 9103 412");
        cy.get('#mat-input-5').select("7");
        cy.get('#mat-input-6').select("2085")
        cy.get('#mat-error-6').should('be.visible').contains("Please enter a valid sixteen digit card number.");
        cy.get('#submitButton').should('be.disabled');

    })
    it("Story - TC_ID_04",()=>{  //Add a payment option with 17 digits in card number
       
        cy.get('#mat-input-3').type("Juan Perez");
        cy.get('#mat-input-4').type("5234 5838 9101 11219");
        cy.get('#mat-input-5').select("8");
        cy.get('#mat-input-6').select("2083")
        
        cy.get('#mat-error-7').should('be.visible').and('contain', 'Please enter a valid sixteen digit card number.');

        cy.get('#submitButton').should('be.disabled');

    })
    it("Story - TC_ID_05",()=>{  //Attempt to add a payment option that already exists
       
        cy.get('#mat-input-3').type("Juan Perez");
        cy.get('#mat-input-4').type("1234 5678 9101 1121");
        cy.get('#mat-input-5').select("6");
        cy.get('#mat-input-6').select("2081")
        cy.get('#submitButton').should('be.disabled');

    })

})
