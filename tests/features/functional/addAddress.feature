Feature: Adreszoeker

    # Scenario: Mijn profiel bekijken
    #     Given ik ben op het home scherm
    #     When ik ga naar mijn profiel
    #     Then ik zie mijn profiel met de mogelijkheid om een adres toe te voegen

    Scenario: Adres toevoegen - Gebruiker vult straat + huisnummer in een zoekveld in
        Given ik ben op het mijn profiel scherm
        When ik zoek op 'Weesperstraat 113'
        Then krijg ik de juiste zoekresultaten in het 'Adres' scherm
        When ik selecteer het adres
        Then het adres is toegevoegd aan Mijn profiel






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
