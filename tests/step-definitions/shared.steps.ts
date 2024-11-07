import { Given, When } from "@wdio/cucumber-framework";
import HomeScreen from "../screenobjects/home.screen.js";
import helpers from '../Shared/helpers/helpers.js';

Given(/ik ben op het home scherm/, async () => {
    await HomeScreen.getHomeScreen()
});


Given(/ik ben op het contactscherm/, async () => {
    await HomeScreen.getHomeScreen()
    await HomeScreen.homeContactModuleButton.click()
    await expect(HomeScreen.headerTitle).toHaveText('Contact')
})

Given(/ik ben op de "(DEV|TEST|ACC|PROD)" omgeving/, async environment => {
    await HomeScreen.getHomeScreen()
    await helpers.switchEnv(environment)
})

When(/ik wacht (\d+) seconden?/, async seconds => {
    await driver.pause(parseInt(seconds)*1000)
})