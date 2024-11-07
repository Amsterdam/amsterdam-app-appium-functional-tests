import {Given, Then, When} from '@wdio/cucumber-framework'
import HomeScreen from '../screenobjects/home.screen.ts'
import settingsScreen from '../screenobjects/settings.screen.ts'

Given(/de module (.*) staat aan/, async module => {
  await HomeScreen.getHomeScreen()
  await HomeScreen.checkModulesExist(module)
})

Given(/ik ben op het instellingen scherm/, async () => {
  await HomeScreen.headerModuleSettingsButton.click()
  await expect(HomeScreen.headerTitle).toHaveText('Instellingen')
})

Given(/de module (.*) staat uit/, async module => {
  await HomeScreen.getHomeScreen()
  await HomeScreen.checkModulesExist(module)
  await HomeScreen.headerModuleSettingsButton.click()
  await driver.pause(2000)
  await settingsScreen.tapSettingsSwitchButton(module)
  await settingsScreen.headerBackButton.click()
  await HomeScreen.checkModulesNotExist(module)
})

Given(/alle modules staan uit/, async () => {
  await HomeScreen.getHomeScreen()
  await HomeScreen.headerModuleSettingsButton.click()
  await settingsScreen.switchAllModulesOff()
})

When(/^ik zet de module (.*) uit$/, async module => {
  await settingsScreen.tapSettingsSwitchButton(module)
})

When(/^ik zet de module (.*) aan$/, async module => {
  await settingsScreen.tapSettingsSwitchButton(module)
})

When(/^ik ga naar het homescherm$/, async () => {
  await settingsScreen.headerBackButton.click()
  await HomeScreen.headerModuleSettingsButton.waitForDisplayed({timeout: 3000})
})

Then(/^ik zie de module (.+?) niet in mijn home scherm$/, async module => {
  await settingsScreen.headerBackButton.click()
  await HomeScreen.homeAboutModuleButton.waitForDisplayed({timeout: 2000})
  await HomeScreen.checkModulesNotExist(module)
})

Then(
  /^ik zie de module (?!.*\bniet\b)(.+) in mijn home scherm$/,
  async module => {
    await settingsScreen.headerBackButton.click()
    await HomeScreen.homeAboutModuleButton.waitForDisplayed({timeout: 2000})
    await HomeScreen.checkModulesExist(module)
  },
)

Then(/^de over deze app module blijft op het homescherm staan$/, async () => {
  await HomeScreen.checkAllModulesNotExist()
  await HomeScreen.checkModulesExist('Over deze app')
})
