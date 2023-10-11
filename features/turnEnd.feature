@turnEnd
Feature: Put Cross

    @turnEnd_winner
    Scenario: Cross wins
        Given It's cross's turn, two cross is in row
        When User places third cross in row
        Then Cross wins, clear field

    @turnEnd_draw
    Scenario: Draw
        Given Filled field without one cell
        When User clicks on last empty cell
        Then Result is draw, clear field

    @turnEnd_next_turn
    Scenario: Not a decisive state
        Given Field is not filled, there are no three cross or zeros in row
        When User clicks on empty cell
        Then Change turn