import { ClassicRunner, Eyes, Target } from '@applitools/eyes-webdriverio';
import percyScreenshot from '@percy/appium-app';
import { Given, Then } from "@wdio/cucumber-framework";
import HomeScreen from "../screenobjects/home.screen.js";

Given(/ik ben op het home scherm/, async () => {
    await HomeScreen.getHomeScreen()
});

//Eyes
Then(/^ik zie het correcte scherm: (.*) - eyes$/, async (omschrijving) => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", omschrijving)
    await eyes.check(Target.window().fully())
    await eyes.close()
    await eyes.abortIfNotClosed()
})

//Percy
Then(/^ik zie het correcte scherm: (.*) - percy$/, async (omschrijving) => {
    await percyScreenshot(omschrijving, { fullPage: true, screenLengths: 8 })
})