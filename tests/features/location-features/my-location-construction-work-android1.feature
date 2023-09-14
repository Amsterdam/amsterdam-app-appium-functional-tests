Feature: Locatievoorzieningen werkzaamheden



    @BeforeClean @AfterClean
    Scenario: De afvalwijzer toont de juiste informatie bij gebruik van 'Mijn locatie'
        Given ik ben op het werkzaamheden scherm
        And ik gebruik 'Mijn locatie' met de permissie 'altijd vragen' bij werkzaamheden
        Then ik zie het juiste adres in het werkzaamhedenscherm

