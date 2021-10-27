/// <reference types = "cypress"/>

import homepage from "../pages/HomePage";


Given("I am on the homePage", () => {
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

When("Scroll down to *A propos d'auchan* then click", () => {
    homepage.scrollToAboutAuchan();
});
 
When("Click on *espace presse*", () => {
    homepage.clickOnSpacePress();
});
 
Then("The link redirects to an address that cannot be found", () => {
    homepage.verifySpacePressLink();
});
