Feature: Locatievoorzieningen afvalwijzer - tijdens gebruik app permissie

    @BeforeClean @AfterClean
    Scenario: De afvalwijzer toont de juiste informatie bij gebruik van 'Mijn locatie'
        Given ik ben op het afvalwijzer Startscherm
        And ik gebruik 'Mijn locatie' met de permissie 'tijdens' bij de afvalwijzer
        Then ik zie het juiste adres in het afvalwijzerscherm

    @BeforeClean @AfterClean
    Scenario Outline: De afvalwijzer toont de juiste informatie bij gebruik van 'Mijn locatie'
        Given ik ben op het afvalwijzer Startscherm
        And ik gebruik 'Mijn locatie' met de permissie 'altijd vragen' bij de afvalwijzer
        Then ik zie het juiste adres in het afvalwijzerscherm

#    @BeforeClean @AfterClean
#    Scenario: De afvalwijzer toont de juiste informatie bij gebruik van 'Mijn locatie'
#        Given ik ben op het afvalwijzer Startscherm
#    And ik geef geen toestemming om 'Mijn locatie' te delen
#    Then ik zie het instructiescherm voor het instellen van 'Mijn locatie'
