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