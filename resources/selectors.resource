*** Variables ***
${AMSTERDAM_APP_PROJECT_URLS}           h2.link > a[href]
${PROJECT_TITLE_NEWS_PAGE}              div > h1
${AZURE_LOGIN_USERNAME}                 id=i0116
${AZURE_LOGIN_PASSWORD}                 [name="passwd"]
${AZURE_LOGIN_BUTTON}                   id=idSIButton9
${AZURE_SIGN_IN_OTHER_WAY}              id=signInAnotherWay
${AZURE_USE_TOTP_CODE}                  text=Use a verification code
${AZURE_USE_TOTP_CODE_LOCAL}            text=Gebruik een verificatiecode
${AZURE_TOTP_CODE_FIELD}                id=idTxtBx_SAOTCC_OTC
# .remove-segoe-ui-symbol
${AZURE_TOTP_CODE_SUBMIT}               id=idSubmit_SAOTCC_Continue
${AZURE_DEVOPS_TITLE}                   .project-name-container
${MBS_HEADER_TITLE}                     hgroup > h1
${AZURE_DEVOPS_PROFILE}                 id=mectrl_headerPicture
${AZURE_DEVOPS_SIGNOUT}                 id=mectrl_body_signOut

# beheersysteem
${WERKZAAMHEDEN_BUTTON}                 css=.Button > .Row > span >> text=Werkzaamheden
${PUBLISHERS_BUTTON}                    css=.Button > .Row > span >> text=Publishers
${LOGOUT_BUTTON}                        css=.Button > .Row > span >> text=Uitloggen
${H1_TITLE}                             h1

# beheersysteem > Werkzaamheden
${SEARCH_FIELD}                         input
${PROJECTS_TABLE_BODY}                  .ams-table__body
${PROJECT_SLUISBUURT}                   text=Sluisbuurt op Zeeburgereiland
${PROJECT_ACTIEPROGRAMMA_BANNE_ZUID}    text=Sluisbuurt op Zeeburgereiland
${PROJECT_AANDAMMERBRUG}                text=Aandammerbrug
${PROJECTS_TABLE_HEADERS}               thead > .ams-table__row > th
${PROJECTS_TITLE_TBODY}                 td > h3.Title

# bericht maken/wijzigen
${H1_TITLE}                             h1.Title
${H3_TITLE}                             h3.Title
${TITLE_FIELD}                          .TextFieldLabel > div > input
${CONTENT_FIELD}                        textarea.Input
${FILE_UPLOADER}                        .uploader__file_input
${CONFIRM_BUTTON}                       text=Bevestig
${DELETE_FILE_BUTTON}                   .ImageUploadDeleteIcon
${BACK_BUTTON}                          text=Ga terug
${DELETE_BUTTON}                        text=Verwijderen
${IMG_TEXTFIELD}                        .ImageField > div > div > .TextFieldLabel > div > .Input
${CANCEL_BUTTON}                        text=Annuleren
${SAVE_BUTTON}                          text=Opslaan
${SEND_PUSH_CHECKBOX}                   .CheckboxIndicator

# beheersysteem > Werkzaamheden > Project
${H2_TITLE}                             h2
${WRITE_APP_MESSAGE}                    text=Schrijf app bericht
${FIRST_MESSAGE}                        tbody > tr:nth-child(1) > td:nth-child(1) > span

# beheersysteem > Publishers
${SEARCH_RESULT}                        tr > td
${CREATE_PUBLISHER_BUTTON}              text=Maak publisher aan
${NAME_FIELD}                           (//*[@class="Input"])[1]
${EMAIL_FIELD}                          (//*[@class="Input"])[2]
${SAVE_PUBLISHER_BUTTON}                text=Opslaan en projecten kiezen
${PROJECTS_CHECKBOX_PROJECT1}           (//*[@class="CheckboxToggle"])[1]
${PROJECTS_CHECKBOX_PROJECT2}           (//*[@class="CheckboxToggle"])[2]
${PUBLISHERS_TABLE}                     .ams-table__body > tr
