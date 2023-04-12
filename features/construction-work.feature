Feature: Werkzaamheden module

    Scenario: Projecten volgen en ontvolgen
        Given ik ben op het werkzaamheden scherm
        When ik volg het project 'Amsterdam Science Park'
        Then het project krijgt de status 'volgend'
        When ik ontvolg het project 'Amsterdam Science Park'
        Then de status 'volgend' verdwijnt

    Scenario: Zoeken op 'Amsterdam'
        Given ik ben op het werkzaamheden scherm
        When ik zoek op 'Amsterdam'
        Then krijg ik de juiste zoekresultaten

    Scenario: Geen zoekresultaten
        Given ik ben op het werkzaamheden scherm
        When ik zoek op 'jfklds'
        Then ik zie een melding dat er geen zoekresulaten zijn