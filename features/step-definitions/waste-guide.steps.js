import { ClassicRunner, Eyes } from '@applitools/eyes-webdriverio';
import { Then, When } from '@wdio/cucumber-framework';
import HomeScreen from '../screenobjects/home.screen.js';

When(/ik open de Afvalwijzer module/, async () => {
    await HomeScreen.homeWasteGuideModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Afvalwijzer')
})

Then(/ik zie het Afvalwijzer scherm/, async () => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "De Afvalwijzer module raadplegen")
    await eyes.check()
    await eyes.close()
    await eyes.abortIfNotClosed()
})