Feature: Shark Page

  Scenario: User navigate between shark pages
    Given I am a user
    When I navigate to the "first" specie page
    Then I should be able to navigate to the "next" page
    When I navigate to the "second" specie page
    Then I should be able to navigate to the "previous" page
