Feature: spying and stubbing network calls using cy.intercept
  
  Scenario: Intercept request and stub one person
    Given I'm logged in
    When Search for developers
    Then I should see only one developer