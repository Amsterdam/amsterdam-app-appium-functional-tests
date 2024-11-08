import {Given, When} from '@wdio/cucumber-framework'
import AboutScreen from '../screenobjects/about.screen.ts'
import HomeScreen from '../screenobjects/home.screen.ts'

// Before(async () => {
//     await driver.launchApp()
// })

// After(async () => {
//     const currentOS = driver.capabilities.platformName
//     if (currentOS === 'iOS') {
//         await driver.closeApp()
//         await driver.removeApp('nl.amsterdam.app.dev')
//     }
//     else {
//         await driver.closeApp()
//     }
// })

//Given
Given(/ik ben op het over deze app scherm/, async () => {
  await HomeScreen.getHomeScreen()
  await HomeScreen.homeAboutModuleButton.click()
  await expect(HomeScreen.headerTitle).toHaveText('Over deze app')
})

//When
When(/ik open de over deze app module/, async () => {
  await HomeScreen.homeAboutModuleButton.click()
  await expect(HomeScreen.headerTitle).toHaveText('Over deze app')
})

When(/ik klik op waarom deze app\?/, async () => {
  await AboutScreen.aboutAboutTheAppDutchButton.click()
  await expect(AboutScreen.headerTitle).toHaveText('Waarom deze app?')
})

When(/ik klik op about this app/, async () => {
  await AboutScreen.aboutAboutTheAppEnglishButton.click()
  await expect(AboutScreen.headerTitle).toHaveText('About this app')
})

When(/ik klik op privacyverklaring/, async () => {
  await AboutScreen.aboutPrivacyStatementButton.click()
  await expect(AboutScreen.headerTitle).toHaveText('Privacyverklaring')
})

When(/ik klik op toegankelijkheidsverklaring/, async () => {
  await AboutScreen.aboutAccessibilityStatementButton.click()
  await expect(AboutScreen.headerTitle).toHaveText(
    'Toegankelijkheidsverklaring',
  )
})
