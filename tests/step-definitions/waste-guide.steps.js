import { ClassicRunner, Eyes } from '@applitools/eyes-webdriverio';
import percyScreenshot from '@percy/appium-app';
import { Then, When } from '@wdio/cucumber-framework';
import HomeScreen from '../screenobjects/home.screen.js';

When(/ik open de Afvalwijzer module/, async () => {
    await HomeScreen.homeWasteGuideModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Afvalwijzer')
})

//Then - eyes
Then(/ik zie het Afvalwijzer scherm - eyes/, async () => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "De Afvalwijzer module raadplegen")
    await eyes.check()
    await eyes.close()
    await eyes.abortIfNotClosed()
})

//Then - percy
Then(/ik zie het Afvalwijzer scherm - percy/, async () => {
    await percyScreenshot('Afvalwijzer')
})