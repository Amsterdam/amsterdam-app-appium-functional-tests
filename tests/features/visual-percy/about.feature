Feature: Over deze app module

  @Before @After
  Scenario: De over deze app module raadplegen
    Given ik ben op het home scherm
    When ik open de over deze app module
    Then ik zie het correcte scherm: "over deze app" - percy

  @Before @After
  Scenario: Waarom deze app? scherm bekijken
    Given ik ben op het over deze app scherm
    When ik klik op waarom deze app?
    Then ik zie het correcte scherm: "waarom deze app?" - percy

  @Before @After
  Scenario: About this app scherm bekijken
    Given ik ben op het over deze app scherm
    When ik klik op about this app
    Then ik zie het correcte scherm: "about this app" - percy

  @Before @After
  Scenario: Privacyverklaring bekijken
    Given ik ben op het over deze app scherm
    When ik klik op privacyverklaring
    Then ik zie het correcte scherm: "privacyverklaring" - percy

  @Before @After
  Scenario: Toegankelijkheidsverklaring scherm bekijken
    Given ik ben op het over deze app scherm
    When ik klik op toegankelijkheidsverklaring
    Then ik zie het correcte scherm: "toegankelijkheidsverklaring" - percy