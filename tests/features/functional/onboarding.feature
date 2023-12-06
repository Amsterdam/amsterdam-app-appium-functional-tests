Feature: Onboarding

    @BeforeOnboarding @AfterClean
    Scenario Outline: Als ik de app start krijg ik een onboarding te zien
        Given de onboarding opent
        #Then ik kan door de onboarding swipen
        Then ik kan door de onboarding navigeren middels de volgende knop
        Then ik kan door de onboarding navigeren middels het bolletjesmenu
        When sluit de onboarding middels de <button> button
        Then ik zie het homescherm
        Examples:
            | button      |
            #    | sluiten     |
            | Aan de slag |
