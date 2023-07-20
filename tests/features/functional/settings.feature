Feature: Instellingen
    @BeforeClean @AfterClean
    Scenario Outline: Modules uitzetten
        Given de module <module> staat aan
        And ik ben op het instellingen scherm
        When ik zet de module <module> uit
        Then ik zie de module <module> niet in mijn home scherm
        Examples:
            | module               |
            | Afvalwijzer          |
            | Gft-container openen |
            | Werkzaamheden        |
            | Melding doen         |
            | Contact              |
            | Direct regelen       |

    @BeforeClean @AfterClean
    Scenario Outline: Modules aanzetten
        Given de module <module> staat uit
        And ik ben op het instellingen scherm
        When ik zet de module <module> aan
        Then ik zie de module <module> in mijn home scherm
        Examples:
            | module               |
            | Afvalwijzer          |
            | Gft-container openen |
            | Werkzaamheden        |
            | Melding doen         |
            | Contact              |
            | Direct regelen       |

    @BeforeClean
    Scenario Outline: Over deze app module moet altijd aan staan
        Given alle modules staan uit
        When ik ga naar het homescherm
        Then de over deze app module blijft op het homescherm staan
