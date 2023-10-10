@put_cross
Feature: Put Cross

    @put_cross_turn
    Scenario: Put cross in empty cell on cross turn
        Given It's cross's turn
        When User clicks on empty cell
        Then Put cross in cell

    @put_cross_no_turn
    Scenario: Put cross in empty cell on not cross turn
        Given It's not cross's turn
        When User clicks on empty cell
        Then Don't put cross in cell

    @put_cross_in_occupied_cell
    Scenario: Put cross in occupied cell
        Given It's cross's turn and field1 is occupied
        When User clicks on occupied cell
        Then Leave cell unchanged