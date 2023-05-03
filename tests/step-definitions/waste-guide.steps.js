import { ClassicRunner, Eyes } from '@applitools/eyes-webdriverio';
import { Given, Then, When } from '@wdio/cucumber-framework';
import HomeScreen from '../screenobjects/home.screen.js';
import ProfileScreen from '../screenobjects/profile.screen.js';
import WasteGuideScreen from '../screenobjects/waste-guide.screen.js';

Given(/ik ben op het afvalwijzer Startscherm/, async () => {
    await driver.launchApp()
    await HomeScreen.getHomeScreen()
    await HomeScreen.homeWasteGuideModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Afvalwijzer')
})

When(/ik open de Afvalwijzer module/, async () => {
    await HomeScreen.homeWasteGuideModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Afvalwijzer')
})

When(/ik vul adres 'Balistraat 1-1' in/, async () => {
    await WasteGuideScreen.wasteGuideEnterAddressButton.click()
    await expect(WasteGuideScreen.headerTitle).toHaveText('Adres')
})

When(/^het adres (.*) is een adres (.*)$/, async (adres, omschrijving) => {
    await WasteGuideScreen.wasteGuideEnterAddressButton.click()
    await expect(WasteGuideScreen.headerTitle).toHaveText('Adres')
    await ProfileScreen.addressStreetInputSearchField.addValue(adres)
    const addressSelector = await ProfileScreen.addressSelector(adres)
    await addressSelector.click()
    await expect(WasteGuideScreen.headerTitle).toHaveText('Afvalwijzer')
})

When(/ik voer een adres (.*) in dat geen woonadres is/, async adres => {
    await WasteGuideScreen.wasteGuideEnterAddressButton.click()
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
    await eyes.open(driver, "Amsterdam App", "De Afvalwijzer module raadplegen")
    await eyes.check()
    await eyes.close()
    await eyes.abortIfNotClosed()
})

Then(/ik zie de juiste informatie in de afvalwijzer/, async () => {
    const runner = new ClassicRunner()
    const eyes = new Eyes(runner)
    await eyes.open(driver, "Amsterdam App", "De Afvalwijzer module raadplegen")
    await eyes.check()
    await eyes.close()
    await eyes.abortIfNotClosed()
})