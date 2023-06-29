import { ClassicRunner, Eyes } from '@applitools/eyes-webdriverio';
import percyScreenshot from '@percy/appium-app';
import { Given, Then, When } from '@wdio/cucumber-framework';
import HomeScreen from '../screenobjects/home.screen.js';
import ProfileScreen from '../screenobjects/profile.screen.js';
import WasteGuideScreen from '../screenobjects/waste-guide.screen.js';

Given(/ik ben op het afvalwijzer Startscherm/, async () => {
    await HomeScreen.getHomeScreen()
    await HomeScreen.homeWasteGuideModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Afvalwijzer')
})

When(/ik open de Afvalwijzer module/, async () => {
    await HomeScreen.homeWasteGuideModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Afvalwijzer')
})

Given(/ik heb een adres ingevoerd/, async () => {
    await WasteGuideScreen.wasteGuideEnterAddressButton.click()
    await expect(WasteGuideScreen.headerTitle).toHaveText('Adres')
    await ProfileScreen.addressStreetInputSearchField.addValue('Balistraat 1-1')
    await ProfileScreen.addressSearchResultBalistraat1hg1.click()
})

When(/^ik verander het adres naar (.*): dit is een adres (.*)$/, async (adres, omschrijving) => {
    await WasteGuideScreen.wasteGuideButtonEditAddress.click()
    await expect(WasteGuideScreen.headerTitle).toHaveText('Adres')
    await ProfileScreen.addressStreetInputSearchField.addValue(adres)
    const addressSelector = await ProfileScreen.addressSelector(adres)
    await addressSelector.click()
    await expect(WasteGuideScreen.headerTitle).toHaveText('Afvalwijzer')
})

When(/ik voer een adres (.*) in dat geen woonadres is/, async adres => {
    await WasteGuideScreen.wasteGuideButtonEditAddress.click()
    await expect(WasteGuideScreen.headerTitle).toHaveText('Adres')
    await ProfileScreen.addressStreetInputSearchField.addValue(adres)
    const addressSelector = await ProfileScreen.addressSelector(adres)
    await addressSelector.click()
    await expect(WasteGuideScreen.headerTitle).toHaveText('Afvalwijzer')
})

When(/ik selecteer of ik wel of niet een contract (.*) heb/, async contract => {
    if (contract === 'nee') {
        await WasteGuideScreen.wasteGuideSelectContractRadioGroupfalseRadioButton.click()
    } else {
        await WasteGuideScreen.wasteGuideSelectContractRadioGrouptrueRadioButton.click()
    }
})

//Then - eyes
Then(/ik zie het Afvalwijzer scherm - eyes/, async () => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "ik zie het Afvalwijze startscherm")
    await eyes.check()
    await eyes.close()
    await eyes.abortIfNotClosed()
})

Then(/ik zie de juiste informatie in de afvalwijzer voor adressen (.*) - eyes/, async omschrijving => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "ik zie de juiste informatie in de afvalwijzer voor adressen " + omschrijving)
    await eyes.check()
    await eyes.close()
    await eyes.abortIfNotClosed()
})

// Then(/ik zie de juiste informatie in de afvalwijzer/, async contract => {
//     const runner = new ClassicRunner()
//     const eyes = new Eyes(runner)
//     await eyes.open(driver, "Amsterdam App", "ik zie de juiste informatie in de afvalwijzer met contract: " + contract)
//     await eyes.check()
//     await eyes.close()
//     await eyes.abortIfNotClosed()
// })

//Then - percy
Then(/ik zie het Afvalwijzer scherm - percy/, async () => {
    await percyScreenshot('Afvalwijzer')
})

Then(/^ik zie de juiste informatie in de afvalwijzer voor adressen (.*) - percy$/, async (omschrijving) => {
    await percyScreenshot(omschrijving, { fullPage: true, screenLengths: 8 })
})