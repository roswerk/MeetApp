Feature: Specify Number of Events

  Scenario: When user hasn’t specified a number, 32 is the default number.
    Given the user hasnt specified a number of events
    When the app displays a default list of events
    Then the default number of events is 32

  Scenario: User can change the number of events they want to see.
    Given the default number of events is 32
    When the user changes the number in the Number of Events input field
    Then the user should see the list of events with the number of events specified (between 1 and 32) in our case 1