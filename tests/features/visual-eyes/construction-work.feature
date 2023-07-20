Feature: Werkzaamheden module

    @Before
    Scenario: De Werkzaamheden module raadplegen
        Given ik ben op het home scherm
        When ik open de Werkzaamheden module
    #Then ik zie het correcte scherm: "Werkzaamheden"

    @Before
    Scenario Outline: Projectdetails bekijken van project 'Corantijnstraat'
        Given ik ben op het werkzaamheden scherm
        When ik bekijk het project 'Corantijnstraat'
        Then ik zie de projectdetailpagina van project 'Corantijnstraat'
        When ik klik op de subpagina <subpagina>
        #Then ik zie de <subpagina> van het projectdetailscherm - eyes
        Examples:
            | subpagina        |
            | Over dit project |
            | Planning         |
            | Contact          |