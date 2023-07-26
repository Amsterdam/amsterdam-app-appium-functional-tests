Feature: Plaatsberichten

    @Before @After
    Scenario: Plaats bericht
        Given ik ben OM/CA en heb een plaats berichten module in de app
        When ik plaats een bericht zonder pushbericht, zonder foto, voor project Amstel III
        Then mijn bericht wordt getoond in het nieuwsoverzicht van project Amstel III

    @Before @After
    Scenario: Plaats bericht
        Given ik ben OM/CA en heb een plaats berichten module in de app
        When ik plaats een bericht zonder pushbericht, met foto middels de foto toevoegen knop, voor project Amstel III
        Then mijn bericht wordt getoond in het nieuwsoverzicht van project Amstel III

    @Before @After
    Scenario: Plaats bericht
        Given ik ben OM/CA en heb een plaats berichten module in de app
        When ik plaats een bericht zonder pushbericht, met foto middels de foto maken knop, voor project Amstel III
        Then mijn bericht wordt getoond in het nieuwsoverzicht van project Amstel III

    @Before @After
    Scenario: Plaats bericht
        Given ik ben OM/CA en heb een plaats berichten module in de app
        When ik plaats een bericht met pushbericht, zonder foto, voor project Amstel III
        #Then ik ontvang een pushbericht
        Then mijn bericht wordt getoond in het nieuwsoverzicht van project Amstel III


    @Before @After
    Scenario: API
        Given ik verstuur een request








