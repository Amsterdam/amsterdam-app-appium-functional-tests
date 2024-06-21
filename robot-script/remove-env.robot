*** Settings ***
Resource            ../resources/common.resource
Library             ../libraries/SaveEnv.py

Suite Setup         Begin Test Suite
Suite Teardown      End Test Suite
Test Setup          Begin Test Case
Test Teardown       End Test Case


*** Test Cases ***
Remove env file
    [Documentation]    Dit script haalt een bearer token op en slaat deze op als environment variabele
    SaveEnv.Remove Env
