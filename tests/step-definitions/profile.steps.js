import { Given, Then, When } from "@wdio/cucumber-framework";
//import { expect } from "chai";

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
    //await ProfileScreen.addressAddButton.click()
    //await expect(ProfileScreen.headerTitle).toHaveText('Adres')
    //await ProfileScreen.addressStreetInputSearchField.waitForDisplayed(3000)
    //await driver.pause(2000)
    //await ProfileScreen.addressStreetInputSearchField.addValue("Weesperstraat 113")
    await ProfileScreen.addressAddButton.click()
    await ProfileScreen.addAddress('Weesperstraat 113')
    await (ProfileScreen.addressSearchResultWeesperstraat113).click()
    // await expect(ProfileScreen.addressTitle).toBeDisplayed()
    // await expect(ProfileScreen.addressStreetnameAndNumberText).toBeDisplayed()
    // await expect(ProfileScreen.addressPostalcodeAndCityText).toBeDisplayed()
    // await expect(ProfileScreen.addressStreetnameAndNumberText).toHaveText('Weesperstraat 113')
    // await expect(ProfileScreen.addressPostalcodeAndCityText).toHaveText('1018 VN AMSTERDAM')
    await ProfileScreen.checkAddressAdded('Weesperstraat 113', '1018 VN AMSTERDAM')
})

//When
When(/ik ga naar mijn profiel/, async () => {
    await HomeScreen.headerUserButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Mijn profiel')
})

When(/ik zoek op 'Weesperstraat 113'/, async () => {
    await ProfileScreen.addressAddButton.click()
    await ProfileScreen.addAddress('Weesperstraat 113')
    // await ProfileScreen.addressAddButton.click()
    // await expect(ProfileScreen.headerTitle).toHaveText('Adres')
    // await ProfileScreen.addressStreetInputSearchField.waitForDisplayed(3000)
    // await driver.pause(2000)
    // await ProfileScreen.addressStreetInputSearchField.addValue("Weesperstraat 113")
    //await gestures.hitEnter()
})

When(/ik selecteer het adres/, async () => {
    await (ProfileScreen.addressSearchResultWeesperstraat113).click()
})

When(/ik sluit de app en start de app opnieuw/, async () => {
    await driver.closeApp()
    await driver.activateApp('nl.amsterdam.app.dev')
})

When(/ik wijzig mijn adres/, async () => {
    await ProfileScreen.addressEditButton.click()
    await expect(ProfileScreen.headerTitle).toHaveText('Adres')
    await ProfileScreen.addAddress('Balistraat 1-1')
    await ProfileScreen.addressSearchResultBalistraat1hg1.click()
})

When(/ik verwijder mijn adres/, async () => {
    await ProfileScreen.addressDeleteButton.click()
})

//Then
Then(/ik zie mijn profiel met de mogelijkheid om een adres toe te voegen/, async () => {
    await expect(ProfileScreen.addressTitle).toBeDisplayed()
    await expect(ProfileScreen.addressInstructionParagraph).toBeDisplayed()
    await expect(ProfileScreen.addressAddButton).toBeDisplayed()
})

Then(/krijg ik de juiste zoekresultaten in het 'Adres' scherm/, async () => {
    await expect(ProfileScreen.addressSearchResultWeesperstraat113).toBeDisplayed()
})

Then(/^mijn adres is succesvol (.*)$/, async (status) => {
    // await expect(ProfileScreen.addressTitle).toBeDisplayed()
    // await expect(ProfileScreen.addressStreetnameAndNumberText).toBeDisplayed()
    // await expect(ProfileScreen.addressPostalcodeAndCityText).toBeDisplayed()
    // await expect(ProfileScreen.addressStreetnameAndNumberText).toHaveText('Weesperstraat 113')
    // await expect(ProfileScreen.addressPostalcodeAndCityText).toHaveText('1018 VN AMSTERDAM')
    if (status == "toegevoegd" || status == "gewijzigd") {
        await ProfileScreen.checkAddressAdded('Weesperstraat 113', '1018 VN AMSTERDAM')
    }
    else if (status == "verwijderd") { await expect(ProfileScreen.deletedTxt).toBeDisplayed() }
})

Then(/^het adres (.*) met postcode (.*) wordt nog steeds getoond$/, async (adres, postcode) => {
    await HomeScreen.getHomeScreen()
    await HomeScreen.headerUserButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Mijn profiel')
    // await expect(ProfileScreen.addressTitle).toBeDisplayed()
    // await expect(ProfileScreen.addressStreetnameAndNumberText).toBeDisplayed()
    // await expect(ProfileScreen.addressPostalcodeAndCityText).toBeDisplayed()
    await ProfileScreen.checkAddressAdded(adres, postcode)
})

// Then(/mijn adres is succesvol gewijzigd/, async () => {
//     await ProfileScreen.checkAddressAdded('Balistraat 1-1', '1094 JA AMSTERDAM')
// })

