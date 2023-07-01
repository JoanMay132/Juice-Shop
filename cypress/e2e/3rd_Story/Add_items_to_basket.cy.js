
describe('Adding items to basket - Test Suite', () => {
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

})

  it('Story 1 - TID_01', () => {
    cy.contains('Add to Basket').eq(0).click(); // Primer elemento
    
    cy.get('[style="left: calc((50% - 15px + 30px) * 1); width: calc((50% - 15px) * 1 + 0px); margin-top: 0px; padding-top: calc((50% - 15px) * 1 + 0px);"] > .mat-grid-tile-content > .mat-card > [style="display: flex; justify-content: center;"] > .mat-focus-indicator > .mat-button-wrapper > span').click(); // Segundo elemento
    cy.get('[style="left: 0px; width: calc((50% - 15px) * 1 + 0px); margin-top: calc((50% - 15px + 30px) * 1); padding-top: calc((50% - 15px) * 1 + 0px);"] > .mat-grid-tile-content > .mat-card > [style="display: flex; justify-content: center;"] > .mat-focus-indicator > .mat-button-wrapper > span').click(); // Tercer elemento

  })
  it('Story 2 - TID_02', () => {
    
    cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted').click(); // Click on the basket
    
        // Obtén todos los elementos que coinciden con el selector
    const elementos = cy.get(':nth-child(3) > .cdk-column-remove > .mat-focus-indicator');

    // Itera sobre los elementos y haz clic en cada uno
    cy.get('.cdk-column-remove > .mat-focus-indicator').each(($el ) => {
      cy.wrap($el).click();
    });


    cy.get('#checkoutButton').should('be.disabled'); // Verify that the price is unabled
  })
  it('Story 3 - TID_03', () => {
    cy.get('[style="left: calc((50% - 15px + 30px) * 1); width: calc((50% - 15px) * 1 + 0px); margin-top: calc((50% - 15px + 30px) * 5); padding-top: calc((50% - 15px) * 1 + 0px);"] > .mat-grid-tile-content > .mat-card > [style="display: flex; justify-content: center;"] > .mat-focus-indicator').click(); // Primer elemento
    cy.get('.mat-snack-bar-container').contains("We are out of stock! Sorry for the inconvenience").should('be.visible'); // Verify that the price is unabled

  })
  it('Story 4 - TID_04', () => {
    cy.contains('Add to Basket').eq(0).click(); // Primer elemento
    
    cy.get('[style="left: calc((50% - 15px + 30px) * 1); width: calc((50% - 15px) * 1 + 0px); margin-top: 0px; padding-top: calc((50% - 15px) * 1 + 0px);"] > .mat-grid-tile-content > .mat-card > [style="display: flex; justify-content: center;"] > .mat-focus-indicator > .mat-button-wrapper > span').click(); // Segundo elemento
    cy.get('[style="left: 0px; width: calc((50% - 15px) * 1 + 0px); margin-top: calc((50% - 15px + 30px) * 1); padding-top: calc((50% - 15px) * 1 + 0px);"] > .mat-grid-tile-content > .mat-card > [style="display: flex; justify-content: center;"] > .mat-focus-indicator > .mat-button-wrapper > span').click(); // Tercer elemento
    cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted').click(); // Click on the basket
    cy.get('#checkoutButton').should('not.be.disabled'); // Verify that the price is unabledd

  })
  it('Story 5 - TID_05', () => {
    
    cy.contains('Add to Basket').eq(0).click(); // Primer elemento
    cy.get('[style="left: calc((50% - 15px + 30px) * 1); width: calc((50% - 15px) * 1 + 0px); margin-top: 0px; padding-top: calc((50% - 15px) * 1 + 0px);"] > .mat-grid-tile-content > .mat-card > [style="display: flex; justify-content: center;"] > .mat-focus-indicator > .mat-button-wrapper > span').click(); // Segundo elemento
    cy.get('[style="left: 0px; width: calc((50% - 15px) * 1 + 0px); margin-top: calc((50% - 15px + 30px) * 1); padding-top: calc((50% - 15px) * 1 + 0px);"] > .mat-grid-tile-content > .mat-card > [style="display: flex; justify-content: center;"] > .mat-focus-indicator > .mat-button-wrapper > span').click(); // Tercer elemento
    cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted').click(); // Click on the basket
    cy.viewport(1920, 1080) // Establece el tamaño de la ventana del navegador a 1920x1080 píxeles

    cy.get('#checkoutButton').should('not.be.disabled'); // Verify that the price is unabledd
    cy.get('#checkoutButton').click()
    cy.get(':nth-child(2) > .cdk-column-Selection').click()
    cy.get('.btn-next').click()
    cy.get(':nth-child(2) > .cdk-column-Selection').click()
    cy.get('.nextButton').click()
    cy.get('.mat-radio-container').click()
    cy.get('.nextButton').click()
    cy.get('#checkoutButton').click()
    cy.get('.mat-drawer-content').contains("Thank you for your purchase!")
    
    
    
  })
})