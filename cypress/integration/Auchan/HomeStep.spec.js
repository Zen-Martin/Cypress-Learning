/// <reference types = "cypress"/>

import homepage from "../pages/HomePage";


Given("I am on the homePage", () => {
    //cy.viewport(1280,720);
    homepage.goToHomepage();
});

When("Scroll down, click on the *filières responsables*", () => {
    homepage.clickOnAffiate();
});
 
When("Click on *voir tous les produits*", () => {
    homepage.clickOnAllProductView();
});
 
Then("A page displaying a message that the page is no longer available", () => {
    homepage.verifyRedirection();
});
