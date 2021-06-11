Feature: Show/Hide an Event’s Details

  Scenario: An event element is collapsed by default.
    Given the user has just opened the app
    When the user hasnt expanded any event to see the details yet
    Then the user should see a list of events with their details collapesed

  Scenario: User can expand an event to see its details.
    Given the user opens the app and sees a list of events with their details collapsed
    When the user clicks on a specific event's ShowDetails button
    Then the event expands showing all the details about that specific event

  Scenario: User can collapse an event to hide its details.
    Given the user has clicked on the ShowDetails button, expanding the details of the Event
    When the user clicks on HideDetails button
    Then the event collapses hiding all the details of the given event