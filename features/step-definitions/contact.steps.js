import { ClassicRunner, Eyes, Target } from '@applitools/eyes-webdriverio';
import { Then, When } from '@wdio/cucumber-framework';
import HomeScreen from '../screenobjects/home.screen.js';

When(/ik open de contact module/, async () => {
    //await createSelector("HomeContactModuleButton").click()
    await HomeScreen.homeContactModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Contact')
})

Then(/ik zie het contact scherm/, async () => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "De contact module raadplegen")
    await eyes.check(Target.window().fully())
    await eyes.close()
    await eyes.abortIfNotClosed()
})
