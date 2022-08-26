Feature: Automation Practice Features
  Scenario: Visit page
    When I visit Automation Practice
    Then I should see the Store

  Scenario: Valid login
    Given I open login page
    When I enter my credentials
    Then I should be able to login