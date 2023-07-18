import { Given, Then, When } from "@wdio/cucumber-framework";
import gestures from "../Shared/helpers/gestures.js";
import { randomtekst, randomtitel } from "../features/functional/testdata/pushberichten.js";
import constructionWorkScreen from "../screenobjects/construction-work.screen.js";
import homeScreen from "../screenobjects/home.screen.js";
import NotificationsScreen from "../screenobjects/notifications.screen.js";

Given(/ik launch de app met plaats berichten/, async () => {
    const OS = await driver.capabilities.platformName
    if (OS === 'iOS') {
        // await driver.installApp('/Users/moniquevanbenthem/testing/amsterdam-app-functional/app/iOS/Amsterdam test.app')
        // await driver.pause(3000)
        // await driver.url("https://api-backend.app-amsterdam.nl/omgevingsmanager/adc76105-50fe-4fd6-9602-b6b197df7ee0")
        // await driver.pause(3000)
        // await driver.activateApp('nl.amsterdam.app.dev')
        await driver.activateApp("com.apple.mobilesafari");
        const urlSelector = $('URL')
        await urlSelector.waitForDisplayed(3000)
        //await urlSelector.click()
        await urlSelector.addValue("https://api-backend.app-amsterdam.nl/omgevingsmanager/adc76105-50fe-4fd6-9602-b6b197df7ee0")
        // await safariScreen.tabBarItemTitle.waitForDisplayed(3000)
        // await safariScreen.tabBarItemTitle.click()
        // await safariScreen.tabBarItemTitle.sendKeys('https://api-backend.app-amsterdam.nl/omgevingsmanager/adc76105-50fe-4fd6-9602-b6b197df7ee0')
        const goSelector = $('Go')
        await goSelector.waitForDisplayed(3000)
        await goSelector.click()
        await driver.activateApp('nl.amsterdam.app.dev')
        // driver.findElementByAccessibilityId("URL").click();
        // Thread.sleep(3000);
        // driver.findElementByAccessibilityId("URL").sendKeys("https://www.maxmind.com/en/locate-my-ip-address");
        // Thread.sleep(3000);
        // driver.findElementByAccessibilityId("Go").click();
        // Thread.sleep(5000);
        // driver.navigate().back();

        // driver.activateApp("com.browserstack.Sample-iOS");
    }
    else {
        await driver.execute('mobile:deepLink', {
            url: "https://api-backend.app-amsterdam.nl/omgevingsmanager/adc76105-50fe-4fd6-9602-b6b197df7ee0",
            package: "com.android.chrome "
        });
    }
    await driver.pause(5000)
})

Then(/de plaats berichten module is geactiveerd/, async () => {
    await driver.switchContext('NATIVE_APP')
    await NotificationsScreen.headerTitle.waitForDisplayed(3000)
    await expect(NotificationsScreen.headerTitle).toHaveText('Plaats berichten')
    await NotificationsScreen.projectCardPlaatsBerichtenAmstelIII.waitForExist(3000)
    await expect(NotificationsScreen.successMessage).toBeDisplayed()
})

Given(/ik ben OM\/CA en heb een plaast berichten module in de app/, async () => {
    await driver.switchContext('NATIVE_APP')
    await NotificationsScreen.headerTitle.waitForDisplayed(3000)
    await expect(NotificationsScreen.headerTitle).toHaveText('Plaats berichten')
    await NotificationsScreen.projectCardPlaatsBerichtenAmstelIII.waitForExist(3000)
    await expect(NotificationsScreen.successMessage).toBeDisplayed()
})
When(/^ik plaats een bericht voor project Amstel III$/, async () => {
    await NotificationsScreen.projectCardPlaatsBerichtenAmstelIII.click()
    await expect(NotificationsScreen.headerTitle).toHaveText('Amstel III')
    await NotificationsScreen.constructionWorkEditorCreateMessageTitleInput.waitForDisplayed(2000)
    await NotificationsScreen.constructionWorkEditorCreateMessageTitleInput.addValue(randomtitel)
    await NotificationsScreen.constructionWorkEditorCreateMessageBodyInput.addValue(randomtekst)
    await gestures.checkProjectDisplayedWithScrollDownSlow(NotificationsScreen.constructionWorkEditorCreateMessageNextButton, 4)
    await NotificationsScreen.constructionWorkEditorCreateMessageNextButton.click()
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

})


