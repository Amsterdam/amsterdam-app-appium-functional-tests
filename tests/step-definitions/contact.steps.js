import { ClassicRunner, Eyes, Target } from '@applitools/eyes-webdriverio';
import percyScreenshot from '@percy/appium-app';
import { Given, Then, When } from '@wdio/cucumber-framework';
import gestures from '../Shared/helpers/gestures.js';
import { default as ContactScreen } from '../screenobjects/contact.screen.js';
import HomeScreen from '../screenobjects/home.screen.js';

Given(/ik ben op het contactscherm/, async () => {
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
    await gestures.checkProjectDisplayedWithScrollDownSlow(ContactScreen.ContactCurrentCityOfficeButton, 4)
    await ContactScreen.ContactCurrentCityOfficeButton.click()
})

When(/^ik selecteer stadsloket (.*)$/, async stadsloket => {
    await ContactScreen.tapCityOfficeButton(stadsloket)
})

When(/ik selecteer het stadsloket Weesp/, async () => {
    await gestures.checkProjectDisplayedWithScrollDownSlow(ContactScreen.ContactCurrentCityOfficeButton, 4)
    await ContactScreen.ContactCurrentCityOfficeButton.click()
    await ContactScreen.tapCityOfficeButton('Weesp')
})



Then(/zie ik een lijst met stadsloketten/, async () => {
    await expect(ContactScreen.cityOfficeCentrumButton).toBeDisplayed()
    await expect(ContactScreen.cityOfficeNieuwWestButton).toBeDisplayed()
    await expect(ContactScreen.cityOfficeNoordButton).toBeDisplayed()
    await expect(ContactScreen.cityOfficeOostButton).toBeDisplayed()
    await expect(ContactScreen.cityOfficeWestButton).toBeDisplayed()
    await expect(ContactScreen.cityOfficeZuidButton).toBeDisplayed()
    await expect(ContactScreen.cityOfficeZuidoostButton).toBeDisplayed()
    await expect(ContactScreen.cityOfficeWeespButton).toBeDisplayed()
})

Then(/^het juiste stadsloket wordt getoond: (.*)$/, async title => {
    const OS = await driver.capabilities.platformName
    if (OS === 'iOS') {
        await driver.pause(2000)
        const currentCityOfficeTitle = await ContactScreen.ContactCurrentCityOfficeButton.getAttribute("label")
        await expect(currentCityOfficeTitle).toContain(title)
    } else {
        //define Android
        await driver.pause(2000)
        await gestures.swipeUpSlowFraction()
        await expect(ContactScreen.ContactCurrentCityOfficeButtonTitle).toHaveText(title)
    }
})

Then(/de bekijk routeknop wordt getoond/, async () => {
    await gestures.checkProjectDisplayedWithScrollDown(ContactScreen.contactSeeRouteButton, 4)
    await expect(ContactScreen.contactSeeRouteButton).toBeDisplayed()
})

Then(/ik zie een maak een afspraakknop/, async () => {
    await gestures.checkProjectDisplayedWithScrollDown(ContactScreen.contactMakeAppointmentButton, 4)
    await expect(ContactScreen.contactMakeAppointmentButton).toBeDisplayed()
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
    if (await ContactScreen.contactVisitingHoursTooltipButton.isDisplayed()) {
        await ContactScreen.contactVisitingHoursTooltipButton.click()
    }
    await percyScreenshot('Op de contactpagina vind ik informatie over de stadsloketten die ik kan bezoeken', { fullPage: true, screenLengths: 8 })
})

