Feature: Afvalwijzer module

    @Before @AfterClean
    Scenario: De Afvalwijzer module raadplegen
        Given ik ben op het home scherm
        When ik open de Afvalwijzer module
        Then ik zie het correcte scherm: "Afvalwijzer" - percy

    @BeforeClean @AfterClean
    Scenario Outline: De afvalwijzer toont de juiste informatie voor woonadressen
        Given ik ben op het afvalwijzer Startscherm
        And ik heb een adres ingevoerd
        When ik verander het adres naar <adres> met <adreslabel>
        Then ik zie de juiste informatie in de afvalwijzer voor <adres> - percy
        Examples:
            | adres           | adreslabel           |
            | Balistraat 1-1  | Balistraat 1, 1 hoog |
            | Rokin 8-3       | Rokin 8, 3 hoog      |
            | Stoombootweg 14 | Stoombootweg 14      |
            | Omval 18        | Omval 18             |

    @BeforeClean @AfterClean
    Scenario Outline: De afvalwijzer toont de juiste informatie voor adressen die geen woonadres zijn
        Given ik ben op het afvalwijzer Startscherm
        And ik heb een adres ingevoerd
        When ik voer een adres <adres> in dat geen woonadres is
        And ik selecteer of ik wel of niet een contract <contract> heb
        Then ik zie de juiste informatie in de afvalwijzer voor adressen <omschrijving> - percy
        Examples:
            | adres           | omschrijving    | contract |
            | Amstel 1        | zonder contract | nee      |
            | Javastraat 20-H | met contract    | ja       |



