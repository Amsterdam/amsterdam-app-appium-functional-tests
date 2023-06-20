import { Given, Then, When } from "@wdio/cucumber-framework";
import HomeScreen from "../screenobjects/home.screen.js";
import ProfileScreen from "../screenobjects/profile.screen.js";


//Given
Given(/ik ben op het mijn profiel scherm/, async () => {
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
    await ProfileScreen.addressAddButton.click()
    await expect(ProfileScreen.headerTitle).toHaveText('Adres')
    await ProfileScreen.addressStreetInputSearchField.waitForDisplayed(3000)
    await ProfileScreen.addressStreetInputSearchField.addValue("Weesperstraat 113")
    //await gestures.hitEnter()
})

When(/ik selecteer het adres/, async () => {
    await (ProfileScreen.addressSearchResultWeesperstraat113).click()
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

Then(/het adres is toegevoegd aan Mijn profiel/, async () => {
    await expect(ProfileScreen.addressTitle).toBeDisplayed()
})

