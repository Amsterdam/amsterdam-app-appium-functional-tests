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
    await WasteGuideScreen.wasteGuideRequestLocationButton.click()
    await ProfileScreen.bottomSheetSelectAddressButton.waitForDisplayed(2000)
    await ProfileScreen.bottomSheetSelectAddressButton.click()
    await expect(WasteGuideScreen.headerTitle).toHaveText('Adres')
    await ProfileScreen.addressStreetInputSearchField.addValue('Balistraat 1-1')
    const addressSelector = await ProfileScreen.addressSelector('Balistraat 1-1')
    await addressSelector.click()
    //await ProfileScreen.bottomSheetSelectAddressButton.click()
    const OS = await driver.capabilities.platformName
    if (OS === 'iOS') {
        const attribute = await WasteGuideScreen.wasteGuideChangeLocationButton.getAttribute("label");
        console.log(await attribute)
        await expect(await attribute).toEqual('Mijn adres, Balistraat 1-1')
    }
    //Android:
    else {
        await expect(WasteGuideScreen.wasteGuideChangeLocationButtonText).toHaveText('Balistraat 1-1')
    }
})

When(/^ik verander het adres naar (.*): dit is een adres (.*)$/, async (adres, omschrijving) => {
    await WasteGuideScreen.wasteGuideChangeLocationButton.waitForDisplayed(5000)
    await WasteGuideScreen.wasteGuideChangeLocationButton.click()
    await ProfileScreen.bottomSheetSelectAddressButton.waitForDisplayed(5000)
    await ProfileScreen.bottomSheetChangeAddressButton.click()
    await expect(ProfileScreen.headerTitle).toHaveText('Mijn profiel')
    await ProfileScreen.addressAddButton.click()
    await expect(ProfileScreen.headerTitle).toHaveText('Adres')
    await ProfileScreen.addressStreetInputSearchField.addValue(adres)
    const addressSelector = await ProfileScreen.addressSelector(adres)
    await addressSelector.click()
    await ProfileScreen.headerBackButton.click()
    await expect(WasteGuideScreen.headerTitle).toHaveText('Afvalwijzer')
    await ProfileScreen.bottomSheetSelectAddressButton.click()
    const OS = await driver.capabilities.platformName
    if (OS === 'iOS') {
        const attribute = await WasteGuideScreen.wasteGuideChangeLocationButton.getAttribute("label");
        console.log(await attribute)
        await expect(await attribute).toEqual(`Mijn adres, ${adres}`)
    }
    //Android:
    else {
        await expect(WasteGuideScreen.wasteGuideChangeLocationButtonText).toHaveText(adres)
    }
})

When(/ik voer een adres (.*) in dat geen woonadres is/, async adres => {
    await WasteGuideScreen.wasteGuideChangeLocationButton.click()
    await ProfileScreen.bottomSheetSelectAddressButton.waitForDisplayed(2000)
    await ProfileScreen.bottomSheetChangeAddressButton.click()
    await expect(ProfileScreen.headerTitle).toHaveText('Mijn profiel')
    await ProfileScreen.addressAddButton.click()
    await expect(WasteGuideScreen.headerTitle).toHaveText('Adres')
    await ProfileScreen.addressStreetInputSearchField.addValue(adres)
    const addressSelector = await ProfileScreen.addressSelector(adres)
    await addressSelector.click()
    await ProfileScreen.headerBackButton.click()
    await expect(WasteGuideScreen.headerTitle).toHaveText('Afvalwijzer')
    await ProfileScreen.bottomSheetSelectAddressButton.click()
    const OS = await driver.capabilities.platformName
    if (OS === 'iOS') {
        const attribute = await WasteGuideScreen.wasteGuideChangeLocationButton.getAttribute("label");
        console.log(await attribute)
        await expect(await attribute).toEqual(`Mijn adres, ${adres}`)
    }
    //Android:
    else {
        await expect(WasteGuideScreen.wasteGuideChangeLocationButtonText).toHaveText(adres)
    }
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