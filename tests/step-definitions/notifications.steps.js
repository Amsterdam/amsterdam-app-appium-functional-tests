import { Given, Then, When } from "@wdio/cucumber-framework";
import gestures from "../Shared/helpers/gestures.js";
import { openDeepLinkUrl } from "../Shared/helpers/openDeeplink.js";
import constructionWorkScreen from "../screenobjects/construction-work.screen.js";
import homeScreen from "../screenobjects/home.screen.js";
import { default as NotificationsScreen } from "../screenobjects/notifications.screen.js";

const url = 'https://api-backend.app-amsterdam.nl/omgevingsmanager/34f21359-7332-40df-8e9e-efd1d284e125'

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


