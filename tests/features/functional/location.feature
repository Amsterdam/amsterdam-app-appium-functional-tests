Feature: Locatievoorzieningen werkzaamheden & afvalwijzer

    @BeforeClean @AfterClean
    Scenario: Werkzaamheden toont de juiste informatie bij gebruik van 'Mijn locatie'
        Given ik ben op het werkzaamheden scherm
        When ik geef mijn locatie door
        Then mijn locatie wordt gebruikt voor het tonen van werkzaamheden

