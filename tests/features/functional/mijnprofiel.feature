Feature: Adreszoeker
    @Before
    Scenario: Mijn profiel bekijken
        Given ik ben op het home scherm
        When ik ga naar mijn profiel
        Then ik zie mijn profiel met de mogelijkheid om een adres toe te voegen

    @Before @AfterClean
    Scenario Outline: Adres toevoegen
        Given ik ben op het mijn profiel scherm
        When ik zoek op 'Weesperstraat 113'
        Then krijg ik de juiste zoekresultaten in het 'Adres' scherm
        When ik selecteer het adres
        Then mijn adres is succesvol "toegevoegd"


    @BeforeClean @AfterClean
    Scenario Outline: Adres wijzigen
        Given ik heb een adres toegevoegd
        When ik wijzig mijn adres
        Then mijn adres is succesvol "gewijzigd"


    @BeforeClean @AfterClean
    Scenario Outline: Adres verwijderen
        Given ik heb een adres toegevoegd
        When ik verwijder mijn adres
        Then mijn adres is succesvol <status>
        When ik voeg opnieuw een adres toe
        Then het label over het adres verwijderen is verdwenen
        Examples:
            | status     |
            | verwijderd |







# Scenario: Adres toevoegen - Gebruiker vult eerst straat in, daarn huisnummer in apart zoekveld
#
# Scenario: Adres zoeken op postcode
#
# Scenario: Adres wijzigen
#
# Scenario: Adres verwijderen
#
#
#
#
# Scenario: Mijn profiel - Adres onbekend - visuele check
#
# Scenario: Mijn profiel - Adres bekend - visuele check
