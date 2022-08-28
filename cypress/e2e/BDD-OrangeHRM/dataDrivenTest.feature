Feature: using data tabe to execute Data Driven Test in Cucumber
  @Smoke
  Scenario: data driven test to add multiple employees in Cucumber
    Given I open Add Employee page
    When Add new employees
        |First Name|Middle Name|Last Name|Employee Id|
        |Mark|Morga|ZZZ|999|
        |Kilian|Smith|ZZZ|999|
        |Rich|Stan|ZZZ|999|
    Then all of them should be added