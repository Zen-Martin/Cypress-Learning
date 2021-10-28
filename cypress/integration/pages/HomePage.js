/// <reference types = "cypress"/>

const cookieOption = "#onetrust-reject-all-handler";

const visitOption = ".onboarding__link.link.link--underlined.onboardingNoMore > span";

const affiate = "#cms-slot-footerSlot > footer:nth-child(2) > div > div > div > p:nth-child(4) > a:nth-child(1)";

const seeAllProduct = ".flex-wrapper > #wrapper > #cms-slot-contentSlot > .filieres--edito > .btn";

const aboutAuchan = "div > section:nth-child(1) > button > span.collapsible__text";

const spacePress = "div > section.collapsible.footer-links__collapsible.active > main > a:nth-child(3)";

const copyRight = "div > div:nth-child(2) > div.footer-legal__copyright";

const config = require("../../fixtures/config.json");

const device = require("../../fixtures/device.json");

const currentDate = new Date();

class HomePage{

goToHomepage(){
    cy.viewport(device.desktop.width,device.desktop.height);
    cy.visit(config.env_URL);

    cy.wait(1000);

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
    cy.wait(1000);
    cy.get(seeAllProduct)
    .should("be.visible")
    .click();
}

scrollToAboutAuchan(){
    cy.get(aboutAuchan).scrollIntoView({easing: "linear"})
    .should("be.visible")
    .click({force: true});
}

clickOnSpacePress(){
    cy.get(spacePress)
    .should("be.visible");
}

verifyRedirection(){
    cy.wait(1000);
    cy.title()
    .should('eq', 'Mes courses du quotidien pas cher à prix Auchan');
}

verifySpacePressLink(){
    cy.get(spacePress)
    .should("be.visible")
    .invoke('attr', 'href')
    .request(href)
    .should((response) => {
        expect(response.status).to.eq(200);
      });
}

scrollToFooter(){
    cy.get(copyRight)
    .scrollIntoView({easing: 'linear'});
}

verifyCopyright(){
    cy.get(copyRight)
    .should("contain.text",currentDate.getFullYear()+"");
}

}

const homepage = new HomePage();

export default homepage;