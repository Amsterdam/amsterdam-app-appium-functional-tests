import { Given, Then, When } from "@wdio/cucumber-framework";
import gestures from "../Shared/helpers/gestures.js";
import helpers from "../Shared/helpers/helpers.js";
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
        const openSelector = 'label == "Open" AND name == "Open" AND type == "XCUIElementTypeButton"'
        const open = $(`-ios predicate string:${openSelector}`);
        const allowSelector = $(`-ios predicate string:type == "XCUIElementTypeButton" AND label == "Allow"`)
        await open.waitForDisplayed()
        await open.click()
        await allowSelector.waitForDisplayed()
        await allowSelector.click()
    }
    else {
        await driver.execute('mobile:deepLink', {
            url: url,
            package: "com.android.chrome "
        });
        //This code is for android simulator
        const acceptContinueButton = helpers.createSelector('com.android.chrome:id/terms_accept')
        if (await acceptContinueButton.isDisplayed() == true) {
            await acceptContinueButton.click()
        }
        const noThanksButton = helpers.createSelector('com.android.chrome:id/negative_button')
        if (await noThanksButton.isDisplayed() == true) {
            await noThanksButton.click()
        }
    }
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
    const { title, text } = randomTitleText()
    titleMessage = title
    await notificationsScreen.createMessageNoPhoto(title, text)
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(notificationsScreen.constructionWorkEditorCreateMessageSubmitButton, 4)
    await notificationsScreen.constructionWorkEditorCreateMessageSubmitButton.click()
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
})

When(/^ik plaats een bericht met pushbericht, zonder foto, voor project Amstel III$/, async () => {
    await notificationsScreen.projectCardPlaatsBerichtenAmstelIII.click()
    await expect(notificationsScreen.headerTitle).toHaveText('Amstel III')
    const { title, text } = randomTitleText()
    titleMessage = title
    await notificationsScreen.createMessageNoPhoto(title, text)
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(notificationsScreen.constructionWorkEditorCreateMessageSendPushNotificationCheckbox, 4)
    await notificationsScreen.constructionWorkEditorCreateMessageSendPushNotificationCheckbox.click()
    await notificationsScreen.constructionWorkEditorCreateMessageSubmitButton.click()
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
})

When(/^ik plaats een bericht zonder pushbericht, met foto middels de foto toevoegen knop, voor project Amstel III$/, async () => {
    //TO DO: find out the correct path for iOS to push the image to. On hold now, as there are already images on the devices that can be selected.
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
})

When(/^ik plaats een bericht met pushbericht, met foto middels de foto toevoegen knop, voor project Amstel III$/, async () => {
    //TO DO: find out the correct path for iOS to push the image to. On hold now, as there are already images on the devices that can be selected.
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
    await gestures.checkProjectDisplayedWithScrollDownSlow(notificationsScreen.constructionWorkEditorCreateMessageSendPushNotificationCheckbox, 3)
    await notificationsScreen.constructionWorkEditorCreateMessageSendPushNotificationCheckbox.click()
    await notificationsScreen.constructionWorkEditorCreateMessageSubmitButton.click()
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
    await expect(notificationsScreen.successMessageAlert).toBeDisplayed()
})

When(/^ik plaats een bericht met pushbericht, met foto middels de foto maken knop, voor project Amstel III$/, async () => {
    //TO DO: find out the correct path for iOS to push the image to. On hold now, as there are already images on the devices that can be selected.
    const currentOS = driver.capabilities.platformName
    await notificationsScreen.projectCardPlaatsBerichtenAmstelIII.click()
    await expect(notificationsScreen.headerTitle).toHaveText('Amstel III')
    const { title, text } = randomTitleText()
    titleMessage = title
    await notificationsScreen.createMessagePhoto(title, text)
    await driver.execute("browserstack_executor: {\"action\":\"cameraImageInjection\", \"arguments\": {\"imageUrl\": \"media://1f1923ce01a59ac13a2ebba90c02606cf8ad729a\"}}");
    if (currentOS === 'Android') {
        await notificationsScreen.takePhotoAndroid()
    } else {
        await notificationsScreen.takePhotoiOS()
    }
    await notificationsScreen.constructionWorkEditorCreateMessageSendPushNotificationCheckbox.click()
    await notificationsScreen.constructionWorkEditorCreateMessageSubmitButton.click()
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
    await expect(notificationsScreen.successMessageAlert).toBeDisplayed()
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
    await driver.pause(2000)
    await gestures.swipeUpSlowFraction()
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

Then(/SwipeUP/, async () => {
    await homeScreen.homeConstructionWorkModuleButton.waitForDisplayed(2000)
    await homeScreen.homeConstructionWorkModuleButton.click()
    await constructionWorkScreen.constructionWorkProjectsNavigatorSearchField.click()
    await expect(constructionWorkScreen.headerTitle).toHaveText('Zoek in werkzaamheden')
    await constructionWorkScreen.constructionWorkProjectsTextSearchField.addValue("Amstel III")
    await driver.pause(2000)
    await gestures.hitEnter()
    await constructionWorkScreen.constructionWorkAmstelIIIProjectCard.waitForDisplayed(2000)
    await constructionWorkScreen.constructionWorkAmstelIIIProjectCard.click()
    await driver.pause(2000)
    await gestures.swipeUpSlowFraction()
})


