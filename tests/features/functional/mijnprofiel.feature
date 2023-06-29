Feature: Adreszoeker

    @Before
    Scenario: Mijn profiel bekijken
        Given ik ben op het home scherm
        When ik ga naar mijn profiel
    #    Then ik zie mijn profiel met de mogelijkheid om een adres toe te voegen

    @Before
    Scenario Outline: Adres toevoegen
        When ik zoek op 'Weesperstraat 113'
        Then krijg ik de juiste zoekresultaten in het 'Adres' scherm
        When ik selecteer het adres
        Then mijn adres is succesvol "toegevoegd"
        When ik sluit de app en start de app opnieuw
        Then het adres <adres> met postcode <postcode> wordt nog steeds getoond
        Examples:
            | adres             | postcode          |
            | Weesperstraat 113 | 1018 VN AMSTERDAM |

    @Before
    Scenario Outline: Adres wijzigen
        Given ik heb een adres toegevoegd
        When ik wijzig mijn adres
        Then mijn adres is succesvol "gewijzigd"
        When ik sluit de app en start de app opnieuw
        Then het adres <adres> met postcode <postcode> wordt nog steeds getoond
        Examples:
            | adres          | postcode          |
            | Balistraat 1-1 | 1094 JA AMSTERDAM |


    @Before
    Scenario: Adres verwijderen
        Given ik heb een adres toegevoegd
        When ik verwijder mijn adres
        Then mijn adres is succesvol "verwijderd"
        When ik sluit de app en start de app opnieuw
#Then het adres is nog steeds verwijderd
#
#Scenario: Adres toevoegen, verwijderen en weer opnieuw toevoegen
#
#
#
#




# Scenario: Adres toevoegen - Gebruiker vult eerst straat in, daarn huisnummer in apart zoekveld
#
# Scenario: Adres zoeken op postcode
#
# Scenario: Adres wijzigen
#
# Scenario: Adres verwijderen
#
#
#
#
# Scenario: Mijn profiel - Adres onbekend - visuele check
#
# Scenario: Mijn profiel - Adres bekend - visuele check
