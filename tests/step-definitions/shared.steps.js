import { Given } from "@wdio/cucumber-framework";
import HomeScreen from "../screenobjects/home.screen.js";

Given(/ik ben op het home scherm/, async () => {
    await HomeScreen.getHomeScreen()
});