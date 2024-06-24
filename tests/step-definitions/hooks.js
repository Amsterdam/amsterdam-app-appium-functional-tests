import { After, Before } from "@wdio/cucumber-framework";
import { bsUrliOS } from "../../credentials.js";
import helpers from "../Shared/helpers/helpers.js";
import HomeScreen from "../screenobjects/home.screen.js";
import notificationsScreen from "../screenobjects/notifications.screen.js";
import onboardingScreen from "../screenobjects/onboarding.screen.js";


const environment = process.env.ENV
const switchEnv = async environment => {
    switch (environment) {
        case 'DEV':
            await HomeScreen.headerEnvironmentButton.click()
            await HomeScreen.environmentDev.click()
            await HomeScreen.headerBackButton.click()
            await driver.pause(6000)
            break
        case 'TEST':
            await HomeScreen.headerEnvironmentButton.click()
            await HomeScreen.environmentTest.click()
            await HomeScreen.headerBackButton.click()
            await driver.pause(6000)
            break
        case 'ACC':
            await HomeScreen.headerEnvironmentButton.click()
            await HomeScreen.environmentAcc.click()
            await HomeScreen.headerBackButton.click()
            await driver.pause(6000)
            break
        case 'PROD':
            await HomeScreen.headerEnvironmentButton.click()
            await HomeScreen.environmentProduction.click()
            await HomeScreen.headerBackButton.click()
            await driver.pause(6000)
            break
        default:
            await assert.fail(`${environment} doesn't exist`)
    }
}

Before({ tags: '@BeforeOnboarding' }, async () => {
    const currentOS = driver.capabilities.platformName
    const simulatorRegex = new RegExp('(.*-.*){2,}');
    // Check if we are a simulator
    if ('udid' in driver.capabilities && simulatorRegex.test(driver.capabilities.udid) && currentOS === 'iOS') {
        await driver.installApp('/Users/moniquevanbenthem/testing/amsterdam-app-functional/app/iOS/Amsterdam test.app')
        await driver.activateApp('nl.amsterdam.app.dev')
        //await driver.executeScript('mobile: launchApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
    }
    else if (currentOS === 'iOS') {
        await driver.installApp(bsUrliOS)
        await driver.activateApp('nl.amsterdam.app.dev')
        //await driver.executeScript('mobile: launchApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
    } else {
        await driver.activateApp('nl.amsterdam.app.dev')
        //await driver.startActivity('nl.amsterdam.app.dev', 'nl.amsterdam.app.MainActivity')
    }


    //check if device is real or emulator
    if (helpers.isEmulator()) {
        console.log('This is an emulator.')
    } else {
        console.log('This is a real device/ios simulator.');
    }
})

Before({ tags: '@Before' }, async () => {
    //launch app
    const OS = await driver.capabilities.platformName
    if (OS === 'iOS') {
        await driver.activateApp('nl.amsterdam.app.dev')
        //await driver.executeScript('mobile: launchApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
        if (await onboardingScreen.nextButtonSelector.isDisplayed()) {
            await onboardingScreen.closeOnboarding()
        }
    }
    else {
        //await driver.startActivity('nl.amsterdam.app.dev', 'nl.amsterdam.app.MainActivity')
        await driver.activateApp('nl.amsterdam.app.dev')
        if (await onboardingScreen.nextButtonSelector.isDisplayed()) {
            await onboardingScreen.closeOnboarding()
        }
        //await driver.launchApp()
    }
    //await switchEnv(environment)
    //check if device is real or emulator
    if (helpers.isEmulator()) {
        console.log('This is an emulator.')
    } else {
        console.log('This is a real device/ios simulator.');
    }
})

Before({ tags: '@BeforeClean' }, async () => {
    const currentOS = driver.capabilities.platformName
    const simulatorRegex = new RegExp('(.*-.*){2,}');
    // Check if we are a simulator
    if ('udid' in driver.capabilities && simulatorRegex.test(driver.capabilities.udid) && currentOS === 'iOS') {
        await driver.installApp('/Users/moniquevanbenthem/testing/amsterdam-app-functional/app/iOS/Amsterdam test.app')
        // await driver.executeScript('mobile: launchApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
        await driver.activateApp('nl.amsterdam.app.dev')
        const isDisplayed = await notificationsScreen.allowSelector.isDisplayed()
        if (isDisplayed) {
            await notificationsScreen.allowSelector.click()
        }
        await onboardingScreen.closeOnboarding()
    }
    else if (currentOS === 'iOS') {
        await driver.installApp(bsUrliOS)
        //await driver.executeScript('mobile: launchApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
        await driver.activateApp('nl.amsterdam.app.dev')
        const isDisplayed = await notificationsScreen.allowSelector.isDisplayed()
        if (isDisplayed) {
            await notificationsScreen.allowSelector.click()
        }
        await onboardingScreen.closeOnboarding()
    } else {
        //await driver.startActivity('nl.amsterdam.app.dev', 'nl.amsterdam.app.MainActivity')
        await driver.activateApp('nl.amsterdam.app.dev')
        const isDisplayed = await notificationsScreen.allowSelector.isDisplayed()
        if (isDisplayed) {
            await notificationsScreen.allowSelector.click()
        }
        await onboardingScreen.closeOnboarding()
    }
    //await switchEnv(environment)

    if (helpers.isEmulator()) {
        console.log('This is an emulator.')
    } else {
        console.log('This is a real device.');
    }
})


After({ tags: '@After' }, async function () {
    // const currentOS = driver.capabilities.platformName
    // if (currentOS === 'iOS') {
    //     await driver.executeScript('mobile: terminateApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
    // } else {
    //     await driver.terminateApp('nl.amsterdam.app.dev')
    // }
    await driver.terminateApp('nl.amsterdam.app.dev')
});

After({ tags: '@AfterClean' }, async function () {
    const currentOS = driver.capabilities.platformName
    if (currentOS === 'iOS') {
        // await driver.executeScript('mobile: terminateApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
        // await driver.removeApp('nl.amsterdam.app.dev')
        await driver.terminateApp('nl.amsterdam.app.dev')
        await driver.removeApp('nl.amsterdam.app.dev')
    } else {
        await driver.terminateApp('nl.amsterdam.app.dev')
        //await driver.clearApp('nl.amsterdam.app.dev')
        await driver.execute('mobile:clearApp', {
            appId: 'nl.amsterdam.app.dev',
        });
    }

});