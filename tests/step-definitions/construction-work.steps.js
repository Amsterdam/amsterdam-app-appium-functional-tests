import { ClassicRunner, Eyes } from '@applitools/eyes-webdriverio';
import percyScreenshot from '@percy/appium-app';
import { Given, Then, When } from '@wdio/cucumber-framework';
import gestures from '../Shared/helpers/gestures.js';
import ConstructionWorkScreen from '../screenobjects/construction-work.screen.js';
import HomeScreen from '../screenobjects/home.screen.js';

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

When(/ik volg het project 'Amsterdam Science Park'/, async () => {
  await gestures.checkProjectDisplayedWithScrollDownAndClick(ConstructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark, 14)
  await expect(ConstructionWorkScreen.headerTitle).toHaveText('Amsterdam Science Park')
  await ConstructionWorkScreen.constructionWorkProjectFollowButton.click()
})

When(/ik ontvolg het project 'Amsterdam Science Park'/, async () => {
  await ConstructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark.click()
  await expect(ConstructionWorkScreen.headerTitle).toHaveText('Amsterdam Science Park')
  await ConstructionWorkScreen.constructionWorkProjectFollowButton.click()
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

//Then - functional
Then(/het project krijgt de status 'volgend'/, async () => {
  const OS = await driver.capabilities.platformName
  //iOS 
  if (OS === 'iOS') {
    const attribute = await ConstructionWorkScreen.constructionWorkProjectFollowButton.getAttribute("label");
    console.log(await attribute)
    await expect(attribute).toEqual('Volgend')
    await ConstructionWorkScreen.headerBackButton.click()
    await gestures.checkProjectDisplayedWithScrollUp(ConstructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark, 7)
    const projectCardLabel = await ConstructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark.getAttribute("label")
    console.log(await projectCardLabel)
    await expect(projectCardLabel).toContain('Amsterdam Science Park, Gebiedsontwikkeling, Volgend')
  }
  //Android:
  else {
    await expect(ConstructionWorkScreen.constructionWorkProjectFollowButtonLabel).toHaveText('Volgend')
    await ConstructionWorkScreen.headerBackButton.click()
    await gestures.checkProjectDisplayedWithScrollUp(ConstructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark, 14)
    await expect(ConstructionWorkScreen.constructionWorkProjectFollowingTraitLabel).toHaveText('Volgend')
  }
})

Then(/de status 'volgend' verdwijnt/, async () => {
  const OS = await driver.capabilities.platformName
  //iOS 
  if (OS === 'iOS') {
    const attribute = await ConstructionWorkScreen.constructionWorkProjectFollowButton.getAttribute("label");
    console.log(await attribute)
    await expect(attribute).toEqual('Volgen')
    await ConstructionWorkScreen.headerBackButton.click()
    await gestures.checkProjectDisplayedWithScrollDown(ConstructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark, 14)
    const projectCardLabel = await ConstructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark.getAttribute("label")
    await expect(projectCardLabel).not.toExist()
  }
  //Android:
  else {
    await expect(ConstructionWorkScreen.constructionWorkProjectFollowButtonLabel).toHaveText('Volgen')
    await ConstructionWorkScreen.headerBackButton.click()
    await gestures.checkProjectDisplayedWithScrollDown(ConstructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark, 14)
    await expect(ConstructionWorkScreen.constructionWorkProjectFollowingTraitLabel).not.toExist()
  }
})

Then(/krijg ik de juiste zoekresultaten in het 'Zoek in werkzaamheden' scherm/, async () => {
  await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.constructionWorkFoodCenterAmsterdamProjectCard, 4)
  await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark, 4)
  //await gestures.checkProjectDisplayedWithScrollDown(ConstructionWorkScreen.constructionWorkCardProjectDijksgrachtOost, 4)
  await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.constructionWorkAmsterdamZuidoostProjectCard, 4)
  await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.constructionWorkCentrumgebiedAmsterdamNoordProjectCard, 4)
  await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.ConstructionWorkAmsterdamseBosProjectCard, 4)
  await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.ConstructionWorkDeEntreeProjectCard, 4)
  await gestures.checkProjectDisplayedWithScrollDownSlow(ConstructionWorkScreen.ConstructionWorkCardProjectCentrumeiland, 4)
})

Then(/ik zie een melding dat er geen zoekresulaten zijn/, async () => {
  await expect(ConstructionWorkScreen.ConstructionWorkListEmptyMessage).toBeDisplayed()
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

//Then - percy
Then(/ik zie het Werkzaamheden scherm - percy/, async () => {
  await percyScreenshot('Werkzaamheden')
})






