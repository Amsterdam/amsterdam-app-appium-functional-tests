import { ClassicRunner, Eyes, Target } from '@applitools/eyes-webdriverio';
import percyScreenshot from '@percy/appium-app';
import { Given, Then, When } from '@wdio/cucumber-framework';
import gestures from '../Shared/helpers/gestures.js';
import contactScreen from '../screenobjects/contact.screen.js';
import HomeScreen from '../screenobjects/home.screen.js';

Given(/ik ben op het contactscherm/, async () => {
    await driver.launchApp()
    await HomeScreen.getHomeScreen()
    await HomeScreen.homeContactModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Contact')
})

When(/ik open de contact module/, async () => {
    //await createSelector("HomeContactModuleButton").click()
    await HomeScreen.homeContactModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Contact')
})

When(/ik klik op het stadsloket/, async () => {
    await gestures.checkProjectDisplayedWithScrollDown(contactScreen.ContactCurrentCityOfficeButton, 4)
    driver.pause(2000)
    await contactScreen.ContactCurrentCityOfficeButton.click()
})

When(/^ik selecteer een stadsloket (.*)$/, async stadsloket => {
    await contactScreen.tapCityOfficeButton(stadsloket)
})

Then(/zie ik een lijst met stadsloketten/, async () => {
    await expect(contactScreen.cityOfficeCentrumButton).toBeDisplayed()
    await expect(contactScreen.cityOfficeNieuwWestButton).toBeDisplayed()
    await expect(contactScreen.cityOfficeNoordButton).toBeDisplayed()
    await expect(contactScreen.cityOfficeOostButton).toBeDisplayed()
    await expect(contactScreen.cityOfficeWestButton).toBeDisplayed()
    await expect(contactScreen.cityOfficeZuidButton).toBeDisplayed()
    await expect(contactScreen.cityOfficeZuidoostButton).toBeDisplayed()
    await expect(contactScreen.cityOfficeWeespButton).toBeDisplayed()
})

Then(/^het juiste stadsloket wordt getoond (.*)$/, async title => {
    const OS = await driver.capabilities.platformName
    if (OS === 'iOS') {
        driver.pause(2000)
        const currentCityOfficeTitle = await contactScreen.ContactCurrentCityOfficeButton.getAttribute("label")
        expect(currentCityOfficeTitle).toContain(title)
    } else {
        //define Android
    }
})
//Then - eyes
Then(/ik zie het contact scherm - eyes/, async () => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "De contact module raadplegen")
    await eyes.check(Target.window().fully())
    await eyes.close()
    await eyes.abortIfNotClosed()
})

//Then - percy
Then(/ik zie het contact scherm - percy/, async () => {
    await percyScreenshot('De contact module raadplegen')
})

Then(/^het juiste stadsloket wordt getoond - percy (.*)$/, async title => {
    await percyScreenshot('Op de contactpagina vind ik informatie over de stadsloketten die ik kan bezoeken', { fullPage: true, screenLengths: 8 })
})