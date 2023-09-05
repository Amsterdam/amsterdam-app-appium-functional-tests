import { ClassicRunner, Eyes } from '@applitools/eyes-webdriverio';
import percyScreenshot from '@percy/appium-app';
import { Given, Then, When } from '@wdio/cucumber-framework';
import chai from 'chai';
import gestures from '../Shared/helpers/gestures.js';
import ConstructionWorkScreen from '../screenobjects/construction-work.screen.js';
import HomeScreen from '../screenobjects/home.screen.js';
import notificationsScreen from '../screenobjects/notifications.screen.js';


//Given
Given(/ik ben op het werkzaamheden scherm/, async () => {
  await HomeScreen.getHomeScreen()
  await HomeScreen.homeConstructionWorkModuleButton.click()
  await expect(HomeScreen.headerTitle).toHaveText('Werkzaamheden')
})

//When
When(/ik open de Werkzaamheden module/, async () => {
  await HomeScreen.homeConstructionWorkModuleButton.click()
  await expect(HomeScreen.headerTitle).toHaveText('Werkzaamheden')
})

When(/ik volg het project 'Houthaven'/, async () => {
  await gestures.checkProjectDisplayedWithScrollDownAndClick(ConstructionWorkScreen.constructionWorkHouthavenProjectCard, 30)
  await expect(ConstructionWorkScreen.headerTitle).toHaveText('Houthaven')
  await ConstructionWorkScreen.constructionWorkProjectFollowButton.click()
  const OS = await driver.capabilities.platformName
  if (OS === 'iOS') {
    await notificationsScreen.allowSelector.click()
  }
  await driver.pause(2000)
})

When(/ik ontvolg het project 'Houthaven'/, async () => {
  await ConstructionWorkScreen.constructionWorkHouthavenProjectCard.click()
  await expect(ConstructionWorkScreen.headerTitle).toHaveText('Houthaven')
  await ConstructionWorkScreen.constructionWorkProjectFollowButton.click()
  await driver.pause(2000)
})

When(/ik zoek op 'Amsterdam'/, async () => {
  await ConstructionWorkScreen.constructionWorkProjectsNavigatorSearchField.click()
  await expect(ConstructionWorkScreen.headerTitle).toHaveText('Zoek in werkzaamheden')
  await ConstructionWorkScreen.constructionWorkProjectsTextSearchField.addValue("Amsterdam")
  await gestures.hitEnter()
})

When(/ik zoek op 'jfklds'/, async () => {
  await ConstructionWorkScreen.constructionWorkProjectsNavigatorSearchField.click()
  await expect(ConstructionWorkScreen.headerTitle).toHaveText('Zoek in werkzaamheden')
  await ConstructionWorkScreen.constructionWorkProjectsTextSearchField.addValue("jfklds")
  await gestures.hitEnter()
})

When(/ik bekijk het project 'Corantijnstraat'/, async () => {
  await ConstructionWorkScreen.constructionWorkProjectsNavigatorSearchField.click()
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
    await gestures.checkProjectDisplayedWithScrollUp(ConstructionWorkScreen.constructionWorkHouthavenProjectCard, 30)
    const projectCardLabel = await ConstructionWorkScreen.constructionWorkHouthavenProjectCard.getAttribute("label")
    console.log(await projectCardLabel)
    console.log(typeof await projectCardLabel)
    // Define the expected values
    const expectedValues = ['Volgend', 'Berichten'];
    // Check if the element text contains any of the expected values
    const containsExpectedValue = expectedValues.some(value => projectCardLabel.includes(value));
    chai.assert.isTrue(containsExpectedValue, 'The project card label contains "Volgend" or "Berichten"');
  }
  //Android:
  else {
    await expect(ConstructionWorkScreen.constructionWorkProjectFollowButtonLabel).toHaveText('Volgend')
    await ConstructionWorkScreen.headerBackButton.click()
    await gestures.checkProjectDisplayedWithScrollUp(ConstructionWorkScreen.constructionWorkHouthavenProjectCard, 30)
    //await expect(ConstructionWorkScreen.constructionWorkProjectFollowingTraitLabel).toHaveText('Volgend')
    const projectCardLabel = await ConstructionWorkScreen.constructionWorkHouthavenProjectCard.getAttribute("contentDescription")
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
    await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.constructionWorkHouthavenProjectCard, 30)
    const projectCardLabel = await ConstructionWorkScreen.constructionWorkHouthavenProjectCard.getAttribute("label")
    await expect(projectCardLabel).not.toExist()
  }
  //Android:
  else {
    await expect(ConstructionWorkScreen.constructionWorkProjectFollowButtonLabel).toHaveText('Volgen')
    await ConstructionWorkScreen.headerBackButton.click()
    await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.constructionWorkHouthavenProjectCard, 30)
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
  await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.constructionWorkDeEntreeProjectCard, 4)
  await gestures.swipeDown()
  await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.constructionWorkCardProjectCentrumeiland, 4)
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








