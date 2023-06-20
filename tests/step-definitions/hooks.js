import { After, Before } from "@wdio/cucumber-framework";

Before({ tags: '@Before' }, async () => {
    await driver.launchApp()
})

Before({ tags: '@BeforeClean' }, async () => {
    const currentOS = driver.capabilities.platformName
    if (currentOS === 'iOS') {
        await driver.installApp("bs://35c90e1a55f162f7828280935d0bd20e26535036")
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