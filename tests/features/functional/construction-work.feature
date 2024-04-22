Feature: Werkzaamheden module - functional

    @BeforeClean @AfterClean
    Scenario: Projecten volgen en ontvolgen
        Given ik ben op het werkzaamheden scherm
        When ik volg het project 'Stedelijk Noord'
        Then het project krijgt de status 'volgend'
        When ik ontvolg het project 'Stedelijk Noord'
        Then de status 'volgend' verdwijnt

    @skip @BeforeClean @AfterClean
    Scenario: Zoeken op 'Amsterdam'
        Given ik ben op het werkzaamheden scherm
        When ik zoek op 'Amsterdam'
        Then krijg ik de juiste zoekresultaten in het 'Zoek in werkzaamheden' scherm

    @skip @BeforeClean @AfterClean
    Scenario: Geen zoekresultaten
        Given ik ben op het werkzaamheden scherm
        When ik zoek op 'jfklds'
        Then ik zie een melding dat er geen zoekresulaten zijn



