Feature: Parabank Features
  Scenario: Visit page
    When I visit Opencart
    Then I should see Your Store

  Scenario: Search iPhone
    Given I open login page
    When I enter my credentials
    Then I should be able to login