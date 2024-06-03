import { Given, Then, When } from "@wdio/cucumber-framework";
import chai from "chai";
import { TOTP } from "totp-generator";
import { adwPassword, adwSecret, adwUsername } from "../../credentials.js";
import gestures from "../Shared/helpers/gestures.js";
import { openDeepLinkUrl } from "../Shared/helpers/openDeeplink.js";
import { image } from "../features/functional/testdata/img.js";
import { titleText } from "../features/functional/testdata/pushberichten.js";
import constructionWorkScreen from "../screenobjects/construction-work.screen.js";
import homeScreen from "../screenobjects/home.screen.js";
import notificationsScreen from "../screenobjects/notifications.screen.js";

const url = 'amsterdam://construction-work-editor'
let titleMessage
const generateOTP = () => {
    const { otp } = TOTP.generate(adwSecret, { digits: 6 })
    return otp
}

Given(/ik launch de app met plaats berichten/, async () => {
    await homeScreen.headerEnvironmentButton.click()
    await homeScreen.environmentDev.click()
    await homeScreen.headerBackButton.click()
    await driver.pause(6000)
    const OS = await driver.capabilities.platformName
    if (OS === 'iOS') {
        await openDeepLinkUrl(url)
        await notificationsScreen.adwUsernameInput.addValue(adwUsername)
        await notificationsScreen.ssoNextButton.click()
        await notificationsScreen.adwPasswordInput.addValue(adwPassword)
        await notificationsScreen.ssoSignInButton.click()
        await notificationsScreen.ssoUseOtherMFA.click()

    }
    else {
        await driver.execute('mobile:deepLink', {
            url: url,
            package: "com.android.chrome "
        });
    }
    await driver.pause(5000)
})

Given(/ik ben OM\/CA en heb een plaats berichten module in de app/, async () => {
    await homeScreen.headerEnvironmentButton.click()
    await homeScreen.environmentDev.click()
    await homeScreen.headerBackButton.click()
    await homeScreen.homeAboutModuleButton.waitForDisplayed()
    //await driver.switchContext('NATIVE_APP')
    const OS = await driver.capabilities.platformName
    if (OS === 'iOS') {
        await driver.executeScript('mobile: backgroundApp', [{ seconds: 3 }])
        await openDeepLinkUrl(url)
        await driver.pause(5000)
        await notificationsScreen.adwUsernameInput.click()
        await notificationsScreen.adwUsernameInput.addValue(adwUsername)
        await notificationsScreen.ssoNextButton.click()
        await notificationsScreen.adwPasswordInput.click()
        await notificationsScreen.adwPasswordInput.addValue(adwPassword)
        await notificationsScreen.ssoSignInButton.click()
        await notificationsScreen.ssoUseOtherMFA.click()
        await notificationsScreen.useVerificationCodeButton.click()
        await notificationsScreen.totpInput.waitForDisplayed()
        await notificationsScreen.totpInput.click()
        await driver.pause(1000)
        const otp = generateOTP()
        await notificationsScreen.totpInput.setValue(otp)
        await driver.pause(1000)
        await notificationsScreen.verifyButton.click()
        await notificationsScreen.allowSelector.waitForDisplayed()
        await notificationsScreen.allowSelector.click()
        await notificationsScreen.headerTitle.waitForDisplayed(10000)
        await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
        await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.waitForExist(3000)
        await expect(notificationsScreen.successMessage).toBeDisplayed()
        await homeScreen.headerBackButton.click()
        await expect(homeScreen.HomeConstructionWorkEditorModuleButton).toBeDisplayed()
        await homeScreen.HomeConstructionWorkEditorModuleButton.click()
        await notificationsScreen.headerTitle.waitForDisplayed(3000)
        await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
        await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.waitForExist(3000)
    }
    else {
        await driver.execute('mobile:deepLink', {
            url: url,
            package: "nl.amsterdam.app.dev"
        });
        // await notificationsScreen.adwUsernameInput.waitForDisplayed()
        // await notificationsScreen.adwUsernameInput.click()
        // await notificationsScreen.adwUsernameInput.addValue(adwUsername)
        // await notificationsScreen.ssoNextButton.click()
        // await notificationsScreen.adwPasswordInput.click()
        // await notificationsScreen.adwPasswordInput.addValue(adwPassword)
        // await notificationsScreen.ssoSignInButton.click()
        // await notificationsScreen.ssoUseOtherMFA.click()
        // //await notificationsScreen.useVerificationCodeButton.click()
        // await notificationsScreen.totpInput.waitForDisplayed()
        // await notificationsScreen.totpInput.click()
        // await driver.pause(2000)
        // await notificationsScreen.totpInput.addValue(otp)
        // await driver.pause(2000)
        // await notificationsScreen.verifyButton.click()
        // await driver.pause(5000)
    }

})

When(/^ik plaats een bericht zonder pushbericht, zonder foto, voor project Sluisbuurt op Zeeburgereiland$/, async () => {
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.click()
    await expect(notificationsScreen.headerTitle).toHaveTextContaining(['Sluisbuurt op Zeeburgereiland', 'Sluisb…Zeeburgereiland'])
    const { title, text } = titleText(0)
    titleMessage = title
    await notificationsScreen.createMessageNoPhoto(title, text)
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(notificationsScreen.constructionWorkEditorCreateMessageSubmitButton, 4)
    await notificationsScreen.constructionWorkEditorCreateMessageSubmitButton.click()
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.waitForDisplayed()
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
    // await expect(notificationsScreen.successMessageAlert).toBeDisplayed()
})

When(/^ik plaats een bericht met pushbericht, zonder foto, voor project Sluisbuurt op Zeeburgereiland$/, async () => {
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.click()
    await expect(notificationsScreen.headerTitle).toHaveTextContaining(['Sluisbuurt op Zeeburgereiland', 'Sluisb…Zeeburgereiland'])
    const { title, text } = titleText(1)
    titleMessage = title
    await notificationsScreen.createMessageNoPhoto(title, text)
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(notificationsScreen.constructionWorkEditorCreateMessageSendPushNotificationCheckbox, 4)
    await notificationsScreen.constructionWorkEditorCreateMessageSendPushNotificationCheckbox.click()
    await notificationsScreen.constructionWorkEditorCreateMessageSubmitButton.click()
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.waitForDisplayed()
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
    // await expect(notificationsScreen.successMessageAlert).toBeDisplayed()
})

When(/^ik plaats een bericht zonder pushbericht, met foto middels de foto toevoegen knop, voor project Sluisbuurt op Zeeburgereiland$/, async () => {
    //TO DO: find out the correct path for iOS to push the image to. On hold now, as there are already images on the devices that can be selected.
    const currentOS = driver.capabilities.platformName
    if (currentOS === 'Android') {
        await driver.pushFile('/sdcard/Download/image.jpg', image);
    } else {
        //await driver.pushFile('@com.apple.mobileslideshow/image.jpg', image)
    }
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.click()
    await expect(notificationsScreen.headerTitle).toHaveTextContaining(['Sluisbuurt op Zeeburgereiland', 'Sluisb…Zeeburgereiland'])
    const { title, text } = titleText(2)
    titleMessage = title
    await notificationsScreen.createMessagePhoto(title, text)
    if (currentOS === 'Android') {
        await notificationsScreen.addPhotoAndroid()
    } else {
        await notificationsScreen.addPhotoiOS()
    }
    await notificationsScreen.constructionWorkEditorCreateMessageSubmitButton.click()
    //Deze faalt vanwege een 403 error bij post image: bug 93577
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.waitForDisplayed()
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
    // await expect(notificationsScreen.successMessageAlert).toBeDisplayed()
})

When(/^ik plaats een bericht met pushbericht, met foto middels de foto toevoegen knop, voor project Sluisbuurt op Zeeburgereiland$/, async () => {
    //TO DO: find out the correct path for iOS to push the image to. On hold now, as there are already images on the devices that can be selected.
    const currentOS = driver.capabilities.platformName
    if (currentOS === 'Android') {
        await driver.pushFile('/sdcard/Download/image.jpg', image);
    } else {
        //await driver.pushFile('@com.apple.mobileslideshow/image.jpg', image)
    }
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.click()
    await expect(notificationsScreen.headerTitle).toHaveTextContaining(['Sluisbuurt op Zeeburgereiland', 'Sluisb…Zeeburgereiland'])
    const { title, text } = titleText(3)
    titleMessage = title
    await notificationsScreen.createMessagePhoto(title, text)
    if (currentOS === 'Android') {
        await notificationsScreen.addPhotoAndroid()
    } else {
        await notificationsScreen.addPhotoiOS()
    }
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(notificationsScreen.constructionWorkEditorCreateMessageSendPushNotificationCheckbox, 4)
    await notificationsScreen.constructionWorkEditorCreateMessageSendPushNotificationCheckbox.click()
    await notificationsScreen.constructionWorkEditorCreateMessageSubmitButton.click()
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.waitForDisplayed()
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
    // await expect(notificationsScreen.successMessageAlert).toBeDisplayed()
})

Then(/de plaats berichten module is geactiveerd/, async () => {
    // await driver.switchContext('NATIVE_APP')
    await notificationsScreen.headerTitle.waitForDisplayed(3000)
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.waitForExist(3000)
    await expect(notificationsScreen.successMessage).toBeDisplayed()
    await homeScreen.headerBackButton.click()
    await expect(homeScreen.HomeConstructionWorkEditorModuleButton).toBeDisplayed()
})

Then(/^mijn bericht wordt getoond in het nieuwsoverzicht van project Sluisbuurt op Zeeburgereiland$/, async () => {
    await notificationsScreen.headerBackButton.click()
    await homeScreen.homeConstructionWorkModuleButton.waitForDisplayed(2000)
    await homeScreen.homeConstructionWorkModuleButton.click()
    await constructionWorkScreen.constructionWorkSearchFieldButton.click()
    await expect(constructionWorkScreen.headerTitle).toHaveText('Zoek in werkzaamheden')
    await constructionWorkScreen.constructionWorkProjectsTextSearchField.addValue("Sluisbuurt op Zeeburgereiland")
    await gestures.hitEnter()
    await constructionWorkScreen.constructionWorkSluisbuurtOpZeeburgereilandProjectCard.waitForDisplayed(15000)
    console.log(await titleMessage)
    await constructionWorkScreen.constructionWorkSluisbuurtOpZeeburgereilandProjectCard.click()
    await driver.pause(2000)
    await gestures.swipeUpSlowFraction()
    const expectedLabel = await constructionWorkScreen.ConstructionWorkProjectArticlePreviewTitle(titleMessage)
    const actualLabel = await constructionWorkScreen.constructionWorkProjectArticlePreviewButton.getAttribute("label")
    chai.expect(actualLabel).to.equal(expectedLabel)
    await driver.pause(30000)
})




