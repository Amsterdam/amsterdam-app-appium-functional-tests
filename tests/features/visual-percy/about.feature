Feature: Over deze app module


  Scenario: De over deze app module raadplegen
    Given ik ben op het home scherm
    When ik open de over deze app module
    Then ik zie het over deze app scherm - percy

  Scenario: Waarom deze app? scherm bekijken
    Given ik ben op het over deze app scherm
    When ik klik op waarom deze app?
    Then ik zie het waarom deze app scherm met de correcte content - percy

  Scenario: About this app scherm bekijken
    Given ik ben op het over deze app scherm
    When ik klik op about this app
    Then ik zie het about this app scherm met de correcte content - percy

  Scenario: Privacyverklaring bekijken
    Given ik ben op het over deze app scherm
    When ik klik op privacyverklaring
    Then ik zie het privacyverklaring scherm met de correcte content - percy

  Scenario: Toegankelijkheidsverklaring scherm bekijken
    Given ik ben op het over deze app scherm
    When ik klik op toegankelijkheidsverklaring
    Then ik zie het toegankelijkheidsverklaring scherm met de correcte content - percy