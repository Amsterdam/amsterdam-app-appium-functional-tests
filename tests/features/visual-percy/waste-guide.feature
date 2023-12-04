Feature: Afvalwijzer module - visual

    @Before
    Scenario: De Afvalwijzer module raadplegen
        Given ik ben op het home scherm
        When ik open de Afvalwijzer module
        Then ik zie het correcte scherm: "Afvalwijzer" - percy

    @BeforeClean @AfterClean
    Scenario Outline: De afvalwijzer toont de juiste informatie voor woonadressen
        Given ik ben op het afvalwijzer Startscherm
        And ik heb een adres ingevoerd
        When ik verander het adres naar <adres>: dit is een adres <omschrijving>
        Then ik zie de juiste informatie in de afvalwijzer voor adressen <omschrijving> - percy
        Examples:
            | adres           | adreslabel           | omschrijving                                          |
            | Balistraat 1-1  | Balistraat 1, 1 hoog | met ondergrondse afvalcontainer                       |
            | Rokin 8-3       | Rokin 8, 3 hoog      | in het centrum die witte vuilniszakken moet gebruiken |
            | Stoombootweg 14 | Stoombootweg 14      | met een rolcontainer                                  |
            | Omval 18        | Omval 18             | waar vuilniszakkenop de stoep moeten                  |

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



