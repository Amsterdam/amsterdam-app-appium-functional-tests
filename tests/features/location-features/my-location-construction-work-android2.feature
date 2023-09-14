Feature: Locatievoorzieningen werkzaamheden

    @BeforeClean @AfterClean
    Scenario: De afvalwijzer toont de juiste informatie bij gebruik van 'Mijn locatie'
        Given ik ben op het werkzaamheden scherm
        And ik gebruik 'Mijn locatie' met de permissie 'tijdens' bij werkzaamheden
        Then ik zie het juiste adres in het werkzaamhedenscherm




#
#    @BeforeClean @AfterClean
#    Scenario: De afvalwijzer toont de juiste informatie bij gebruik van 'Mijn locatie'
#        Given ik ben op het werkzaamheden scherm
#    And ik geef geen toestemming om 'Mijn locatie' te delen
#    Then ik zie het instructiescherm voor het instellen van 'Mijn locatie'
