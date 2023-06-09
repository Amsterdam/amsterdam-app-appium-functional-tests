import { ClassicRunner, Eyes, Target } from '@applitools/eyes-webdriverio';
import percyScreenshot from '@percy/appium-app';
import { Given, Then, When } from "@wdio/cucumber-framework";
import AboutScreen from "../screenobjects/about.screen.js";
import HomeScreen from "../screenobjects/home.screen.js";

// Before(async () => {
//     await driver.launchApp()
// })

// After(async () => {
//     const currentOS = driver.capabilities.platformName
//     if (currentOS === 'iOS') {
//         await driver.closeApp()
//         await driver.removeApp('nl.amsterdam.app.dev')
//     }
//     else {
//         await driver.closeApp()
//     }
// })

//Given
Given(/ik ben op het over deze app scherm/, async () => {
    await HomeScreen.getHomeScreen()
    await HomeScreen.homeAboutModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Over deze app')
})

//When
When(/ik open de over deze app module/, async () => {
    await HomeScreen.homeAboutModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Over deze app')
})

When(/ik klik op waarom deze app\?/, async () => {
    await AboutScreen.aboutAboutTheAppDutchButton.click()
    await expect(AboutScreen.headerTitle).toHaveText('Waarom deze app?')
})

When(/ik klik op about this app/, async () => {
    await AboutScreen.aboutAboutTheAppEnglishButton.click()
    await expect(AboutScreen.headerTitle).toHaveText('About this app')
})

When(/ik klik op privacyverklaring/, async () => {
    await AboutScreen.aboutPrivacyStatementButton.click()
    await expect(AboutScreen.headerTitle).toHaveText('Privacyverklaring')
})

When(/ik klik op toegankelijkheidsverklaring/, async () => {
    await AboutScreen.aboutAccessibilityStatementButton.click()
    await expect(AboutScreen.headerTitle).toHaveText('Toegankelijkheidsverklaring')
})

//Then - eyes
Then(/ik zie het over deze app scherm - eyes/, async () => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "De over deze app module raadplegen")
    await eyes.check()
    await eyes.close()
    await eyes.abortIfNotClosed()
})

Then(/ik zie het waarom deze app scherm met de correcte content - eyes/, async () => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "Waarom deze app? scherm bekijken")
    await eyes.check(Target.window().fully())
    await eyes.close()
    await eyes.abortIfNotClosed()
})

Then(/ik zie het about this app scherm met de correcte content - eyes/, async () => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "About this app scherm bekijken")
    await eyes.check(Target.window().fully())
    await eyes.close()
    await eyes.abortIfNotClosed()
})

Then(/ik zie het privacyverklaring scherm met de correcte content - eyes/, async () => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "Privacyverklaring scherm bekijken")
    await eyes.check(Target.window().fully())
    await eyes.close()
    await eyes.abortIfNotClosed()
})

Then(/ik zie het toegankelijkheidsverklaring scherm met de correcte content - eyes/, async () => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "Toegankelijkheidsverklaring scherm bekijken")
    await eyes.check(Target.window().fully())
    await eyes.close()
    await eyes.abortIfNotClosed()
})

//Then - percy
Then(/ik zie het over deze app scherm - percy/, async () => {
    await percyScreenshot('Over deze app');
})

Then(/ik zie het waarom deze app scherm met de correcte content - percy/, async () => {
    await percyScreenshot('Waarom deze app?', { fullPage: true, screenLengths: 8 })
})

Then(/ik zie het about this app scherm met de correcte content - percy/, async () => {
    await percyScreenshot('about this app', { fullPage: true, screenLengths: 8 })
})

Then(/ik zie het privacyverklaring scherm met de correcte content - percy/, async () => {
    await percyScreenshot('Privacyverklaring', { fullPage: true, screenLengths: 8 });
})

Then(/ik zie het toegankelijkheidsverklaring scherm met de correcte content - percy/, async () => {
    await percyScreenshot('Toegankelijkheidsverklaring', { fullPage: true, screenLengths: 8 });
})