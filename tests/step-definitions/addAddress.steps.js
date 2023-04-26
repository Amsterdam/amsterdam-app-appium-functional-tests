import { Given, Then, When } from "@wdio/cucumber-framework";
import gestures from '../Shared/helpers/gestures.js';
import HomeScreen from "../screenobjects/home.screen.js";
import ProfileScreen from "../screenobjects/profile.screen.js";

//Given
Given(/ik ben op het mijn profiel scherm/, async () => {
    await driver.launchApp()
    await HomeScreen.getHomeScreen()
    await HomeScreen.headerUserButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Mijn profiel')
})

//When
When(/ik ga naar mijn profiel/, async () => {
    await HomeScreen.headerUserButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Mijn profiel')
})

When(/ik zoek op 'Weesperstraat 113'/, async () => {
    await ProfileScreen.userAddressAddButton.click()
    await ProfileScreen.userAddressStreetInputSearchField.addValue("Weesperstraat 113")
    await gestures.hitEnter()
    await gestures.hitEnter()
})

When(/ik selecteer het adres/, async () => {

})

//Then
Then(/ik zie mijn profiel met de mogelijkheid om een adres toe te voegen/, async () => {
    await expect(ProfileScreen.userAddressTitle).toBeDisplayed()
    await expect(ProfileScreen.userAddressInstructionParagraph).toBeDisplayed()
    await expect(ProfileScreen.userAddressAddButton).toBeDisplayed()
})

Then(/krijg ik de juiste zoekresultaten/, async () => {

})

Then(/het adres is toegevoegd aan Mijn profiel/, async () => {

})

