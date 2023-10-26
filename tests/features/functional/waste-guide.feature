Feature: Afvalwijzer module - functional

    @Before @After
    Scenario: De Afvalwijzer module raadplegen
        Given ik ben op het home scherm
        When ik open de Afvalwijzer module
        Then ik zie het Afvalwijzer scherm

    @skip @BeforeClean @AfterClean
    Scenario Outline: De afvalwijzer toont de juiste informatie voor woonadressen
        Given ik ben op het afvalwijzer Startscherm
        And ik heb een adres ingevoerd
        When ik verander het adres naar <adres>: dit is een adres <omschrijving>
        Then ik zie de juiste informatie in de afvalwijzer voor adressen <omschrijving> - percy
        Examples:
            | adres           | omschrijving                                          |
            | Balistraat 1-1  | met ondergrondse afvalcontainer                       |
            | Rokin 8-3       | in het centrum die witte vuilniszakken moet gebruiken |
            | Stoombootweg 14 | met een rolcontainer                                  |
            | Omval 18        | waar vuilniszakkenop de stoep moeten                  |

    @skip @BeforeClean @AfterClean
    Scenario Outline: De afvalwijzer toont de juiste informatie voor adressen die geen woonadres zijn
        Given ik ben op het afvalwijzer Startscherm
        And ik heb een adres ingevoerd
        When ik voer een adres <adres> in dat geen woonadres is
        And ik selecteer of ik wel of niet een contract <contract> heb
        Then ik zie de juiste informatie in de afvalwijzer voor adressen <omschrijving> - percy
        Examples:
            | adres           | omschrijving    |
            | Amstel 1        | zonder contract |
            | Javastraat 20-H | met contract    |



