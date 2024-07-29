Feature: Register an account in the tractive staging server

  Scenario Outline: Registers an account to the stage server with invalid information
    Given I navigate to the "<url>"
    When I click Create Account  
    When I enter "<firstname>" for First name, "<lastname>" for last name "<email>" for email and "<password>" password.
    Then I should see an error "<error>"

    Examples:
     | url                            | firstname | lastname | email                     | password       | error                        |
     | https://my-stage.tractive.com/ | Test      | Account  | testemail@testcompany.com | MyPassword!234 | The email address is invalid |
     | https://my-stage.tractive.com/ | Test      | Account  | hachiko@gmail.com         | 1234           | Minimum length is 8 characters |

    Scenario Outline: Registers an account to the stage server with valid email
    Given I navigate to the "<url>"
    When I click Create Account  
    When I enter "<firstname>" for First name, "<lastname>" for last name "<email>" for email and "<password>" password.
    When I click submit
    Then I should see the page for enrolling the tracker

    Examples:
     | url                            | firstname | lastname | email                  | password       |
     | https://my-stage.tractive.com/ | Test      | Account  | myemail@gmail.com | MyPassword!234 |
