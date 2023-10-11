@turnEnd
Feature: Turn end

    @turnEnd_winner
    Scenario: Cross wins
        Given There is a state for cross win
        When Turn end
        Then Cross wins, new game starts

    @turnEnd_draw
    Scenario: Draw
        Given There is a state for draw at the field 
        When Turn end
        Then Result is draw, new game starts

    @turnEnd_next_turn
    Scenario: Not in a decisive state
        Given Field is not in a decisive state
        When Turn end
        Then Change turn