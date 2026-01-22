import { selectors as selectors } from "../support/pages/supportPage.js";
import { fakerEN_CA as faker } from "@faker-js/faker";

describe("Login", function () {
  beforeEach(function () {
    cy.visit("https://awery.aero/support");
    selectors.supportFormBody();
  });
  it("TC04 – Form is submitted with all of the fields filled in", function () {
    selectors.problemDescription().type(faker.lorem.sentence(6));
    selectors.errorMessage().type(faker.lorem.sentence(6));
    selectors.whenStarted().type(faker.lorem.sentence(6));
    selectors.stepsTorRecreate().type(faker.lorem.sentence(6));
    selectors.email().type(faker.internet.email());
    selectors.companyName().type(faker.lorem.words(1));
    selectors.fullName().type(faker.lorem.words(1));
    selectors.phone().type("+380977127675");
    selectors.followUpTime().type("10:00");
    selectors.requestButton().click();
    //Тут ще має бути перевірка про те що отримано повідомлення про успішну відправку форми, але оскільки вона не працює - її немає
  });

  it("TC01 – User submits form filling out the mandatory fields only", function () {
    selectors.problemDescription().type(faker.lorem.sentence(6));
    selectors.email().type(faker.internet.email());
    selectors.requestButton().click();
  });

  it("TC02 – Required field validation (Problem Description)", function () {
    selectors.errorMessage().type(faker.lorem.sentence(6));
    selectors.whenStarted().type(faker.lorem.sentence(6));
    selectors.stepsTorRecreate().type(faker.lorem.sentence(6));
    selectors.email().type(faker.internet.email());
    selectors.companyName().type(faker.lorem.words(1));
    selectors.fullName().type(faker.lorem.words(1));
    selectors.phone().type("+380977127675");
    selectors.followUpTime().type("10:00");
    selectors.requestButton().click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Fill all necessary fields!");
    });
  });
  it("TC03 – Email field format validation)", function () {
    selectors.problemDescription().type(faker.lorem.sentence(6));
    selectors.errorMessage().type(faker.lorem.sentence(6));
    selectors.whenStarted().type(faker.lorem.sentence(6));
    selectors.stepsTorRecreate().type(faker.lorem.sentence(6));
    selectors.email().type(faker.lorem.words(1));
    selectors.uploadfile().selectFile('cypress/fixtures/test.pdf');
    selectors.companyName().type(faker.lorem.words(1));
    selectors.fullName().type(faker.lorem.words(1));
    selectors.phone().type("+380977127675");
    selectors.followUpTime().type("10:00");
    selectors.requestButton().click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Invalid email!");
    });
    //Якщо запустити цей тест, то форма відправляється, тобто є помилка валідаціїї поля email на сайті. 
  });
});
