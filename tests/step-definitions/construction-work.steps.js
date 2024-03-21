import { ClassicRunner, Eyes } from '@applitools/eyes-webdriverio';
import percyScreenshot from '@percy/appium-app';
import { Given, Then, When } from '@wdio/cucumber-framework';
import chai from 'chai';
import gestures from '../Shared/helpers/gestures.js';
import helpers from '../Shared/helpers/helpers.js';
import ConstructionWorkScreen from '../screenobjects/construction-work.screen.js';
import HomeScreen from '../screenobjects/home.screen.js';
import notificationsScreen from '../screenobjects/notifications.screen.js';
import PermissionsScreen from '../screenobjects/permissions.screen.js';
import ProfileScreen from '../screenobjects/profile.screen.js';

//Given
Given(/ik ben op het werkzaamheden scherm/, async () => {
  await HomeScreen.getHomeScreen()
  await HomeScreen.homeConstructionWorkModuleButton.click()
  await expect(HomeScreen.headerTitle).toHaveText('Werkzaamheden')
})

Given(/ik ben op het project detailscherm/, async () => {
  await HomeScreen.getHomeScreen()
  await HomeScreen.homeConstructionWorkModuleButton.click()
  await expect(HomeScreen.headerTitle).toHaveText('Werkzaamheden')
  await ConstructionWorkScreen.constructionWorkSearchFieldButton.click()
  await expect(ConstructionWorkScreen.headerTitle).toHaveText('Zoek in werkzaamheden')
  await ConstructionWorkScreen.constructionWorkProjectsTextSearchField.addValue("Amstel III")
  await gestures.hitEnter()
  await ConstructionWorkScreen.constructionWorkAmstelIIIProjectCard.click()
  await expect(HomeScreen.headerTitle).toHaveText('Amstel III')
})

Given(/^ik gebruik 'Mijn locatie' met de permissie 'tijdens' bij werkzaamheden/, async () => {
  await driver.setGeoLocation({ latitude: 52.363114, longitude: 4.907245, altitude: 0 })
  await ConstructionWorkScreen.constructionWorkRequestLocationButton.waitForDisplayed(5000)
  await ConstructionWorkScreen.constructionWorkRequestLocationButton.click()
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

Given(/^ik gebruik 'Mijn locatie' met de permissie 'altijd vragen' bij werkzaamheden/, async () => {
  await driver.setGeoLocation({ latitude: 52.363114, longitude: 4.907245, altitude: 0 })
  await ConstructionWorkScreen.constructionWorkRequestLocationButton.waitForDisplayed(5000)
  await ConstructionWorkScreen.constructionWorkRequestLocationButton.click()
  await ProfileScreen.bottomSheetSelectLocationButton.waitForDisplayed(5000)
  await ProfileScreen.bottomSheetSelectLocationButton.click()
  await PermissionsScreen.androidAllowOnlyThisTimeButton.click()
  await driver.pause(5000)
  console.log(await driver.getGeoLocation())
  await expect(ProfileScreen.bottomSheetSelectLocationButtonText).toHaveText('In de buurt van Weesperstraat 113')
  await ProfileScreen.bottomSheetSelectLocationButton.click()
  await driver.pause(2000)
  //Deny location
  // await PermissionsScreen.androidAllowDontAllowButton.click()
  // await expect(shareLocationScreen.headerTitle).toHaveText('Locatie delen')
  // await ProfileScreen.bottomSheetSelectLocationButton.click()
})

Given(/^ik geef geen toestemming om 'Mijn locatie' te delen bij werkzaamheden/, async () => {
  //await driver.setGeoLocation({ latitude: 52.363114, longitude: 4.907245, altitude: 0 })
  await ConstructionWorkScreen.constructionWorkRequestLocationButton.waitForDisplayed(5000)
  await ConstructionWorkScreen.constructionWorkRequestLocationButton.click()
  await ProfileScreen.bottomSheetSelectLocationButton.waitForDisplayed(5000)
  await ProfileScreen.bottomSheetSelectLocationButton.click()
  await PermissionsScreen.androidAllowDontAllowButton.click()
  await driver.pause(5000)
  //console.log(await driver.getGeoLocation())
  //await expect(ProfileScreen.bottomSheetSelectLocationButtonText).toHaveText('In de buurt van Weesperstraat 113')
  //await ProfileScreen.bottomSheetSelectLocationButton.click()
  //await driver.pause(2000)
})

//When
When(/ik open de Werkzaamheden module/, async () => {
  await HomeScreen.homeConstructionWorkModuleButton.click()
  await expect(HomeScreen.headerTitle).toHaveText('Werkzaamheden')
})

When(/ik volg het project 'Stedelijk Noord'/, async () => {
  await gestures.checkProjectDisplayedWithScrollDownAndClick(ConstructionWorkScreen.constructionWorkStedelijkNoordProjectCard, 40)
  await expect(ConstructionWorkScreen.headerTitle).toHaveText('Stedelijk Noord')
  await ConstructionWorkScreen.constructionWorkProjectFollowButton.click()
  const OS = await driver.capabilities.platformName
  if (OS === 'iOS') {
    await notificationsScreen.allowSelector.click()
    if (await notificationsScreen.allowSelector.isDisplayed()) {
      await notificationsScreen.allowSelector.click()
    }
  }
  else {
    //Only works this way, not if you import the selector from the screenobject
    const allowButton = helpers.createSelector('com.android.permissioncontroller:id/permission_allow_button')
    //check if device is emulator or real device
    //if (helpers.isEmulator()) {
    if (await allowButton.isDisplayed()) {
      await allowButton.click()
    }
  }
  await driver.pause(2000)
})

When(/ik ontvolg het project 'Stedelijk Noord'/, async () => {
  await ConstructionWorkScreen.constructionWorkStedelijkNoordProjectCard.click()
  await expect(ConstructionWorkScreen.headerTitle).toHaveText('Stedelijk Noord')
  await ConstructionWorkScreen.constructionWorkProjectFollowButton.click()
  await driver.pause(2000)
})

When(/ik zoek op 'Amsterdam'/, async () => {
  await ConstructionWorkScreen.constructionWorkSearchFieldButton.click()
  await expect(ConstructionWorkScreen.headerTitle).toHaveText('Zoek in werkzaamheden')
  await ConstructionWorkScreen.constructionWorkProjectsTextSearchField.addValue("Amsterdam")
  await gestures.hitEnter()
})

When(/ik zoek op 'jfklds'/, async () => {
  await ConstructionWorkScreen.constructionWorkSearchFieldButton.click()
  await expect(ConstructionWorkScreen.headerTitle).toHaveText('Zoek in werkzaamheden')
  await ConstructionWorkScreen.constructionWorkProjectsTextSearchField.addValue("jfklds")
  await gestures.hitEnter()
})

When(/ik bekijk het project 'Corantijnstraat'/, async () => {
  await ConstructionWorkScreen.constructionWorkSearchFieldButton.click()
  await expect(ConstructionWorkScreen.headerTitle).toHaveText('Zoek in werkzaamheden')
  await ConstructionWorkScreen.constructionWorkProjectsTextSearchField.waitForDisplayed(3000)
  await ConstructionWorkScreen.constructionWorkProjectsTextSearchField.addValue("Corantijnstraat")
  await gestures.hitEnter()
  await ConstructionWorkScreen.constructionWorkCorantijnstraatProjectCard.waitForDisplayed(3000)
  await ConstructionWorkScreen.constructionWorkCorantijnstraatProjectCard.click()
})

When(/ik klik op de subpagina (.*)$/, async subpagina => {
  await ConstructionWorkScreen.tapSubPage(subpagina)
})

Then(/het project krijgt de status 'volgend'/, async () => {
  const OS = await driver.capabilities.platformName
  //iOS 
  if (OS === 'iOS') {
    const attribute = await ConstructionWorkScreen.constructionWorkProjectFollowButton.getAttribute("label");
    console.log(await attribute)
    await expect(await attribute).toEqual('Ontvolg dit project')
    await ConstructionWorkScreen.headerBackButton.click()
    await gestures.checkProjectDisplayedWithScrollUp(ConstructionWorkScreen.constructionWorkStedelijkNoordProjectCard, 40)
    const projectCardLabel = await ConstructionWorkScreen.constructionWorkStedelijkNoordProjectCard.getAttribute("label")
    console.log(await projectCardLabel)
    console.log(typeof await projectCardLabel)
    // Define the expected values
    const expectedValues = ['Volgend', 'Berichten', 'Bericht'];
    // Check if the element text contains any of the expected values
    const containsExpectedValue = expectedValues.some(value => projectCardLabel.includes(value));
    chai.assert.isTrue(containsExpectedValue, 'The project card label contains "Volgend", "Berichten" or "Bericht"');
  }
  //Android:
  else {
    await expect(ConstructionWorkScreen.constructionWorkProjectFollowButtonLabel).toHaveText('Volgend')
    await ConstructionWorkScreen.headerBackButton.click()
    await gestures.checkProjectDisplayedWithScrollUp(ConstructionWorkScreen.constructionWorkStedelijkNoordProjectCard, 40)
    //await expect(ConstructionWorkScreen.constructionWorkProjectFollowingTraitLabel).toHaveText('Volgend')
    const projectCardLabel = await ConstructionWorkScreen.constructionWorkStedelijkNoordProjectCard.getAttribute("contentDescription")
    console.log(await projectCardLabel)
    console.log(typeof await projectCardLabel)
    // Define the expected values
    const expectedValues = ['Volgend', 'Berichten'];
    // Check if the element text contains any of the expected values
    const containsExpectedValue = expectedValues.some(value => projectCardLabel.includes(value));
    chai.assert.isTrue(containsExpectedValue, 'The project card label contains "Volgend" or "Berichten"');
  }
})

Then(/de status 'volgend' verdwijnt/, async () => {
  const OS = await driver.capabilities.platformName
  //iOS 
  if (OS === 'iOS') {
    const attribute = await ConstructionWorkScreen.constructionWorkProjectFollowButton.getAttribute("label");
    console.log(await attribute)
    await expect(attribute).toEqual('Volg dit project')
    await ConstructionWorkScreen.headerBackButton.click()
    await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.constructionWorkStedelijkNoordProjectCard, 30)
    const projectCardLabel = await ConstructionWorkScreen.constructionWorkStedelijkNoordProjectCard.getAttribute("label")
    await expect(projectCardLabel).not.toExist()
  }
  //Android:
  else {
    await expect(ConstructionWorkScreen.constructionWorkProjectFollowButtonLabel).toHaveText('Volgen')
    await ConstructionWorkScreen.headerBackButton.click()
    await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.constructionWorkStedelijkNoordProjectCard, 30)
    await expect(ConstructionWorkScreen.constructionWorkProjectFollowingTraitLabel).not.toExist()
  }
})

Then(/krijg ik de juiste zoekresultaten in het 'Zoek in werkzaamheden' scherm/, async () => {
  await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark, 4)
  await gestures.swipeDown()
  await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.constructionWorkFoodCenterAmsterdamProjectCard, 4)
  await gestures.swipeDown()
  await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.constructionWorkAmsterdamZuidoostProjectCard, 4)
  await gestures.swipeDown()
  await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.constructionWorkCentrumgebiedAmsterdamNoordProjectCard, 4)
  await gestures.swipeDown()
  await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.constructionWorkAmsterdamseBosProjectCard, 4)
  await gestures.swipeDown()
  await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.constructionWorkCardProjectCentrumeiland, 4)
  await gestures.swipeDown()
  await gestures.checkProjectDisplayedWithScrollDown(ConstructionWorkScreen.constructionWorkHaarlemmermeerProjectCard, 4)
})

Then(/ik zie een melding dat er geen zoekresulaten zijn/, async () => {
  await expect(ConstructionWorkScreen.constructionWorkListEmptyMessage).toBeDisplayed()
})

Then(/ik zie de projectdetailpagina van project 'Corantijnstraat'/, async () => {
  await expect(ConstructionWorkScreen.headerTitle).toHaveText('Corantijnstraat')
  await expect(ConstructionWorkScreen.constructionWorkProjectTitle).toBeDisplayed()
  await expect(ConstructionWorkScreen.constructionWorkProjectFollowButton).toBeDisplayed()
  await expect(ConstructionWorkScreen.constructionWorkProjectAboutButton).toBeDisplayed()
  await expect(ConstructionWorkScreen.constructionWorkProjectPlanningButton).toBeDisplayed()
  await expect(ConstructionWorkScreen.constructionWorkProjectContactButton).toBeDisplayed()
})

Then(/ik zie het juiste adres in het werkzaamhedenscherm/, async () => {
  await expect(ConstructionWorkScreen.constructionWorkChangeLocationButtonText).toHaveText('In de buurt van Weesperstraat 113')
})

//Then - eyes
Then(/ik zie het Werkzaamheden scherm - eyes/, async () => {
  const runner = new ClassicRunner()
  const eyes = new Eyes(runner)
  await eyes.open(driver, "Amsterdam App", "De Werkzaamheden module raadplegen")
  await eyes.check()
  await eyes.close()
  await eyes.abortIfNotClosed()
})

Then(/ik zie de (.*) van het projectdetailscherm - eyes/, async subpagina => {
  const runner = new ClassicRunner()
  const eyes = new Eyes(runner)
  await eyes.open(driver, "Amsterdam App", `Projectdetails bekijken van project 'Corantijnstraat' met subpagina: ${subpagina}`)
  await eyes.check()
  await eyes.close()
  await eyes.abortIfNotClosed()
})


//Then - percy
Then(/ik zie het Werkzaamheden scherm - percy/, async () => {
  await percyScreenshot('Werkzaamheden')
})

Then(/ik zie de subpagina (.*) van het projectdetailscherm - percy/, async subpagina => {
  await percyScreenshot(`ik zie de subpagina ${subpagina} van het projectdetailscherm`, { fullPage: true, screenLengths: 8 })
})








