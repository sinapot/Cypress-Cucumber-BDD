Feature: Finding element locators
  
  Scenario: Text fields to add an employee
    Given I add an employee
    When fill out the form and save
    Then employee should be added

  Scenario: Checkboxes to delete employee
    When I tick checkbox and delete employee
    Then selected employee should be deleted

  Scenario: Dropdown to search Employee
    When I search for an employee
    Then search employee should be displayed
  
  Scenario: Link to show Reports
    When I click Reports
    And click Employee Job Details reports
    Then Employee Job Details should be displayed