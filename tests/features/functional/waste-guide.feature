Feature: Afvalwijzer module

    @BeforeClean @AfterClean
    Scenario: De Afvalwijzer module raadplegen
        Given ik ben op het home scherm
        When ik open de Afvalwijzer module
        Then ik zie het Afvalwijzer start scherm

    @BeforeClean @AfterClean
    Scenario Outline: De afvalwijzer toont de juiste informatie voor woonadressen
        Given ik ben op het afvalwijzer Startscherm
        And ik heb een adres ingevoerd, bagnummer: <bagnummer>
        When ik verander het adres naar <adres> met <adreslabel>, bagnummer: <bagnummer>
        Then ik zie het Afvalwijzer scherm voor woonadressen
        Examples:
            | adres          | adreslabel           | bagnummer        |
            | Balistraat 1-1 | Balistraat 1, 1 hoog | 0363200000038242 |

    @BeforeClean @AfterClean
    Scenario Outline: De afvalwijzer toont de juiste informatie voor adressen die geen woonadres zijn
        Given ik ben op het afvalwijzer Startscherm
        And ik heb een adres ingevoerd, bagnummer: <bagnummer>
        When ik voer een adres <adres> in dat geen woonadres is, bagnummer: <bagnummer>
        And ik selecteer of ik wel of niet een contract <contract> heb
        Then ik zie het Afvalwijzer scherm voor adressen die geen woonadres zijn, contract: <contract>
        Examples:
            | adres       | omschrijving    | contract | bagnummer        |
            | Amstel 1    | met contract    | ja       | 0363200012145295 |
            | Javaplein 1 | zonder contract | nee      | 0363200000038242 |



