Feature: Werkzaamheden module - functional

  @BeforeClean @AfterClean
  Scenario: Projecten volgen en ontvolgen
    Given ik ben op het werkzaamheden scherm
    When ik volg het project 'Stedelijk Noord'
    Then het project krijgt de status 'volgend'
    When ik ontvolg het project 'Stedelijk Noord'
    Then de status 'volgend' verdwijnt

  @BeforeClean @AfterClean
  Scenario: Zoeken op 'Amsterdam'
    Given ik ben op het werkzaamheden scherm
    When ik zoek op 'Amsterdam'
    Then staat 'Amsterdamse Bos' met id '351' in de zoekresultaten
    And staat 'Amsterdamse Bos' met id '105' in de zoekresultaten
    And staat 'Food center Amsterdam' met id '17' in de zoekresultaten
    And staat 'Amsterdam Science Park' met id '56' in de zoekresultaten
    And staat 'Amsterdam - Haarlemmermeer' met id '314' in de zoekresultaten
    And staat 'Centrumgebied Amsterdam Noord' met id '5' in de zoekresultaten

  @skip @BeforeClean @AfterClean
  Scenario: Geen zoekresultaten
    Given ik ben op het werkzaamheden scherm
    When ik zoek op 'xfklds'
    Then ik zie een melding dat er geen zoekresultaten zijn
