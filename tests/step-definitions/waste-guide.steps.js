import { Given, Then, When } from '@wdio/cucumber-framework';
//import { wasteGuideRequestApp, wasteGuideRequestData } from '../../requests.js';
import HomeScreen from '../screenobjects/home.screen.js';
import PermissionsScreen from '../screenobjects/permissions.screen.js';
import ProfileScreen from '../screenobjects/profile.screen.js';
import WasteGuideScreen from '../screenobjects/waste-guide.screen.js';

const OS = await driver.capabilities.platformName

Given(/ik ben op het afvalwijzer Startscherm/, async () => {
    await HomeScreen.getHomeScreen()
    await HomeScreen.headerEnvironmentButton.click()
    await HomeScreen.environmentProduction.click()
    await HomeScreen.headerBackButton.click()
    await driver.pause(6000)
    await HomeScreen.homeWasteGuideModuleButton.waitForDisplayed(2000)
    await HomeScreen.homeWasteGuideModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Afvalwijzer')
})

When(/ik open de Afvalwijzer module/, async () => {
    await HomeScreen.homeWasteGuideModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Afvalwijzer')
})

Given(/^ik heb een adres ingevoerd, bagnummer: (.*)$/, async (bagnummer) => {
    await WasteGuideScreen.wasteGuideRequestLocationButton.click()
    await ProfileScreen.bottomSheetSelectAddressButton.waitForDisplayed(2000)
    await ProfileScreen.bottomSheetSelectAddressButton.click()
    await expect(WasteGuideScreen.headerTitle).toHaveText('Adres')
    await ProfileScreen.addressStreetInputSearchField.addValue('Balistraat 1-1')
    const addressSelector = await ProfileScreen.addressSelector('Balistraat 1, 1 hoog')
    await addressSelector.click()
    //await wasteGuideRequestData(bagnummer)
    //await wasteGuideRequestApp(bagnummer)
    await WasteGuideScreen.wasteGuideRequestLocationButton.waitForDisplayed(20000)
    if (OS === 'iOS') {
        const attribute = await WasteGuideScreen.wasteGuideRequestLocationButton.getAttribute("label");
        console.log(await attribute)
        await expect(await attribute).toEqual('Mijn adres, Balistraat 1-1')
    }
    //Android:
    else {
        await expect(WasteGuideScreen.wasteGuideRequestLocationButtonText).toHaveText('Balistraat 1-1')
    }
})

Given(/^ik gebruik 'Mijn locatie' met de permissie 'tijdens' bij de afvalwijzer/, async () => {
    await driver.setGeoLocation({ latitude: 52.363114, longitude: 4.907245, altitude: 0 })
    await WasteGuideScreen.wasteGuideRequestLocationButton.waitForDisplayed(5000)
    await WasteGuideScreen.wasteGuideRequestLocationButton.click()
    await ProfileScreen.bottomSheetSelectLocationButton.waitForDisplayed(5000)
    await ProfileScreen.bottomSheetSelectLocationButton.click()
    await PermissionsScreen.androidAllowWhileUsingAppButton.click()
    await driver.pause(5000)
    await expect(ProfileScreen.bottomSheetSelectLocationButtonText).toHaveText('In de buurt van Weesperstraat 113')
    await ProfileScreen.bottomSheetSelectLocationButton.click()
    await driver.pause(2000)
    //Deny location
    // await PermissionsScreen.androidAllowDontAllowButton.click()
    // await expect(shareLocationScreen.headerTitle).toHaveText('Locatie delen')
    // await ProfileScreen.bottomSheetSelectLocationButton.click()
})

Given(/^ik gebruik 'Mijn locatie' met de permissie 'altijd vragen' bij de afvalwijzer/, async () => {
    await driver.setGeoLocation({ latitude: 52.363114, longitude: 4.907245, altitude: 0 })
    await WasteGuideScreen.wasteGuideRequestLocationButton.waitForDisplayed(5000)
    await WasteGuideScreen.wasteGuideRequestLocationButton.click()
    await ProfileScreen.bottomSheetSelectLocationButton.waitForDisplayed(5000)
    await ProfileScreen.bottomSheetSelectLocationButton.click()
    await PermissionsScreen.androidAllowOnlyThisTimeButton.click()
    await driver.pause(5000)
    //console.log(await driver.getGeoLocation())
    await expect(ProfileScreen.bottomSheetSelectLocationButtonText).toHaveText('In de buurt van Weesperstraat 113')
    await ProfileScreen.bottomSheetSelectLocationButton.click()
    await driver.pause(2000)
    //Deny location
    // await PermissionsScreen.androidAllowDontAllowButton.click()
    // await expect(shareLocationScreen.headerTitle).toHaveText('Locatie delen')
    // await ProfileScreen.bottomSheetSelectLocationButton.click()
})

Given(/^ik geef geen toestemming om 'Mijn locatie' te delen bij de afvalwijzer/, async () => {

})

When(/^ik verander het adres naar (.*) met (.*), bagnummer: (.*)$/, async (adres, adreslabel, bagnummer) => {
    await WasteGuideScreen.wasteGuideRequestLocationButton.waitForDisplayed(5000)
    await WasteGuideScreen.wasteGuideRequestLocationButton.click()
    await ProfileScreen.bottomSheetSelectAddressButton.waitForDisplayed(5000)
    await ProfileScreen.bottomSheetChangeAddressButton.click()
    await expect(ProfileScreen.headerTitle).toHaveText('Mijn profiel')
    await ProfileScreen.addressAddButton.click()
    await expect(ProfileScreen.headerTitle).toHaveText('Adres')
    await ProfileScreen.addressStreetInputSearchField.addValue(adres)
    const addressSelector = await ProfileScreen.addressSelector(adreslabel)
    await addressSelector.click()
    //await wasteGuideRequestData(bagnummer)
    //await wasteGuideRequestApp(bagnummer)
    await ProfileScreen.headerBackButton.click()
    await expect(WasteGuideScreen.headerTitle).toHaveText('Afvalwijzer')
    await WasteGuideScreen.wasteGuideRequestLocationButton.waitForDisplayed(20000)
    if (OS === 'iOS') {
        const attribute = await WasteGuideScreen.wasteGuideRequestLocationButton.getAttribute("label");
        console.log(await attribute)
        await expect(await attribute).toEqual(`Mijn adres, ${adres}`)
    }
    //Android:
    else {
        await expect(WasteGuideScreen.wasteGuideRequestLocationButtonText).toHaveText(adres)
    }
})

When(/ik voer een adres (.*) in dat geen woonadres is, bagnummer: (.*)/, async (adres, bagnummer) => {
    await WasteGuideScreen.wasteGuideRequestLocationButton.waitForDisplayed(5000)
    await WasteGuideScreen.wasteGuideRequestLocationButton.click()
    await ProfileScreen.bottomSheetSelectAddressButton.waitForDisplayed(2000)
    await ProfileScreen.bottomSheetChangeAddressButton.click()
    await expect(ProfileScreen.headerTitle).toHaveText('Mijn profiel')
    await ProfileScreen.addressAddButton.click()
    await expect(WasteGuideScreen.headerTitle).toHaveText('Adres')
    await ProfileScreen.addressStreetInputSearchField.addValue(adres)
    const addressSelector = await ProfileScreen.addressSelector(adres)
    await addressSelector.click()
    //await wasteGuideRequestData(bagnummer)
    //await wasteGuideRequestApp(bagnummer)
    await ProfileScreen.headerBackButton.click()
    await expect(WasteGuideScreen.headerTitle).toHaveText('Afvalwijzer')
    await WasteGuideScreen.wasteGuideRequestLocationButton.waitForDisplayed(20000)
    if (OS === 'iOS') {
        const attribute = await WasteGuideScreen.wasteGuideRequestLocationButton.getAttribute("label");
        console.log(await attribute)
        await expect(await attribute).toEqual(`Mijn adres, ${adres}`)
    }
    //Android:
    else {
        await expect(WasteGuideScreen.wasteGuideRequestLocationButtonText).toHaveText(adres)
    }
})

When(/ik selecteer of ik wel of niet een contract (.*) heb/, async contract => {
    if (contract === 'nee') {
        await WasteGuideScreen.wasteGuideSelectContractRadioGroupfalseRadioButton.click()
    } else {
        await WasteGuideScreen.wasteGuideSelectContractRadioGrouptrueRadioButton.click()
    }
})

Then(/ik zie het juiste adres in het afvalwijzerscherm/, async () => {
    await WasteGuideScreen.wasteGuideRequestLocationButton.waitForDisplayed(5000)
    if (OS === 'iOS') {
        const label = await WasteGuideScreen.wasteGuideRequestLocationButton.getAttribute("label")
        await expect(label).toEqual('Geef uw locatie door')
    }
    else {
        await expect(WasteGuideScreen.wasteGuideRequestLocationButtonTitle).toHaveText('Geef uw locatie door')
    }
})

Then(/ik zie het Afvalwijzer start scherm/, async () => {
    await WasteGuideScreen.wasteGuideRequestLocationButton.waitForDisplayed(5000)
    if (OS === 'iOS') {
        const label = await WasteGuideScreen.wasteGuideRequestLocationButton.getAttribute("label")
        await expect(label).toEqual('Geef uw locatie door')
    }
    else {
        await expect(WasteGuideScreen.wasteGuideRequestLocationButtonTitle).toHaveText('Geef uw locatie door')
    }
})

Then(/ik zie het Afvalwijzer scherm voor woonadressen/, async () => {
    await WasteGuideScreen.wasteGuideRequestLocationButton.waitForDisplayed(5000)
    if (OS === 'iOS') {
        const label = await WasteGuideScreen.wasteGuideRequestLocationButton.getAttribute("label")
        await expect(label).toEqual('Mijn adres, Balistraat 1-1')
    }
    else {
        await expect(WasteGuideScreen.wasteGuideRequestLocationButtonTitle).toHaveText('Mijn adres')
        await expect(WasteGuideScreen.wasteGuideRequestLocationButtonText).toHaveText('Balistraat 1-1')
    }
})

Then(/ik zie het Afvalwijzer scherm voor adressen die geen woonadres zijn/, async () => {
    await expect(WasteGuideScreen.wasteGuideRequestLocationButton).toBeDisplayed()
    await WasteGuideScreen.wasteGuideReportWrongBuildingTypeIntroPhrase.waitForDisplayed(5000)
    await WasteGuideScreen.wasteGuideSelectContractRadioGroupfalseRadioButton.click()
    await expect(WasteGuideScreen.wasteGuideScreenRestafvalTitle).toBeDisplayed()
    await WasteGuideScreen.wasteGuideSelectContractRadioGrouptrueRadioButton.click()
    await expect(WasteGuideScreen.wasteGuideBusinessesInfoTitle).toBeDisplayed()
    await expect(WasteGuideScreen.wasteGuideBusinessesInfoPhrase).toBeDisplayed()

})
