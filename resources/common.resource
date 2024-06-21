*** Settings ***
Library     Browser


*** Keywords ***
Begin Test Suite
    [Documentation]
    ...    Set up a new browser. Runs at the beginning of every Test Suite.
    ...    Is used within ``Suite Setup`` under `***` Settings `***`.
    ...    === Example ===
    ...    | `***` Settings `***`
    ...    | Suite Setup \ \ \ Begin Web Test

    # Variable Should Exist    $omgeving    Geen valide omgeving meegegeven in de command line (-v omgeving:acc | -v omgeving:tst)
    Variable Should Exist
    ...    $context
    ...    Geen valide context meegegeven in de command line (-v context:local | -v context:pipeline)
    IF    "${context}" == "local"
        # executablePath=C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe
        New Browser
        ...    chromium
        ...    headless=false
        ...    args=["--start-maximized"]
    ELSE IF    "${context}" == "pipeline"
        New Browser    chromium    headless=true
    END

Begin Test Case
    [Documentation]
    ...    Creates a new context and a new page within the browser. Runs at the beginning of every Test Case.
    ...    Is used within ``Test Setup`` under `***` Settings `***`.
    ...    === Example ===
    ...    | `***` Settings `***`
    ...    | Test Setup \ \ \ \ Begin Web Test
    New Context    viewport=${None}

End Test Case
    [Documentation]
    ...    Will close the page at the end of the Test Case. Is used within ``Test Teardown`` under `***` Settings `***`.
    Close Context

End Test Suite
    [Documentation]
    ...    Will close the browser at the end of the Test Suite. Is used within ``Suite Teardown`` under `***` Settings `***`.
    ...    === Example ===
    ...    | `***` Settings `***`
    ...    | Suite Teardown \ \ \ Begin Web Test

    # Run Keyword If Test Failed    Take Screenshot    filename=EMBED
    Close Browser
