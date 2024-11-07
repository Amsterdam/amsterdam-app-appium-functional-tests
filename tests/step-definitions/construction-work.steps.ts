import {Given, Then, When} from '@wdio/cucumber-framework'
import chai from 'chai'
import gestures from '../Shared/helpers/gestures.ts'
import helpers from '../Shared/helpers/helpers.ts'
import ConstructionWorkScreen from '../screenobjects/construction-work.screen.ts'
import HomeScreen from '../screenobjects/home.screen.ts'
import notificationsScreen from '../screenobjects/notifications.screen.ts'
import PermissionsScreen from '../screenobjects/permissions.screen.ts'
import ProfileScreen from '../screenobjects/profile.screen.ts'

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
  await expect(ConstructionWorkScreen.headerTitle).toHaveText(
    'Zoek in werkzaamheden',
  )
  await ConstructionWorkScreen.constructionWorkProjectsTextSearchField.addValue(
    'Amstel III',
  )
  await gestures.hitEnter()
  await ConstructionWorkScreen.constructionWorkAmstelIIIProjectCard.click()
  await expect(HomeScreen.headerTitle).toHaveText('Amstel III')
})

Given(
  /^ik gebruik 'Mijn locatie' met de permissie 'tijdens' bij werkzaamheden/,
  async () => {
    await driver.setGeoLocation({
      latitude: 52.363114,
      longitude: 4.907245,
      altitude: 0,
    })
    await ConstructionWorkScreen.constructionWorkRequestLocationButton.waitForDisplayed(
      {timeout: 5000},
    )
    await ConstructionWorkScreen.constructionWorkRequestLocationButton.click()
    await ProfileScreen.bottomSheetSelectLocationButton.waitForDisplayed({
      timeout: 5000,
    })
    await ProfileScreen.bottomSheetSelectLocationButton.click()
    await PermissionsScreen.androidAllowWhileUsingAppButton.click()
    await driver.pause(5000)
    await expect(ProfileScreen.bottomSheetSelectLocationButtonText).toHaveText(
      'In de buurt van Weesperstraat 113',
    )
    await ProfileScreen.bottomSheetSelectLocationButton.click()
    await driver.pause(2000)
    //Deny location
    // await PermissionsScreen.androidAllowDontAllowButton.click()
    // await expect(shareLocationScreen.headerTitle).toHaveText('Locatie delen')
    // await ProfileScreen.bottomSheetSelectLocationButton.click()
  },
)

Given(
  /^ik gebruik 'Mijn locatie' met de permissie 'altijd vragen' bij werkzaamheden/,
  async () => {
    await driver.setGeoLocation({
      latitude: 52.363114,
      longitude: 4.907245,
      altitude: 0,
    })
    await ConstructionWorkScreen.constructionWorkRequestLocationButton.waitForDisplayed(
      {timeout: 5000},
    )
    await ConstructionWorkScreen.constructionWorkRequestLocationButton.click()
    await ProfileScreen.bottomSheetSelectLocationButton.waitForDisplayed({
      timeout: 5000,
    })
    await ProfileScreen.bottomSheetSelectLocationButton.click()
    await PermissionsScreen.androidAllowOnlyThisTimeButton.click()
    await driver.pause(5000)
    console.log(await driver.getGeoLocation())
    await expect(ProfileScreen.bottomSheetSelectLocationButtonText).toHaveText(
      'In de buurt van Weesperstraat 113',
    )
    await ProfileScreen.bottomSheetSelectLocationButton.click()
    await driver.pause(2000)
    //Deny location
    // await PermissionsScreen.androidAllowDontAllowButton.click()
    // await expect(shareLocationScreen.headerTitle).toHaveText('Locatie delen')
    // await ProfileScreen.bottomSheetSelectLocationButton.click()
  },
)

Given(
  /^ik geef geen toestemming om 'Mijn locatie' te delen bij werkzaamheden/,
  async () => {
    //await driver.setGeoLocation({ latitude: 52.363114, longitude: 4.907245, altitude: 0 })
    await ConstructionWorkScreen.constructionWorkRequestLocationButton.waitForDisplayed(
      {timeout: 5000},
    )
    await ConstructionWorkScreen.constructionWorkRequestLocationButton.click()
    await ProfileScreen.bottomSheetSelectLocationButton.waitForDisplayed({
      timeout: 5000,
    })
    await ProfileScreen.bottomSheetSelectLocationButton.click()
    await PermissionsScreen.androidAllowDontAllowButton.click()
    await driver.pause(5000)
    //console.log(await driver.getGeoLocation())
    //await expect(ProfileScreen.bottomSheetSelectLocationButtonText).toHaveText('In de buurt van Weesperstraat 113')
    //await ProfileScreen.bottomSheetSelectLocationButton.click()
    //await driver.pause(2000)
  },
)

//When
When(/ik open de Werkzaamheden module/, async () => {
  await HomeScreen.homeConstructionWorkModuleButton.click()
  await expect(HomeScreen.headerTitle).toHaveText('Werkzaamheden')
})

When(/ik volg het project 'Stedelijk Noord'/, async () => {
  await gestures.checkProjectDisplayedWithScrollDownAndClick(
    ConstructionWorkScreen.constructionWorkStedelijkNoordProjectCard,
    40,
  )
  await expect(ConstructionWorkScreen.headerTitle).toHaveText('Stedelijk Noord')
  await ConstructionWorkScreen.constructionWorkProjectFollowButton.click()
  const OS = await driver.capabilities.platformName
  if (OS === 'iOS') {
    await notificationsScreen.allowSelector.click()
    if (await notificationsScreen.allowSelector.isDisplayed()) {
      await notificationsScreen.allowSelector.click()
    }
  } else {
    //Only works this way, not if you import the selector from the screenobject
    const allowButton = helpers.createSelector(
      'com.android.permissioncontroller:id/permission_allow_button',
    )
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
  await driver.pause(5000)
})

When(/ik zoek op 'Amsterdam'/, async () => {
  await ConstructionWorkScreen.searchProject('Amsterdam')
})

When(/ik zoek op 'jfklds'/, async () => {
  await ConstructionWorkScreen.searchProject('jfklds')
})

When(/ik bekijk het project 'Corantijnstraat'/, async () => {
  await ConstructionWorkScreen.searchProject('Corantijnstraat')
  await ConstructionWorkScreen.constructionWorkCorantijnstraatProjectCard.waitForDisplayed(
    {timeout: 3000},
  )
  await ConstructionWorkScreen.constructionWorkCorantijnstraatProjectCard.click()
})

When(/ik klik op de subpagina (.*)$/, async subpagina => {
  await ConstructionWorkScreen.tapSubPage(subpagina)
})

Then(/het project krijgt de status 'volgend'/, async () => {
  const OS = await driver.capabilities.platformName
  //iOS
  if (OS === 'iOS') {
    const attribute =
      await ConstructionWorkScreen.constructionWorkProjectFollowButton.getAttribute(
        'label',
      )
    console.log(attribute)
    await expect(attribute).toEqual('Ontvolg dit project')
    await ConstructionWorkScreen.headerBackButton.click()
    await gestures.checkProjectDisplayedWithScrollUp(
      ConstructionWorkScreen.constructionWorkStedelijkNoordProjectCard,
      40,
    )
    const projectCardLabel =
      await ConstructionWorkScreen.constructionWorkStedelijkNoordProjectCard.getAttribute(
        'label',
      )
    console.log(projectCardLabel)
    console.log(typeof projectCardLabel)
    // Define the expected values
    const expectedValues = ['Volgend', 'Berichten', 'Bericht']
    // Check if the element text contains any of the expected values
    const containsExpectedValue = expectedValues.some(value =>
      projectCardLabel.includes(value),
    )
    chai.assert.isTrue(
      containsExpectedValue,
      'The project card label contains "Volgend", "Berichten" or "Bericht"',
    )
  }
  //Android:
  else {
    await expect(
      ConstructionWorkScreen.constructionWorkProjectFollowButtonLabel,
    ).toHaveText('Volgend')
    await ConstructionWorkScreen.headerBackButton.click()
    await gestures.checkProjectDisplayedWithScrollUp(
      ConstructionWorkScreen.constructionWorkStedelijkNoordProjectCard,
      40,
    )
    //await expect(ConstructionWorkScreen.constructionWorkProjectFollowingTraitLabel).toHaveText('Volgend')
    const projectCardLabel =
      await ConstructionWorkScreen.constructionWorkStedelijkNoordProjectCard.getAttribute(
        'contentDescription',
      )
    console.log(projectCardLabel)
    console.log(typeof projectCardLabel)
    // Define the expected values
    const expectedValues = ['Volgend', 'Berichten']
    // Check if the element text contains any of the expected values
    const containsExpectedValue = expectedValues.some(value =>
      projectCardLabel.includes(value),
    )
    chai.assert.isTrue(
      containsExpectedValue,
      'The project card label contains "Volgend" or "Berichten"',
    )
  }
})

Then(/de status 'volgend' verdwijnt/, async () => {
  const OS = await driver.capabilities.platformName
  //iOS
  if (OS === 'iOS') {
    const attribute =
      await ConstructionWorkScreen.constructionWorkProjectFollowButton.getAttribute(
        'label',
      )
    console.log(attribute)
    await expect(attribute).toEqual('Volg dit project')
    await ConstructionWorkScreen.headerBackButton.click()
    await expect(
      ConstructionWorkScreen.constructionWorkStedelijkNoordProjectCard,
    ).not.toBeDisplayed()
  }
  //Android:
  else {
    await expect(
      ConstructionWorkScreen.constructionWorkProjectFollowButtonLabel,
    ).toHaveText('Volgen')
    await ConstructionWorkScreen.headerBackButton.click()
    await expect(
      ConstructionWorkScreen.constructionWorkStedelijkNoordProjectCard,
    ).not.toBeDisplayed()
  }
})

Then(
  /krijg ik de juiste zoekresultaten in het 'Zoek in werkzaamheden' scherm/,
  async () => {
    await gestures.checkProjectDisplayedWithScrollDownSlow(
      ConstructionWorkScreen.constructionWorkCardProjectAmsterdamSciencePark,
      4,
    )
    await gestures.swipeDown()
    await gestures.checkProjectDisplayedWithScrollDownSlow(
      ConstructionWorkScreen.constructionWorkFoodCenterAmsterdamProjectCard,
      4,
    )
    await gestures.swipeDown()
    await gestures.checkProjectDisplayedWithScrollDownSlow(
      ConstructionWorkScreen.constructionWorkCentrumgebiedAmsterdamNoordProjectCard,
      4,
    )
    await gestures.swipeDown()
    await gestures.checkProjectDisplayedWithScrollDownSlow(
      ConstructionWorkScreen.constructionWorkAmsterdamseBosProjectCard,
      4,
    )
    await gestures.swipeDown()
    await gestures.checkProjectDisplayedWithScrollDownSlow(
      ConstructionWorkScreen.constructionWorkCardProjectCentrumeiland,
      4,
    )
    await gestures.swipeDown()
    await gestures.checkProjectDisplayedWithScrollDown(
      ConstructionWorkScreen.constructionWorkHaarlemmermeerProjectCard,
      4,
    )
  },
)

Then(/ik zie een melding dat er geen zoekresulaten zijn/, async () => {
  await expect(
    ConstructionWorkScreen.constructionWorkListEmptyMessage,
  ).toBeDisplayed()
})

Then(
  /ik zie de projectdetailpagina van project 'Corantijnstraat'/,
  async () => {
    await expect(ConstructionWorkScreen.headerTitle).toHaveText(
      'Corantijnstraat',
    )
    await expect(
      ConstructionWorkScreen.constructionWorkProjectTitle,
    ).toBeDisplayed()
    await expect(
      ConstructionWorkScreen.constructionWorkProjectFollowButton,
    ).toBeDisplayed()
    await expect(
      ConstructionWorkScreen.constructionWorkProjectAboutButton,
    ).toBeDisplayed()
    await expect(
      ConstructionWorkScreen.constructionWorkProjectPlanningButton,
    ).toBeDisplayed()
    await expect(
      ConstructionWorkScreen.constructionWorkProjectContactButton,
    ).toBeDisplayed()
  },
)

Then(/ik zie het juiste adres in het werkzaamhedenscherm/, async () => {
  await expect(
    ConstructionWorkScreen.constructionWorkChangeLocationButtonText,
  ).toHaveText('In de buurt van Weesperstraat 113')
})
