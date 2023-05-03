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
    await contactScreen.ContactCurrentCityOfficeButton.click()
})

When(/^ik selecteer stadsloket (.*)$/, async stadsloket => {
    await contactScreen.tapCityOfficeButton(stadsloket)
})

When(/ik selecteer stadsloket Weesp/, async () => {
    await gestures.checkProjectDisplayedWithScrollDown(contactScreen.ContactCurrentCityOfficeButton, 4)
    await contactScreen.ContactCurrentCityOfficeButton.click()
    await contactScreen.tapCityOfficeButton('Weesp')
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

Then(/^het juiste stadsloket wordt getoond: (.*)$/, async title => {
    const OS = await driver.capabilities.platformName
    if (OS === 'iOS') {
        await driver.pause(2000)
        const currentCityOfficeTitle = await contactScreen.ContactCurrentCityOfficeButton.getAttribute("label")
        await expect(currentCityOfficeTitle).toContain(title)
    } else {
        //define Android
    }
})

Then(/de bekijk routeknop wordt getoond/, async () => {
    await gestures.checkProjectDisplayedWithScrollDown(contactScreen.contactSeeRouteButton, 4)
    await expect(contactScreen.contactSeeRouteButton).toBeDisplayed()
})

Then(/ik zie een maak een afspraakknop/, async () => {
    await gestures.checkProjectDisplayedWithScrollDown(contactScreen.contactMakeAppointmentButton, 4)
    await expect(contactScreen.contactMakeAppointmentButton).toBeDisplayed()
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


Then(/^het juiste stadsloket wordt getoond - percy (.*)$/, async () => {
    if (await contactScreen.contactVisitingHoursTooltipButton.isDisplayed()) {
        await contactScreen.contactVisitingHoursTooltipButton.click()
    }
    await percyScreenshot('Op de contactpagina vind ik informatie over de stadsloketten die ik kan bezoeken', { fullPage: true, screenLengths: 8 })
})