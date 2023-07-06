import { Given, Then } from "@wdio/cucumber-framework";
import NotificationsScreen from "../screenobjects/notifications.screen.js";


Given(/ik launch de app met plaats berichten/, async () => {
    const OS = await driver.capabilities.platformName
    if (OS === 'iOS') {
        await driver.url("https://api-backend.app-amsterdam.nl/omgevingsmanager/adc76105-50fe-4fd6-9602-b6b197df7ee0")
        await driver.pause(3000)
        await driver.activateApp('nl.amsterdam.app.dev')
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

