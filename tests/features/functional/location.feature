Feature: Locatievoorzieningen werkzaamheden & afvalwijzer

    @BeforeClean @AfterClean
    Scenario: Gebruiken van 'Mijn locatie' bij werkzaamheden en afvalwijzer
        Given ik ben op het werkzaamheden scherm
        When ik geef mijn locatie door
        Then mijn locatie wordt gebruikt voor het tonen van werkzaamheden

