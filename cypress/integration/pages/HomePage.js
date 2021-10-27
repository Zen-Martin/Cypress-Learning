/// <reference types = "cypress"/>

const cookieOption = "#onetrust-reject-all-handler";

const visitOption = ".onboarding__link.link.link--underlined.onboardingNoMore > span";

const affiate = "#cms-slot-footerSlot > footer:nth-child(2) > div > div > div > p:nth-child(4) > a:nth-child(1)";

const seeAllProduct = ".flex-wrapper > #wrapper > #cms-slot-contentSlot > .filieres--edito > .btn";

const aboutAuchan = "div > section:nth-child(1) > button > span.collapsible__text";

const spacePress = "div > section.collapsible.footer-links__collapsible.active > main > a:nth-child(3)";

const config = require("../../fixtures/config.json");

const device = require("../../fixtures/device.json");

class HomePage{

goToHomepage(){
    cy.viewport(device.desktop.width,device.desktop.height);
    cy.visit(config.env_URL);

    cy.get(cookieOption).should("be.visible")
    .click();

    cy.get(visitOption).should("be.visible")
    .click({force: true});
}

clickOnAffiate(){
    cy.get(affiate)
    .scrollIntoView({easing: 'linear'})
    .should('be.visible')
    .click({force: true});
}

clickOnAllProductView(){
    cy.get(seeAllProduct).click();
}

scrollToAboutAuchan(){
    cy.get(aboutAuchan).scrollIntoView({easing: "linear"})
    .should("be.visible")
    .click({force: true});
}

clickOnSpacePress(){
    cy.get(spacePress).should("be.visible")
    .click({force: true});
}

verifyRedirection(){
    cy.title().should('eq', 'Mes courses du quotidien pas cher à prix Auchan');
}

verifySpacePressLink(){
    cy.get(spacePress)
    .invoke('attr', 'href')
    .then(href => { cy.request(href)
        .its('status')
        .should('eq', 200);
  });
}

}


const homepage = new HomePage();

export default homepage;