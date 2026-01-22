import { selectors as formSelectors } from "../support/pages/formFieldsPage.js";
import { faker } from "@faker-js/faker";

describe("Login", function () {
  beforeEach(function () {
    cy.visit("https://practice-automation.com/form-fields");
  });
  it("TC01 User can fill out the fields and submit the form successfully", function () {
    formSelectors.formFieldsTitle().should("be.visible");
    formSelectors.nameField().type("John Doe");
    formSelectors.passwordField().type("password123");
    formSelectors.checkboxField().click();
    formSelectors.radiobuttonField().click();
    formSelectors.dropdownField().select("Undecided");
    formSelectors.fieldText().should("be.visible");
    formSelectors.emailField().type(faker.internet.email());
    formSelectors.textAreaField().type(faker.lorem.sentence(6));
    formSelectors.submitButton().click();

    cy.on("window:alert", (text) => {
      expect(text).to.equal("Message received!");
    });
  })

  it("TC02 User fills out only a mandatory field and submit the form successfully", function () {
      formSelectors.nameField().type("John Doe");
      formSelectors.submitButton().click();

      cy.on("window:alert", (text) => {
        expect(text).to.equal("Message received!");
      });
    });  

    
  });
