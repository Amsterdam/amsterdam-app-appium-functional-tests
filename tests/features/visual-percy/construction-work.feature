Feature: Werkzaamheden module

    @Before
    Scenario: De Werkzaamheden module raadplegen
        Given ik ben op het home scherm
        When ik open de Werkzaamheden module
    #Then ik zie het correcte scherm: "Werkzaamheden" - percy

    @Before
    Scenario: Projecten volgen en ontvolgen
        Given ik ben op het werkzaamheden scherm
        When ik volg het project 'Amsterdam Science Park'
        Then het project krijgt de status 'volgend'
        When ik ontvolg het project 'Amsterdam Science Park'
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

    @Before
    Scenario Outline: Projectdetails bekijken van project 'Corantijnstraat'
        Given ik ben op het werkzaamheden scherm
        When ik bekijk het project 'Corantijnstraat'
        Then ik zie de projectdetailpagina van project 'Corantijnstraat'
        When ik klik op de subpagina <subpagina>
        Then ik zie de subpagina <subpagina> van het projectdetailscherm - percy
        Examples:
            | subpagina        |
            | Over dit project |
            | Planning         |
            | Contact          |

