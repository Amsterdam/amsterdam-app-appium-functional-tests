Feature: Werkzaamheden module - percy

    @Before @After
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

