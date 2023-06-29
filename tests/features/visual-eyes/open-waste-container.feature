Feature: Gft-container openen module

    @Before
    Scenario: De Gft-container openen module raadplegen
        Given ik ben op het home scherm
        When ik open de Gft-container openen module
        Then ik zie het correcte scherm: "Gft-container openen"