Feature: OrangeHRM Features
  Scenario: Visit Login Page
    When I visit OrangeHRM
    Then I should see Login

  Scenario: Valid Login
    Given I open login page
    When I enter my credentials
    Then I should be able to login