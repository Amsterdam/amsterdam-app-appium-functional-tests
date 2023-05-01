Feature: Contact module


    Scenario: De contact module raadplegen
        Given ik ben op het home scherm
        When ik open de contact module
        Then ik zie het contact scherm - percy

    Scenario Outline: Op de contactpagina vind ik informatie over de stadsloketten die ik kan bezoeken
        Given ik ben op het contactscherm
        When ik klik op het stadsloket
        Then zie ik een lijst met stadsloketten
        When ik selecteer een stadsloket <stadsloket>
        Then het juiste stadsloket wordt getoond - percy <title>
        #And de bekijk routeknop wordt getoond
        Examples:
            | stadsloket | adres                                       | title                 |
            | Centrum    | Amstel 1 1011 PN Amsterdam                  | Stadsloket Centrum    |
            | Nieuw-West | Osdorpplein 946 1068 TD Amsterdam           | Stadsloket Nieuw-West |
            | Noord      | Buikslotermeerplein 2000 1025 XL Amsterdam  | Stadsloket Noord      |
            | Oost       | Oranje-Vrijstaatplein 2 1093 NG Amsterdam   | Stadsloket Oost       |
            | West       | Bos en Lommerplein 250 1055 EK Amsterdam    | Stadsloket West       |
            | Zuid       | President Kennedylaan 923 1079 MZ Amsterdam | Stadsloket Zuid       |
            | Zuidoost   | Anton de Komplein 150 1102 CW Amsterdam     | Stadsloket Zuidoost   |
            | Weesp      | Nieuwstraat 70a 1380 BD Weesp               | Stadsloket Weesp      |