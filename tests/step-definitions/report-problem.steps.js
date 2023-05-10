import { ClassicRunner, Eyes, Target } from '@applitools/eyes-webdriverio';
import percyScreenshot from '@percy/appium-app';
import { Then, When } from '@wdio/cucumber-framework';
import HomeScreen from '../screenobjects/home.screen.js';

When(/ik open de Melding doen module/, async () => {
    await HomeScreen.homeReportProblemModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Melding doen')
})

//Then - eyes
Then(/ik zie het Melding doen scherm - eyes/, async () => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "De Melding doen module raadplegen")
    await eyes.check(Target.window().fully())
    await eyes.close()
    await eyes.abortIfNotClosed()
})

//Then - percy
Then(/ik zie het Melding doen scherm - percy/, async () => {
    await percyScreenshot('Melding doen')
})