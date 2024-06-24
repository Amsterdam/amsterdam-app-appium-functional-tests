*** Settings ***
Library     Browser
Library     Collections
Resource    ../resources/selectors.resource
Resource    ../resources/sso-login.resource
Library     ../libraries/ManagePublishers.py    token
Library     ../libraries/SaveEnv.py
Library     OperatingSystem


*** Variables ***
${key}      $KEY


*** Keywords ***
Get Bearer Token with login
    [Documentation]    Get the bearer token from the local storage
    SSO login    url=https://acc.app.amsterdam.nl/beheer/werkzaamheden
    Wait For Elements State    ${H1_TITLE}    visible    timeout=10s
    Set Log Level    NONE
    ${item}=    SessionStorage Get Item    ${key}
    ${type}=    Evaluate    type(${item})
    ${dict}=    Evaluate    json.loads('''${item}''')    json
    ${secret}=    Get From Dictionary    ${dict}    secret
    Set Environment Variable    BEARER_TOKEN    ${secret}
    ${token}=    Get Environment Variable    BEARER_TOKEN
    SaveEnv.Save Env    ${token}
    Set Log Level    INFO

Get Bearer Token without login
    [Documentation]    Get the bearer token from the local storage
    Wait For Elements State    ${H1_TITLE}    visible    timeout=10s
    Set Log Level    NONE
    ${item}=    SessionStorage Get Item    ${key}
    ${type}=    Evaluate    type(${item})
    ${dict}=    Evaluate    json.loads('''${item}''')    json
    ${secret}=    Get From Dictionary    ${dict}    secret
    Set Environment Variable    BEARER_TOKEN    ${secret}
    Set Log Level    INFO
