import { After, Before } from "@wdio/cucumber-framework";
import { bsUrliOS } from "../../credentials.js";
import helpers from "../Shared/helpers/helpers.js";

Before({ tags: '@Before' }, async () => {
    //launch app
    const OS = await driver.capabilities.platformName
    if (OS === 'iOS') {
        await driver.executeScript('mobile: launchApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
    }
    else {
        await driver.startActivity('nl.amsterdam.app.dev', 'nl.amsterdam.app.MainActivity')
        //await driver.launchApp()
    }
    //check if device is real or emulator
    if (helpers.isEmulator()) {
        console.log('This is an emulator.')
    } else {
        console.log('This is a real device.');
    }
})

Before({ tags: '@BeforeClean' }, async () => {
    const currentOS = driver.capabilities.platformName
    const simulatorRegex = new RegExp('(.*-.*){2,}');
    // Check if we are a simulator
    if ('udid' in driver.capabilities && simulatorRegex.test(driver.capabilities.udid) && currentOS === 'iOS') {
        await driver.installApp('/Users/moniquevanbenthem/testing/amsterdam-app-functional/app/iOS/Amsterdam test.app')
        await driver.executeScript('mobile: launchApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
    }
    else if (currentOS === 'iOS') {
        await driver.installApp(bsUrliOS)
        await driver.executeScript('mobile: launchApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
    } else {
        await driver.startActivity('nl.amsterdam.app.dev', 'nl.amsterdam.app.MainActivity')
    }

    if (helpers.isEmulator()) {
        console.log('This is an emulator.')
    } else {
        console.log('This is a real device.');
    }
})


After({ tags: '@After' }, async function () {
    const currentOS = driver.capabilities.platformName
    if (currentOS === 'iOS') {
        await driver.executeScript('mobile: terminateApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
    } else {
        await driver.terminateApp('nl.amsterdam.app.dev')
    }
});

After({ tags: '@AfterClean' }, async function () {
    const currentOS = driver.capabilities.platformName
    if (currentOS === 'iOS') {
        await driver.executeScript('mobile: terminateApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
        await driver.removeApp('nl.amsterdam.app.dev')
    } else {
        await driver.terminateApp('nl.amsterdam.app.dev')
        //await driver.clearApp('nl.amsterdam.app.dev')
        await driver.execute('mobile:clearApp', {
            appId: 'nl.amsterdam.app.dev',
        });
    }
});