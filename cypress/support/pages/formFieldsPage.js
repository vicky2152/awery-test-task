
const selectors = {
    
    formFieldsTitle: () => cy.get('h1[itemprop="headline"]'),
    nameField: () => cy.get('input[data-cy="name-input"]'),
    passwordField: () => cy.get('input[type="password"]'),
    checkboxField: () => cy.contains('label', 'Wine'),
    radiobuttonField: () => cy.get('input[type="radio"]').eq(2),
    dropdownField: () => cy.get('select[data-cy="automation"]'),
    fieldText: () => cy.contains('label', 'Automation tools'),
    emailField: () => cy.get('input#email'),
    textAreaField: () => cy.get('textarea#message'),
    submitButton: () => cy.get('button#submit-btn'),
    successMessage: () => cy.get('div[role="alert"] div'),
    



}
  export {
    selectors,
  }