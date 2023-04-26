import { Given } from "@wdio/cucumber-framework";
import HomeScreen from "../screenobjects/home.screen.js";

Given(/ik start de app/, async () => {
    //await HomeScreen.homeAboutModuleButton.waitForDisplayed(6000)
    //console.log(await helpers.createSelector("WelcomeImageAndQuoteButton"))
    await HomeScreen.getHomeScreen()
    //console.log(helpers.createSelector("HomeConstructionWorkModuleButton"))
})

