import { After, Before } from "@wdio/cucumber-framework";
import { openDeepLinkUrl } from "../Shared/helpers/openDeeplink.js";

Before({ tags: '@Before' }, async () => {
    await driver.launchApp()
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
    if (currentOS === 'iOS') {
        await driver.installApp("bs://8c0346c5962ccc4108fc223327f616ef7c6325c0")
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