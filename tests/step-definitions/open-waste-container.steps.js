import { ClassicRunner, Eyes, Target } from '@applitools/eyes-webdriverio';
import percyScreenshot from '@percy/appium-app';
import { Then, When } from '@wdio/cucumber-framework';
import HomeScreen from '../screenobjects/home.screen.js';

When(/ik open de Gft-container openen module/, async () => {
    await HomeScreen.homeOpenWasteContainerModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Gft-container openen')
})

//Then - eyes
Then(/ik zie het Gft-container openen scherm - eyes/, async () => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "De Gft-container openen module raadplegen")
    await eyes.check(Target.window().fully())
    await eyes.close()
    await eyes.abortIfNotClosed()
})

//Then - percy
Then(/ik zie het Gft-container openen scherm - percy/, async () => {
    await percyScreenshot('Gft-container')
})