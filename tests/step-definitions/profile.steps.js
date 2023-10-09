import { Given, Then, When } from "@wdio/cucumber-framework";
import HomeScreen from "../screenobjects/home.screen.js";
import ProfileScreen from "../screenobjects/profile.screen.js";


//Given
Given(/ik ben op het mijn profiel scherm/, async () => {
    await HomeScreen.getHomeScreen()
    await HomeScreen.headerUserButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Mijn profiel')
})

Given(/ik heb een adres toegevoegd/, async () => {
    await HomeScreen.getHomeScreen()
    await HomeScreen.headerUserButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Mijn profiel')
    await ProfileScreen.addressAddButton.click()
    await ProfileScreen.addAddress('Weesperstraat 113')
    await (ProfileScreen.addressSearchResultWeesperstraat113).click()
    await ProfileScreen.checkAddressAdded('Weesperstraat 113')
})

//When
When(/ik ga naar mijn profiel/, async () => {
    await HomeScreen.headerUserButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Mijn profiel')
})

When(/ik zoek op 'Weesperstraat 113'/, async () => {
    await ProfileScreen.addressAddButton.click()
    await ProfileScreen.addAddress('Weesperstraat 113')
})

When(/ik selecteer het adres/, async () => {
    await (ProfileScreen.addressSearchResultWeesperstraat113).click()
})

When(/ik sluit de app en start de app opnieuw/, async () => {
    await driver.closeApp()
    //  await driver.setCapability({ 'appium:noReset': 'false' })
    await driver.launchApp()
    //await driver.activateApp('nl.amsterdam.app.dev')
})

When(/ik wijzig mijn adres/, async () => {
    await ProfileScreen.addressAddButton.click()
    await ProfileScreen.addAddress('Balistraat 1-1')
    await ProfileScreen.addressSearchResultBalistraat1hg1.click()
})

When(/ik verwijder mijn adres/, async () => {
    await ProfileScreen.addressDeleteButton.click()
})

When(/ik voeg opnieuw een adres toe/, async () => {
    await ProfileScreen.addressAddButton.click()
    await ProfileScreen.addAddress('Weesperstraat 113')
    await ProfileScreen.addressSearchResultWeesperstraat113.click()
    await ProfileScreen.checkAddressAdded('Weesperstraat 113')
})

When(/ik klik op 'Hoe gebruiken we uw adres en locatie\?'/, async () => {
    await ProfileScreen.addressLocationPrivacyInfoButton.click()
})

When(/ik sluit het scherm middels de (.*) button/, async button => {
    if (button === 'close') {
        await ProfileScreen.addressPrivacyInfoModalHeaderCloseButton.click()
    }
    else {
        await ProfileScreen.addressPrivacyInfoModalCloseButton.click()
    }
})

//Then
Then(/ik zie mijn profiel met de mogelijkheid om een adres toe te voegen/, async () => {
    await expect(ProfileScreen.addressTitle).toBeDisplayed()
    await expect(ProfileScreen.addressAddButtonTitle).toBeDisplayed()
    await expect(ProfileScreen.addressAddButtonText).toBeDisplayed()
    await expect(ProfileScreen.addressLocationPrivacyInfoButton).toBeDisplayed()
})

Then(/krijg ik de juiste zoekresultaten in het 'Adres' scherm/, async () => {
    await expect(ProfileScreen.addressSearchResultWeesperstraat113).toBeDisplayed()
})

Then(/^mijn adres is succesvol (.*)$/, async (status) => {
    if (status == "toegevoegd" || status == "gewijzigd") {
        await ProfileScreen.checkAddressAdded('Weesperstraat 113')
    }
    else if (status == "verwijderd") {
        console.log(await status)
        await expect(ProfileScreen.deletedTxt).toBeDisplayed()
        await expect(ProfileScreen.addressAddButtonText).toHaveText('Vul een adres in')
    }
})

Then(/^het adres (.*) met postcode (.*) wordt nog steeds getoond$/, async (adres) => {
    await HomeScreen.getHomeScreen()
    await HomeScreen.headerUserButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Mijn profiel')
    await ProfileScreen.checkAddressAdded(adres, postcode)
    await driver.removeApp('nl.amsterdam.app.dev')
})

Then(/het label over het adres verwijderen is verdwenen/, async () => {
    await expect(ProfileScreen.deletedTxt).not.toBeDisplayed()
})

Then(/ik zie de privacy en locatie informatie/, async () => {
    await expect(ProfileScreen.addressPrivacyInfoModalCloseButton).toBeDisplayed()
    const OS = await driver.capabilities.platformName
    if (OS === 'iOS') {
        const attribute = await ProfileScreen.addressPrivacyInfoModalCloseButtonLabel.getAttribute("label");
        console.log(await attribute)
        await expect(await attribute).toEqual('Oké, ik begrijp het!')
    }
    //Android:
    else {
        await expect(ProfileScreen.addressPrivacyInfoModalCloseButtonLabel).toHaveText('Oké, ik begrijp het!')
    }
    await expect(ProfileScreen.addressPrivacyInfoTitle).toBeDisplayed()
    await expect(ProfileScreen.addressPrivacyInfoTitle).toHaveText('Hoe worden mijn locatie en adres gebruikt?')
    await expect(ProfileScreen.addressPrivacyInfoModalHeaderCloseButton).toBeDisplayed()
})

Then(/ik ben terug op het mijn profiel scherm/, async () => {
    await expect(ProfileScreen.addressTitle).toBeDisplayed()
})

