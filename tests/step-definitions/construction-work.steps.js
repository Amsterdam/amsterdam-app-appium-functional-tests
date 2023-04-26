import percyScreenshot from '@percy/appium-app';
import { Given, Then, When } from '@wdio/cucumber-framework';
import gestures from '../Shared/helpers/gestures.js';
import constructionWorkScreen from '../screenobjects/construction-work.screen.js';
import HomeScreen from '../screenobjects/home.screen.js';

//Given
Given(/ik ben op het werkzaamheden scherm/, async () => {
  await driver.launchApp()
  await HomeScreen.getHomeScreen()
  await HomeScreen.homeConstructionWorkModuleButton.click()
  await expect(HomeScreen.headerTitle).toHaveText('Werkzaamheden')
})

//When
When(/ik open de Werkzaamheden module/, async () => {
  await HomeScreen.homeConstructionWorkModuleButton.click()
  await expect(HomeScreen.headerTitle).toHaveText('Werkzaamheden')
})

When(/ik volg het project 'Amsterdam Science Park'/, async () => {
  await gestures.checkProjectDisplayedWithScrollDownAndClick(constructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark, 14)
  await expect(constructionWorkScreen.headerTitle).toHaveText('Amsterdam Science Park')
  await constructionWorkScreen.constructionWorkProjectFollowButton.click()
})

When(/ik ontvolg het project 'Amsterdam Science Park'/, async () => {
  await constructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark.click()
  await expect(constructionWorkScreen.headerTitle).toHaveText('Amsterdam Science Park')
  await constructionWorkScreen.constructionWorkProjectFollowButton.click()
})

When(/ik zoek op 'Amsterdam'/, async () => {
  await constructionWorkScreen.constructionWorkProjectsNavigatorSearchField.click()
  await expect(constructionWorkScreen.headerTitle).toHaveText('Zoek in werkzaamheden')
  await constructionWorkScreen.constructionWorkProjectsTextSearchField.addValue("Amsterdam")
  await gestures.hitEnter()
})

When(/ik zoek op 'jfklds'/, async () => {
  await constructionWorkScreen.constructionWorkProjectsNavigatorSearchField.click()
  await expect(constructionWorkScreen.headerTitle).toHaveText('Zoek in werkzaamheden')
  await constructionWorkScreen.constructionWorkProjectsTextSearchField.addValue("jfklds")
  await gestures.hitEnter()
})

//Then - functional
Then(/het project krijgt de status 'volgend'/, async () => {
  const OS = await driver.capabilities.platformName
  //iOS 
  if (OS === 'iOS') {
    const attribute = await constructionWorkScreen.constructionWorkProjectFollowButton.getAttribute("label");
    console.log(await attribute)
    await expect(attribute).toEqual('Volgend')
    await constructionWorkScreen.headerBackButton.click()
    await gestures.checkProjectDisplayedWithScrollUp(constructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark, 7)
    const projectCardLabel = await constructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark.getAttribute("label")
    console.log(await projectCardLabel)
    await expect(projectCardLabel).toContain('Amsterdam Science Park, Gebiedsontwikkeling, Volgend')
  }
  //Android:
  else {
    await expect(constructionWorkScreen.constructionWorkProjectFollowButtonLabel).toHaveText('Volgend')
    await constructionWorkScreen.headerBackButton.click()
    await gestures.checkProjectDisplayedWithScrollUp(constructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark, 14)
    await expect(constructionWorkScreen.constructionWorkProjectFollowingTraitLabel).toHaveText('Volgend')
  }
})

Then(/de status 'volgend' verdwijnt/, async () => {
  const OS = await driver.capabilities.platformName
  //iOS 
  if (OS === 'iOS') {
    const attribute = await constructionWorkScreen.constructionWorkProjectFollowButton.getAttribute("label");
    console.log(await attribute)
    await expect(attribute).toEqual('Volgen')
    await constructionWorkScreen.headerBackButton.click()
    await gestures.checkProjectDisplayedWithScrollDown(constructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark, 14)
    const projectCardLabel = await constructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark.getAttribute("label")
    await expect(projectCardLabel).not.toExist()
  }
  //Android:
  else {
    await expect(constructionWorkScreen.constructionWorkProjectFollowButtonLabel).toHaveText('Volgen')
    await constructionWorkScreen.headerBackButton.click()
    await gestures.checkProjectDisplayedWithScrollDown(constructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark, 14)
    await expect(constructionWorkScreen.constructionWorkProjectFollowingTraitLabel).not.toExist()
  }
})

Then(/krijg ik de juiste zoekresultaten/, async () => {
  await gestures.checkProjectDisplayedWithScrollDownSlow(constructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark, 4)
  //await gestures.checkProjectDisplayedWithScrollDown(constructionWorkScreen.constructionWorkCardProjectDijksgrachtOost, 4)
  await gestures.checkProjectDisplayedWithScrollDownSlow(constructionWorkScreen.constructionWorkAmsterdamZuidoostProjectCard, 4)
  await gestures.checkProjectDisplayedWithScrollDownSlow(constructionWorkScreen.constructionWorkFoodCenterAmsterdamProjectCard, 4)
  await gestures.checkProjectDisplayedWithScrollDownSlow(constructionWorkScreen.constructionWorkCentrumgebiedAmsterdamNoordProjectCard, 4)
  await gestures.checkProjectDisplayedWithScrollDownSlow(constructionWorkScreen.ConstructionWorkAmsterdamseBosProjectCard, 4)
  await gestures.checkProjectDisplayedWithScrollDownSlow(constructionWorkScreen.ConstructionWorkDeEntreeProjectCard, 4)
  await gestures.checkProjectDisplayedWithScrollDownSlow(constructionWorkScreen.ConstructionWorkCardProjectCentrumeiland, 4)
})

Then(/ik zie een melding dat er geen zoekresulaten zijn/, async () => {
  await expect(constructionWorkScreen.ConstructionWorkListEmptyMessage).toBeDisplayed()
})

//Then - percy
Then(/ik zie het Werkzaamheden scherm - percy/, async () => {
  await percyScreenshot('Werkzaamheden')
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








