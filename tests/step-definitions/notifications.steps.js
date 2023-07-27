import { Given, Then, When } from "@wdio/cucumber-framework";
import gestures from "../Shared/helpers/gestures.js";
import { openDeepLinkUrl } from "../Shared/helpers/openDeeplink.js";
import { image } from "../features/functional/testdata/img.js";
import { randomTitleText } from "../features/functional/testdata/pushberichten.js";
import constructionWorkScreen from "../screenobjects/construction-work.screen.js";
import homeScreen from "../screenobjects/home.screen.js";
import notificationsScreen from "../screenobjects/notifications.screen.js";

const url = 'https://api-backend.app-amsterdam.nl/omgevingsmanager/34f21359-7332-40df-8e9e-efd1d284e125'
let titleMessage

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
    await notificationsScreen.headerTitle.waitForDisplayed(3000)
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
    await notificationsScreen.projectCardPlaatsBerichtenAmstelIII.waitForExist(3000)
    await expect(notificationsScreen.successMessage).toBeDisplayed()
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
    //autoAcceptAlerts turned off
    const openSelector = 'label == "Open" AND name == "Open" AND type == "XCUIElementTypeButton"'
    const open = $(`-ios predicate string:${openSelector}`);
    const allowSelector = $(`-ios predicate string:type == "XCUIElementTypeButton" AND label == "Allow"`)
    await open.waitForDisplayed()
    await open.click()
    await allowSelector.waitForDisplayed()
    await allowSelector.click()
    //
    await notificationsScreen.headerTitle.waitForDisplayed(10000)
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
    await notificationsScreen.projectCardPlaatsBerichtenAmstelIII.waitForExist(3000)
    await expect(notificationsScreen.successMessage).toBeDisplayed()
    await homeScreen.headerBackButton.click()
    await expect(homeScreen.HomeConstructionWorkEditorModuleButton).toBeDisplayed()
    await homeScreen.HomeConstructionWorkEditorModuleButton.click()
    await notificationsScreen.headerTitle.waitForDisplayed(3000)
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
    await notificationsScreen.projectCardPlaatsBerichtenAmstelIII.waitForExist(3000)
})

When(/^ik plaats een bericht zonder pushbericht, zonder foto, voor project Amstel III$/, async () => {
    await notificationsScreen.projectCardPlaatsBerichtenAmstelIII.click()
    await expect(notificationsScreen.headerTitle).toHaveText('Amstel III')
    const { titel, tekst } = randomTitleText()
    await notificationsScreen.createMessageNoPhoto(titel, tekst)
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(notificationsScreen.constructionWorkEditorCreateMessageSubmitButton, 4)
    await notificationsScreen.constructionWorkEditorCreateMessageSubmitButton.click()
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
})

When(/^ik plaats een bericht met pushbericht, zonder foto, voor project Amstel III$/, async () => {
    await notificationsScreen.projectCardPlaatsBerichtenAmstelIII.click()
    await expect(notificationsScreen.headerTitle).toHaveText('Amstel III')
    const { titel, tekst } = randomTitleText()
    await notificationsScreen.createMessageNoPhoto(titel, tekst)
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(notificationsScreen.constructionWorkEditorCreateMessageSendPushNotificationCheckbox, 4)
    await notificationsScreen.constructionWorkEditorCreateMessageSendPushNotificationCheckbox.click()
    await notificationsScreen.constructionWorkEditorCreateMessageSubmitButton.click()
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
})

When(/^ik plaats een bericht zonder pushbericht, met foto middels de foto toevoegen knop, voor project Amstel III$/, async () => {
    //await driver.pushFile('/sdcard/Download/image.jpg', image);
    //await driver.pushFile('@com.browserstack.Sample-iOS:documents/image.jpg', image)
    //await driver.pushFile('content://com.android.providers.media.documents/document/documents_root/image.jpg', image)
    //https://appium.io/docs/en/2.0/reference/interfaces/appium_types.ExternalDriver/#pushfile
    const currentOS = driver.capabilities.platformName
    if (currentOS === 'Android') {
        await driver.pushFile('/sdcard/Download/image.jpg', image);
    } else {
        //await driver.pushFile('@com.apple.mobileslideshow/image.jpg', image)
    }
    await notificationsScreen.projectCardPlaatsBerichtenAmstelIII.click()
    await expect(notificationsScreen.headerTitle).toHaveText('Amstel III')
    const { title, text } = randomTitleText()
    titleMessage = title
    await notificationsScreen.createMessagePhoto(title, text)
    if (currentOS === 'Android') {
        await notificationsScreen.addPhotoAndroid()
    } else {
        await notificationsScreen.addPhotoiOS()
    }
    await notificationsScreen.constructionWorkEditorCreateMessageSubmitButton.click()
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
    await expect(notificationsScreen.successMessageAlert).toBeDisplayed()
    //await driver.pullFile('/sdcard/Pictures/image.jpg');
    //await gestures.checkProjectDisplayedWithScrollDownShortScreen(notificationsScreen.constructionWorkEditorCreateMessageSubmitButton, 4)

})

Then(/^mijn bericht wordt getoond in het nieuwsoverzicht van project Amstel III$/, async () => {
    await notificationsScreen.headerBackButton.click()
    await homeScreen.homeConstructionWorkModuleButton.waitForDisplayed(2000)
    await homeScreen.homeConstructionWorkModuleButton.click()
    await constructionWorkScreen.constructionWorkProjectsNavigatorSearchField.click()
    await expect(constructionWorkScreen.headerTitle).toHaveText('Zoek in werkzaamheden')
    await constructionWorkScreen.constructionWorkProjectsTextSearchField.addValue("Amstel III")
    await gestures.hitEnter()
    await constructionWorkScreen.constructionWorkAmstelIIIProjectCard.waitForDisplayed(2000)
    console.log(await titleMessage)
    await constructionWorkScreen.constructionWorkAmstelIIIProjectCard.click()
    await expect(constructionWorkScreen.ConstructionWorkProjectArticlePreviewTitle(titleMessage)).toBeDisplayed()
    // if (currentRun === 1) {
    //     await expect(constructionWorkScreen.getConstructionWorkProjectArticlePreviewTitle(title1)).toBeDisplayed()
    // }
    // else if (currentRun == 2) {
    //     await expect(constructionWorkScreen.getConstructionWorkProjectArticlePreviewTitle(title2)).toBeDisplayed()
    // }
    // console.log(`Current run is ${currentRun}`)
    // currentRun++
})


