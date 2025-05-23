Feature: Shark list Page

  Scenario: User can see a list of sharks
    Given I am a user
    When I navigate to the species page
    Then I should see "23" cards
