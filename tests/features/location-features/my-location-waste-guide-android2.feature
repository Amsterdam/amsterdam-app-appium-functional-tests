Feature: Locatievoorzieningen afvalwijzer - altijd vragen permissie


    @BeforeClean @AfterClean
    Scenario Outline: De afvalwijzer toont de juiste informatie bij gebruik van 'Mijn locatie'
        Given ik ben op het afvalwijzer Startscherm
        And ik gebruik 'Mijn locatie' met de permissie 'altijd vragen' bij de afvalwijzer
        Then ik zie het juiste adres in het afvalwijzerscherm


