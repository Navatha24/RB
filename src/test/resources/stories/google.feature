@tag
Feature: Google Welcome Screen
  As a google user
  I want to visit google welcome screen
  So that I can search for anything

  @tag1
  Scenario: Google logo and subtext
    Given I navigate to google page
    When I view google logo and its subtext
    Then google logo text is "Google"
    And its subtext is "New Zealand"

  @tag2
  Scenario Outline: Google search
  	Given I navigate to google page
    And I enter text "<searchText>" in search box
    When I click Google Search
    Then I an navigated to google search page
    And the first search result is "<firstSearchResult>"

    Examples: 
      | searchText | firstSearchResult |
      | Cheese     | Cheese - Wikipedia  |
      | Cucumber   | Cucumber          |
