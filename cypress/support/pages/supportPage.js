
const selectors = {
    supportFormBody : () => cy.get('.support-form').should('exist'),
    problemDescription: () => cy.get('input[name="support[enquiry][problem_description]"]'),
    errorMessage: () => cy.get('input[name="support[enquiry][error_message]"]'),
    whenStarted: () => cy.get('input[name="support[enquiry][when_it_started]"]'),
    stepsTorRecreate: () => cy.get('textarea[name="support[enquiry][steps_to_recreate]"]'),
    email: () => cy.get('input#email'),
    companyName: () => cy.get('input[name="support[contact][company]"]'),
    fullName: () => cy.get('input[name="support[contact][name]"]'),
    phone: () => cy.get('input[data-type="phone"]'),
    followUpTime: () => cy.get('input[name="support[contact][time]"]'),
    requestButton: () => cy.contains('button', 'Send request'),
    uploadfile: () => cy.get('input[name="screen"]'),
}

  export {
    selectors,
  }