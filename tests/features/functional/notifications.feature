Feature: Plaatsberichten


    Scenario Outline: Launch app met deeplink
        Given ik launch de app met plaats berichten
        Then de plaats berichten module is geactiveerd

    @Deeplink
    Scenario Outline: Plaats bericht
        Given ik ben OM/CA en heb een plaast berichten module in de app
        When ik plaats een bericht voor project Amstel III
        Then mijn bericht wordt getoond in het nieuwsoverzicht van project Amstel III