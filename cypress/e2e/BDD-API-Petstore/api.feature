Feature: API automation
  
  Scenario: POST to add new pet to the store
    When I send POST request
    Then new pet is added to the store

  Scenario: GET to find pet by ID
    When I send GET request
    Then I should receive pet information

  # Scenario: PUT to update an existing pet
  #   When I send PUT request
  #   Then existing pet is updated

  # Scenario: DELETE to delete a pet
  #   When I send DELETE request
  #   Then existing pet is deleted