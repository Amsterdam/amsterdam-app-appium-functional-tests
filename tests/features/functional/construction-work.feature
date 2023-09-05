Feature: Werkzaamheden module

    @Before
    Scenario: Projecten volgen en ontvolgen
        Given ik ben op het werkzaamheden scherm
        When ik volg het project 'Houthaven'
        Then het project krijgt de status 'volgend'
        When ik ontvolg het project 'Houthaven'
        Then de status 'volgend' verdwijnt

    @Before
    Scenario: Zoeken op 'Amsterdam'
        Given ik ben op het werkzaamheden scherm
        When ik zoek op 'Amsterdam'
        Then krijg ik de juiste zoekresultaten in het 'Zoek in werkzaamheden' scherm

    @Before
    Scenario: Geen zoekresultaten
        Given ik ben op het werkzaamheden scherm
        When ik zoek op 'jfklds'
        Then ik zie een melding dat er geen zoekresulaten zijn



