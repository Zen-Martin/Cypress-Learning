@Web
Feature: Re-Test Cases for Auchan Website without account Access
  Background:
    Given I am on the homePage

  @severity=critical
  @bug_1235
  Scenario: Link to a non-existent page
    When Scroll down, click on the *filières responsables*
    And Click on *voir tous les produits*
    Then A page displaying a message that the page is no longer available

  @severity=minor
  @bug_1197
  Scenario: Bad host
    When Scroll down to *A propos d'auchan* then click
    And Click on *espace presse*
    Then The link redirects to an address that cannot be found

  @severity=minor
  @recommandation_1212
  Scenario: Update copyright
    When Scroll to footer
    Then The footer copyright is out dated