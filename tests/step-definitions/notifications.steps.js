import { Given, Then, When } from "@wdio/cucumber-framework";
import gestures from "../Shared/helpers/gestures.js";
import { openDeepLinkUrl } from "../Shared/helpers/openDeeplink.js";
import { randTitelTekst } from "../features/functional/testdata/pushberichten.js";
import constructionWorkScreen from "../screenobjects/construction-work.screen.js";
import homeScreen from "../screenobjects/home.screen.js";
import { default as NotificationsScreen, default as notificationsScreen } from "../screenobjects/notifications.screen.js";

const url = 'https://api-backend.app-amsterdam.nl/omgevingsmanager/34f21359-7332-40df-8e9e-efd1d284e125'
let currentRun = 1

Given(/ik launch de app met plaats berichten/, async () => {
    const OS = await driver.capabilities.platformName
    if (OS === 'iOS') {
        openDeepLinkUrl(url)
    }
    else {
        await driver.execute('mobile:deepLink', {
            url: url,
            package: "com.android.chrome "
        });
    }
    await driver.pause(5000)
})

Then(/de plaats berichten module is geactiveerd/, async () => {
    // await driver.switchContext('NATIVE_APP')
    await NotificationsScreen.headerTitle.waitForDisplayed(3000)
    await expect(NotificationsScreen.headerTitle).toHaveText('Plaats berichten')
    await NotificationsScreen.projectCardPlaatsBerichtenAmstelIII.waitForExist(3000)
    await expect(NotificationsScreen.successMessage).toBeDisplayed()
    await homeScreen.headerBackButton.click()
    await expect(homeScreen.HomeConstructionWorkEditorModuleButton).toBeDisplayed()
})

Given(/ik ben OM\/CA en heb een plaats berichten module in de app/, async () => {
    //await driver.switchContext('NATIVE_APP')
    const OS = await driver.capabilities.platformName
    if (OS === 'iOS') {
        openDeepLinkUrl(url)
    }
    else {
        await driver.execute('mobile:deepLink', {
            url: url,
            package: "com.android.chrome "
        });
    }
    await NotificationsScreen.headerTitle.waitForDisplayed(10000)
    await expect(NotificationsScreen.headerTitle).toHaveText('Plaats berichten')
    await NotificationsScreen.projectCardPlaatsBerichtenAmstelIII.waitForExist(3000)
    await expect(NotificationsScreen.successMessage).toBeDisplayed()
    await homeScreen.headerBackButton.click()
    await expect(homeScreen.HomeConstructionWorkEditorModuleButton).toBeDisplayed()
    await homeScreen.HomeConstructionWorkEditorModuleButton.click()
    await NotificationsScreen.headerTitle.waitForDisplayed(3000)
    await expect(NotificationsScreen.headerTitle).toHaveText('Plaats berichten')
    await NotificationsScreen.projectCardPlaatsBerichtenAmstelIII.waitForExist(3000)
})

When(/^ik plaats een bericht zonder pushbericht, zonder foto, voor project Amstel III$/, async () => {
    await NotificationsScreen.projectCardPlaatsBerichtenAmstelIII.click()
    await expect(NotificationsScreen.headerTitle).toHaveText('Amstel III')
    const { titel, tekst } = randTitelTekst()
    console.log(`This is the random integer: ${rand1}`)
    await NotificationsScreen.createMessageNoPhoto(titel, tekst)
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(NotificationsScreen.constructionWorkEditorCreateMessageSubmitButton, 4)
    await NotificationsScreen.constructionWorkEditorCreateMessageSubmitButton.click()
    await expect(NotificationsScreen.headerTitle).toHaveText('Plaats berichten')
})

When(/^When ik plaats een bericht zonder pushbericht, met foto middels de foto toevoegen knop, voor project Amstel III$/, async () => {
    await driver.pushFile()
    //https://appium.io/docs/en/2.0/reference/interfaces/appium_types.ExternalDriver/#pushfile
    await NotificationsScreen.projectCardPlaatsBerichtenAmstelIII.click()
    await expect(NotificationsScreen.headerTitle).toHaveText('Amstel III')
    console.log(`This is the random integer: ${rand1}`)
    await NotificationsScreen.createMessageNoPhoto(title1, text1)
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(NotificationsScreen.constructionWorkEditorCreateMessageSubmitButton, 4)
    await notificationsScreen.constructionWorkEditorCreateMessageAddImageButton.click()

})

When(/^ik plaats een bericht met pushbericht, zonder foto, voor project Amstel III$/, async () => {
    await NotificationsScreen.projectCardPlaatsBerichtenAmstelIII.click()
    await expect(NotificationsScreen.headerTitle).toHaveText('Amstel III')
    console.log(`This is the random integer: ${rand2}`)
    await NotificationsScreen.createMessageNoPhoto(title2, text2)
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(NotificationsScreen.constructionWorkEditorCreateMessageSendPushNotificationCheckbox, 4)
    await NotificationsScreen.constructionWorkEditorCreateMessageSendPushNotificationCheckbox.click()
    await NotificationsScreen.constructionWorkEditorCreateMessageSubmitButton.click()
    await expect(NotificationsScreen.headerTitle).toHaveText('Plaats berichten')
})


Then(/^mijn bericht wordt getoond in het nieuwsoverzicht van project Amstel III$/, async () => {
    await NotificationsScreen.headerBackButton.click()
    await homeScreen.homeConstructionWorkModuleButton.waitForDisplayed(2000)
    await homeScreen.homeConstructionWorkModuleButton.click()
    await constructionWorkScreen.constructionWorkProjectsNavigatorSearchField.click()
    await expect(constructionWorkScreen.headerTitle).toHaveText('Zoek in werkzaamheden')
    await constructionWorkScreen.constructionWorkProjectsTextSearchField.addValue("Amstel III")
    await gestures.hitEnter()
    await constructionWorkScreen.constructionWorkAmstelIIIProjectCard.waitForDisplayed(2000)
    await constructionWorkScreen.constructionWorkAmstelIIIProjectCard.click()
    if (currentRun === 1) {
        await expect(constructionWorkScreen.getConstructionWorkProjectArticlePreviewTitle(title1)).toBeDisplayed()
    }
    else if (currentRun == 2) {
        await expect(constructionWorkScreen.getConstructionWorkProjectArticlePreviewTitle(title2)).toBeDisplayed()
    }
    console.log(`Current run is ${currentRun}`)
    currentRun++
})


