@DisplayResult
Feature: Display Result
    @DisplayResult
    Scenario: Showing Cross Win
        Given Page is open
        When Needs to show Cross win
        Then Cross win is displayed

    Scenario: Showing Zero Win
        Given Page is open
        When Needs to show Zero win
        Then Zero win is displayed

    Scenario: Showing Draw
        Given Page is open
        When Needs to show Draw
        Then Draw is displayed

    Scenario: Error
        Given Page is open
        When Incorrect state presented
        Then Error is displayed