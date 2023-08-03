import { After, Before, BeforeAll } from "@wdio/cucumber-framework";
import { bsUrliOS } from "../../credentials.js";
import { openDeepLinkUrl } from "../Shared/helpers/openDeeplink.js";

Before({ tags: '@Before' }, async () => {
    await driver.launchApp()
})

BeforeAll({ tags: '@BeforeDeeplink' }, async () => {

})
Before({ tags: '@Deeplink' }, async () => {
    const OS = await driver.capabilities.platformName
    if (OS === 'iOS') {
        await openDeepLinkUrl("https://api-backend.app-amsterdam.nl/omgevingsmanager/adc76105-50fe-4fd6-9602-b6b197df7ee0")
    }
    else {
        await driver.execute('mobile:deepLink', {
            url: "https://api-backend.app-amsterdam.nl/omgevingsmanager/adc76105-50fe-4fd6-9602-b6b197df7ee0",
            package: "com.android.chrome "
        });
    }
})

Before({ tags: '@BeforeClean' }, async () => {
    const currentOS = driver.capabilities.platformName
    const simulatorRegex = new RegExp('(.*-.*){2,}');
    // Check if we are a simulator
    if ('udid' in driver.capabilities && simulatorRegex.test(driver.capabilities.udid) && currentOS === 'iOS') {
        await driver.installApp('/Users/moniquevanbenthem/testing/amsterdam-app-functional/app/iOS/Amsterdam test.app')
    }
    else if (currentOS === 'iOS') {
        await driver.installApp(bsUrliOS)
        await driver.launchApp()
    } else {
        await driver.launchApp()
    }
})


After({ tags: '@After' }, async function () {
    await driver.closeApp()
});

After({ tags: '@AfterClean' }, async function () {
    const currentOS = driver.capabilities.platformName
    if (currentOS === 'iOS') {
        await driver.closeApp()
        await driver.removeApp('nl.amsterdam.app.dev')
    } else {
        driver.closeApp()
    }
});