Feature: Afvalwijzer module

    Scenario: De Afvalwijzer module raadplegen
        Given ik ben op het home scherm
        When ik open de Afvalwijzer module
        Then ik zie het Afvalwijzer scherm - eyes

    Scenario Outline: De afvalwijzer toont de juiste informatie voor woonadressen
        Given ik ben op het afvalwijzer Startscherm
        When het adres <adres> is een adres <omschrijving>
        Then ik zie de juiste informatie in de afvalwijzer voor adressen <omschrijving>
        Examples:
            | adres           | omschrijving                                          |
            | Balistraat 1-1  | met ondergrondse afvalcontainer                       |
            | Rokin 8-3       | in het centrum die witte vuilniszakken moet gebruiken |
            | Stoombootweg 14 | met een rolcontainer                                  |
            | Omval 18        | waar vuilniszakkenop de stoep moeten                  |

    Scenario Outline: De afvalwijzer toont de juiste informatie voor adressen die geen woonadres zijn
        Given ik ben op het afvalwijzer Startscherm
        When ik voer een adres <adres> in dat geen woonadres is
        And ik selecteer of ik wel of niet een contract <contract> heb
        Then ik zie de juiste informatie in de afvalwijzer
        Examples:
            | adres           | contract |
            | Amstel 1        | nee      |
            | Javastraat 20-H | ja       |

