
// Declare global variables
const email = "joanmay132@hotmail.com"
const email2 = "juanito@hotmail.com"
const password = "Patitojuan1"
const password2 = "Patitojuan1"
const password_Short= "Pat1"
const password_Short2= "Pat1"
const longPassword= "Patitoclavounclavitoensucasitahaciendowk1"
const longPassword2= "Patitoclavounclavitoensucasitahaciendowk1"
const securityAnswer = "Patitojuan1"

describe("Test Suite - Sign up",()=>{
    beforeEach(()=>{
        
        cy.visit("https://juice-shop.herokuapp.com/#/") // Visit the URL
        cy.get('.close-dialog').click()  // Close the dialog
        cy.get('.cc-btn').click() // Close the cookies
        cy.get('#navbarAccount > .mat-button-wrapper > span').click() // Click on the account button
        cy.get('#navbarLoginButton > span').click() // Click on the login button
        cy.get('#newCustomerLink > .primary-link').click({force:true}) // Click on the "Not yet a customer?" button
    })
    // Function to type the email and password
    const typeemail=(email,password)=>{
        // Type the email
        cy.get('.mat-form-field.ng-tns-c21-13 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(email)
        cy.get('#passwordControl').type(password) // Type the password
        //Repeat password
        cy.get('.mat-form-field.ng-tns-c21-15 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(password2) 
    }
    // Function to select the security question filter 
    const selectSecurityQuestion=()=>{
        cy.get('.mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        cy.get('#mat-option-4 > .mat-option-text').click(); // Select the 4 option by selector"
        cy.get('#securityAnswerControl').type(securityAnswer) // Type the security answer
    }
    // Function to click on the register button
    const clickRegister=()=>{
        cy.get('#registerButton').click()  // Click on the register button
    }


    //New function to the story 3 and 4
    const typeemail2=()=>{
        cy.get('.mat-form-field.ng-tns-c21-13 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(email2)
    }

    it("Story1 - TC_ID_01",()=>{
        typeemail(email,password,password2); //Call the function to type the email and password
        selectSecurityQuestion(); // Call the function to select the security question filter
        clickRegister(); // Call the function to click on the register button
    })
    it("Story - TC_ID_02",()=>{
        cy.get('#registerButton').should('be.disabled') // Verify that the register button is disabled

    })
    it("Story - TC_ID_03",()=>{
        typeemail2(); //Call the function to type the email and password
        cy.get('#passwordControl').type(password_Short) // Type the shortest password
        cy.get('.mat-form-field.ng-tns-c21-15 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(password_Short2)
        selectSecurityQuestion();
        cy.get('#mat-error-9').contains("Password must be 5-40 characters long.")
    })
    it("Story - TC_ID_04",()=>{
        typeemail2(email);
        cy.get('#passwordControl').type(longPassword)
        cy.get('.mat-form-field.ng-tns-c21-15 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(longPassword2)
        selectSecurityQuestion();
        cy.get('#mat-error-10').contains("Password must be 5-40 characters long.")
    })

    it("Story - TC_ID_05",()=>{
        typeemail(email,password,password2);
        selectSecurityQuestion();
        clickRegister();
        cy.get('.error').contains("Email must be unique")
    })
    
});