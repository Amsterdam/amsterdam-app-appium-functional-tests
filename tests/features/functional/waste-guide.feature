Feature: Afvalwijzer module

    @skip @Before @AfterClean
    Scenario: De Afvalwijzer module raadplegen
        Given ik ben op het home scherm
        When ik open de Afvalwijzer module
        Then ik zie het correcte scherm: "Afvalwijzer" - percy

    @BeforeClean @AfterClean
    Scenario Outline: De afvalwijzer toont de juiste informatie voor woonadressen
        Given ik ben op het afvalwijzer Startscherm
        And ik heb een adres ingevoerd, bagnummer: <bagnummer>
        When ik verander het adres naar <adres> met <adreslabel>, bagnummer: <bagnummer>
        Then ik zie de juiste informatie in de afvalwijzer voor <adres> - percy
        Examples:
            | adres           | adreslabel           | bagnummer        |
            | Balistraat 1-1  | Balistraat 1, 1 hoog | 0363200000038242 |
            | Rokin 8-3       | Rokin 8, 3 hoog      | 0363200000254673 |
            | Stoombootweg 14 | Stoombootweg 14      | 0363200000280799 |
            | Omval 18        | Omval 18             | 0363200000468752 |

    @BeforeClean @AfterClean
    Scenario Outline: De afvalwijzer toont de juiste informatie voor adressen die geen woonadres zijn
        Given ik ben op het afvalwijzer Startscherm
        And ik heb een adres ingevoerd, bagnummer: <bagnummer>
        When ik voer een adres <adres> in dat geen woonadres is, bagnummer: <bagnummer>
        And ik selecteer of ik wel of niet een contract <contract> heb
        Then ik zie de juiste informatie in de afvalwijzer voor adressen <omschrijving> - percy
        Examples:
            | adres           | omschrijving    | contract | bagnummer        |
            | Amstel 1        | zonder contract | nee      | 0363200012145295 |
            | Javastraat 20-H | met contract    | ja       | 0363200000151066 |



