Feature: Werkzaamheden module - functional

    @Before @After
    Scenario: Projecten volgen en ontvolgen
        Given ik ben op het werkzaamheden scherm
        When ik volg het project 'Brasapark'
        Then het project krijgt de status 'volgend'
        When ik ontvolg het project 'Brasapark'
        Then de status 'volgend' verdwijnt

    @Before @After
    Scenario: Zoeken op 'Amsterdam'
        Given ik ben op het werkzaamheden scherm
        When ik zoek op 'Amsterdam'
        Then krijg ik de juiste zoekresultaten in het 'Zoek in werkzaamheden' scherm

    @Before @After
    Scenario: Geen zoekresultaten
        Given ik ben op het werkzaamheden scherm
        When ik zoek op 'jfklds'
        Then ik zie een melding dat er geen zoekresulaten zijn



