import { ClassicRunner, Eyes, Target } from '@applitools/eyes-webdriverio';
import { Given, Then, When } from "@wdio/cucumber-framework";
import AboutScreen from "../screenobjects/about.screen.js";
import HomeScreen from "../screenobjects/home.screen.js";

When(/ik open de over deze app module/, async () => {
    await HomeScreen.homeAboutModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Over deze app')
})

Then(/ik zie het over deze app scherm/, async () => {
    //await driver.launchApp();
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "De over deze app module raadplegen")
    await eyes.check()
    await eyes.close()
    await eyes.abortIfNotClosed()
})

Given(/ik ben op het over deze app scherm/, async () => {
    await driver.launchApp()
    await HomeScreen.getHomeScreen()
    await HomeScreen.homeAboutModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Over deze app')
})

When(/ik klik op waarom deze app\?/, async () => {
    await AboutScreen.aboutAboutTheAppDutchButton.click()
    await expect(AboutScreen.headerTitle).toHaveText('Waarom deze app?')
})

Then(/ik zie het waarom deze app scherm met de correcte content/, async () => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "Waarom deze app? scherm bekijken")
    await eyes.check(Target.window().fully())
    await eyes.close()
    await eyes.abortIfNotClosed()
})

When(/ik klik op about this app/, async () => {
    await AboutScreen.aboutAboutTheAppEnglishButton.click()
    await expect(AboutScreen.headerTitle).toHaveText('About this app')
})

Then(/Then ik zie het about this app scherm met de correcte content/, async () => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "About this app scherm bekijken")
    await eyes.check(Target.window().fully())
    await eyes.close()
    await eyes.abortIfNotClosed()
})

When(/ik klik op privacyverklaring/, async () => {
    await AboutScreen.aboutPrivacyStatementButton.click()
    await expect(AboutScreen.headerTitle).toHaveText('Privacyverklaring')
})

Then(/Then ik zie het privacyverklaring scherm met de correcte content/, async () => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "Privacyverklaring scherm bekijken")
    await eyes.check(Target.window().fully())
    await eyes.close()
    await eyes.abortIfNotClosed()
})

When(/ik klik op toegankelijkheidsverklaring/, async () => {
    await AboutScreen.aboutAccessibilityStatementButton.click()
    await expect(AboutScreen.headerTitle).toHaveText('Toegankelijkheidsverklaring')
})

Then(/ik zie het toegankelijkheidsverklaring scherm met de correcte content/, async () => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "Toegankelijkheidsverklaring scherm bekijken")
    await eyes.check(Target.window().fully())
    await eyes.close()
    await eyes.abortIfNotClosed()
})
