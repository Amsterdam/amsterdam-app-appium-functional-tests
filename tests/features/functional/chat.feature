Feature: Chat

  @BeforeClean @AfterClean
  Scenario Outline: Chat
    Given ik ben op de "TEST" omgeving
    Given ik ben op het contactscherm
    When ik klik op chat
    Then zie ik de chat
    And zie ik een bericht binnenkomen
    When ik stuur een bericht
    Then zie ik het bericht verschijnen
    When ik stuur een bericht
    And ik minimaliseer de chat
    Then is de chat geminimaliseerd
    And zie ik een nieuw bericht melding
    When ik maximaliseer de chat
    Then zie ik de chat
    When ik wacht 1 seconde
    And ik minimaliseer de chat
    Then zie ik geen nieuw bericht melding
    When ik maximaliseer de chat
    Then zie ik de chat
