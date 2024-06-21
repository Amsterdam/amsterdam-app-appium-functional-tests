*** Settings ***
Library     OTP
Resource    ../resources/selectors.resource
Resource    ../resources/credentials.resource
Library     secrets.py
Library     Browser


*** Variables ***
&{Params}       page_size=500    page=1


*** Keywords ***
SSO login
    [Documentation]    Deze test logt in op Azure
    [Arguments]    ${url}
    New Page    ${url}    wait_until=load
    Type Secret    ${AZURE_LOGIN_USERNAME}    $USERNAME
    Click    ${AZURE_LOGIN_BUTTON}
    Type Secret    ${AZURE_LOGIN_PASSWORD}    $PASSWORD
    Click    ${AZURE_LOGIN_BUTTON}
    Click    ${AZURE_SIGN_IN_OTHER_WAY}
    IF    "${context}" == "local"
        Click    ${AZURE_USE_TOTP_CODE_LOCAL}
    ELSE IF    "${context}" == "pipeline"
        Click    ${AZURE_USE_TOTP_CODE}
    END
    ${otp}=    Get OTP    ${SECRET}
    Type Secret    ${AZURE_TOTP_CODE_FIELD}    $otp
    Click    ${AZURE_TOTP_CODE_SUBMIT}
    # Wait For Elements State    ${AZURE_DEVOPS_TITLE}    visible    timeout=3s
    # Signout
    # Click    ${AZURE_DEVOPS_PROFILE}
    # Sleep    5s
    # Click    ${AZURE_DEVOPS_SIGN_OUT}
    # Sleep    5s

SSO finish sign in
    [Documentation]    Deze test logt in op Azure
    Click    ${AZURE_SIGN_IN_OTHER_WAY}
    IF    "${context}" == "local"
        Click    ${AZURE_USE_TOTP_CODE_LOCAL}
    ELSE IF    "${context}" == "pipeline"
        Click    ${AZURE_USE_TOTP_CODE}
    END
    ${otp}=    Get OTP    ${SECRET}
    Type Secret    ${AZURE_TOTP_CODE_FIELD}    $otp
    Click    ${AZURE_TOTP_CODE_SUBMIT}
