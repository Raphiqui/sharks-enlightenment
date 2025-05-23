Feature: Internationalization

  Scenario: User can switch to french
    Given I am a user
    When I navigate to the home page
    When I pick "french" as main language
    Then The website is in "french"

  Scenario: User can switch to spanish
    Given I am a user
    When I navigate to the home page
    When I pick "spanish" as main language
    Then The website is in "spanish"
