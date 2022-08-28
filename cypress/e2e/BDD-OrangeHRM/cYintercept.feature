Feature: spying and stubbing network calls using cy.intercept
  
  Scenario: Intercept and mock the RESPONSE
    When Search for developers
    Then I should see only one developer

  Scenario: Intercept and mock the REQUEST
    When Modify the request to server as a Job Title ID
    Then server response should be for the new Job Title