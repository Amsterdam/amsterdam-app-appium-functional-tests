Feature: Plaatsberichten

    @BeforeClean @AfterClean
    Scenario: Plaats bericht zonder pushbericht, zonder foto
        Given ik ben OM/CA en heb een plaats berichten module in de app
        When ik plaats een bericht zonder pushbericht, zonder foto, voor project Sluisbuurt op Zeeburgereiland
        Then mijn bericht wordt getoond in het nieuwsoverzicht van project Sluisbuurt op Zeeburgereiland

    @skip @BeforeClean @AfterClean
    Scenario: Plaats bericht zonder pushbericht, met foto
        Given ik ben OM/CA en heb een plaats berichten module in de app
        When ik plaats een bericht zonder pushbericht, met foto middels de foto toevoegen knop, voor project Sluisbuurt op Zeeburgereiland
        Then mijn bericht wordt getoond in het nieuwsoverzicht van project Sluisbuurt op Zeeburgereiland

    @skip @BeforeClean @AfterClean
    Scenario: Plaats bericht met pushbericht, zonder foto
        Given ik ben OM/CA en heb een plaats berichten module in de app
        When ik plaats een bericht met pushbericht, zonder foto, voor project Sluisbuurt op Zeeburgereiland
        Then mijn bericht wordt getoond in het nieuwsoverzicht van project Sluisbuurt op Zeeburgereiland

    @skip @BeforeClean @AfterClean
    Scenario: Plaats bericht met pushbericht, met foto
        Given ik ben OM/CA en heb een plaats berichten module in de app
        When ik plaats een bericht met pushbericht, met foto middels de foto toevoegen knop, voor project Sluisbuurt op Zeeburgereiland
        Then mijn bericht wordt getoond in het nieuwsoverzicht van project Sluisbuurt op Zeeburgereiland









