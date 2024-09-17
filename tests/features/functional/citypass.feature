Feature: Stadspas

    @skip @BeforeClean @AfterClean
    Scenario: Stadspas overzicht
        Given ik login via deepLink
        Then ik zie het overzicht met mijn stadspassen

    @skip @BeforeClean @AfterClean
    Scenario: Stadspas volwassene
        Given ik login via deepLink
        When ik open de stadspas details van een volwassene
        Then ik zie de stadspas details van een volwassene

    @skip @BeforeClean @AfterClean
    Scenario Outline: Stadspas kind <naam>
        Given ik login via deepLink
        When ik open de stadspas details van kind <naam>
        Then ik zie de stadspas details van kind <naam>
        When ik open het kindtegoed overzicht <kindtegoed>
        Then ik zie een betalingen overzicht horend bij <kindtegoed>
        Examples:
            | naam    | kindtegoed       |
            | Chelsea | kindtegoed_10_11 |
            | Chelsea | kindtegoed_4_9   |
            | Mini    | kindtegoed_10_11 |
            | Mini    | kindtegoed_0_3   |

    @BeforeClean @AfterClean
    Scenario: Inloggen
        Given ik login via de browser
