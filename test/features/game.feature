Feature: Game Page

  Scenario: User can play a game
    Given I am a user
    When I navigate to the interactive page
    Then I should see question "Are sharks in danger ?"
    When I answer the question "Are sharks in danger ?"
    Then I should see question "Are sharks killers like in the movies ?"
    When I answer the question "Are sharks killers like in the movies ?"
    Then I should see question "What is shark finning ?"
    When I answer the question "What is shark finning ?"
    Then I should see question "Can we observe great white sharks in captivity ?"
    When I answer the question "Can we observe great white sharks in captivity ?"
    Then I should see question "Why can't we see skeleton of sharks ?"
    When I answer the question "Why can't we see skeleton of sharks ?"