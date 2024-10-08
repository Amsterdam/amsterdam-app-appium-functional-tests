*** Settings ***
Resource            ../resources/sso-login.resource
Resource            ../resources/common.resource
Resource            ../resources/bearer-token.resource

Suite Setup         Begin Test Suite
Suite Teardown      End Test Suite
Test Setup          Begin Test Case
Test Teardown       End Test Case


*** Test Cases ***
Set Bearer Token as Environment Variable
    [Documentation]    Dit script haalt een bearer token op en slaat deze op als environment variabele
    Skip
    bearer-token.Get Bearer Token with login
