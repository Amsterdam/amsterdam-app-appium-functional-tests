import {Given, Then, When} from '@wdio/cucumber-framework'
import * as chai from 'chai'
import gestures from '../Shared/helpers/gestures.ts'
import {openDeepLinkUrl} from '../Shared/helpers/openDeeplink.ts'
import {image} from '../features/functional/testdata/img.ts'
import {titleText} from '../features/functional/testdata/pushberichten.ts'
import constructionWorkScreen from '../screenobjects/construction-work.screen.ts'
import homeScreen from '../screenobjects/home.screen.ts'
import notificationsScreen from '../screenobjects/notifications.screen.ts'

const bearerToken = process.env.BEARER_TOKEN
const url = `amsterdam://construction-work-editor/${bearerToken}`
// const url = 'amsterdam://construction-work-editor'
let titleMessage: string
// @ts-ignore
const OS = driver.capabilities.platformName

Given(
  /ik ben OM\/CA en heb een plaats berichten module in de app/,
  async () => {
    const platformVersion = await driver.execute('mobile:deviceInfo')
    console.log(platformVersion)
    await homeScreen.homeAboutModuleButton.waitForDisplayed()
    if (OS === 'iOS') {
      await driver.executeScript('mobile: backgroundApp', [{seconds: 3}])
      await openDeepLinkUrl(url)
      await driver.pause(5000)
      const contexts = await driver.getContexts()
      console.log(contexts)
      await notificationsScreen.allowNotifications()
    } else {
      await driver.execute('mobile:deepLink', {
        url,
        package: 'nl.amsterdam.app.dev',
      })
      await notificationsScreen.allowNotifications()
    }
    await notificationsScreen.headerTitle.waitForDisplayed({timeout: 10000})
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.waitForExist(
      {timeout: 3000},
    )
    //await expect(notificationsScreen.successMessage).toBeDisplayed()
    await homeScreen.headerBackButton.click()
    await expect(
      homeScreen.HomeConstructionWorkEditorModuleButton,
    ).toBeDisplayed()
    await homeScreen.HomeConstructionWorkEditorModuleButton.click()
    await notificationsScreen.headerTitle.waitForDisplayed({timeout: 3000})
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.waitForExist(
      {timeout: 3000},
    )
  },
)

When(
  /^ik plaats een bericht zonder pushbericht, zonder foto, voor project Sluisbuurt op Zeeburgereiland$/,
  async () => {
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.click()
    await expect(notificationsScreen.headerTitle).toHaveTextContaining([
      'Sluisbuurt op Zeeburgereiland',
      'Sluisb…Zeeburgereiland',
    ])
    const {title, text} = titleText(0)
    titleMessage = title
    await notificationsScreen.createMessageNoPhoto(title, text)
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(
      notificationsScreen.constructionWorkEditorCreateMessageSubmitButton,
      4,
    )
    await notificationsScreen.constructionWorkEditorCreateMessageSubmitButton.click()
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.waitForDisplayed()
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
    // await expect(notificationsScreen.successMessageAlert).toBeDisplayed()
  },
)

When(
  /^ik plaats een bericht met pushbericht, zonder foto, voor project Sluisbuurt op Zeeburgereiland$/,
  async () => {
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.click()
    await expect(notificationsScreen.headerTitle).toHaveTextContaining([
      'Sluisbuurt op Zeeburgereiland',
      'Sluisb…Zeeburgereiland',
    ])
    const {title, text} = titleText(1)
    titleMessage = title
    await notificationsScreen.createMessageNoPhoto(title, text)
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(
      notificationsScreen.constructionWorkEditorCreateMessageSendPushNotificationCheckbox,
      4,
    )
    await notificationsScreen.constructionWorkEditorCreateMessageSendPushNotificationCheckbox.click()
    await notificationsScreen.constructionWorkEditorCreateMessageSubmitButton.click()
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.waitForDisplayed()
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
    // await expect(notificationsScreen.successMessageAlert).toBeDisplayed()
  },
)

When(
  /^ik plaats een bericht zonder pushbericht, met foto middels de foto toevoegen knop, voor project Sluisbuurt op Zeeburgereiland$/,
  async () => {
    //TO DO: find out the correct path for iOS to push the image to. On hold now, as there are already images on the devices that can be selected.
    if (OS === 'Android') {
      await driver.pushFile('/sdcard/Download/image.jpg', image)
    } else {
      //await driver.pushFile('@com.apple.mobileslideshow/image.jpg', image)
    }
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.click()
    await expect(notificationsScreen.headerTitle).toHaveTextContaining([
      'Sluisbuurt op Zeeburgereiland',
      'Sluisb…Zeeburgereiland',
    ])
    const {title, text} = titleText(2)
    titleMessage = title
    await notificationsScreen.createMessagePhoto(title, text)
    if (OS === 'Android') {
      await notificationsScreen.addPhotoAndroid()
    } else {
      await notificationsScreen.addPhotoiOS()
    }
    await notificationsScreen.constructionWorkEditorCreateMessageSubmitButton.click()
    //Deze faalt vanwege een 403 error bij post image: bug 93577
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.waitForDisplayed()
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
    // await expect(notificationsScreen.successMessageAlert).toBeDisplayed()
  },
)

When(
  /^ik plaats een bericht met pushbericht, met foto middels de foto toevoegen knop, voor project Sluisbuurt op Zeeburgereiland$/,
  async () => {
    //TO DO: find out the correct path for iOS to push the image to. On hold now, as there are already images on the devices that can be selected.
    if (OS === 'Android') {
      await driver.pushFile('/sdcard/Download/image.jpg', image)
    } else {
      //await driver.pushFile('@com.apple.mobileslideshow/image.jpg', image)
    }
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.click()
    await expect(notificationsScreen.headerTitle).toHaveTextContaining([
      'Sluisbuurt op Zeeburgereiland',
      'Sluisb…Zeeburgereiland',
    ])
    const {title, text} = titleText(3)
    titleMessage = title
    await notificationsScreen.createMessagePhoto(title, text)
    if (OS === 'Android') {
      await notificationsScreen.addPhotoAndroid()
    } else {
      await notificationsScreen.addPhotoiOS()
    }
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(
      notificationsScreen.constructionWorkEditorCreateMessageSendPushNotificationCheckbox,
      4,
    )
    await notificationsScreen.constructionWorkEditorCreateMessageSendPushNotificationCheckbox.click()
    await notificationsScreen.constructionWorkEditorCreateMessageSubmitButton.click()
    await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.waitForDisplayed()
    await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
    // await expect(notificationsScreen.successMessageAlert).toBeDisplayed()
  },
)

Then(/de plaats berichten module is geactiveerd/, async () => {
  // await driver.switchContext('NATIVE_APP')
  await notificationsScreen.headerTitle.waitForDisplayed({timeout: 3000})
  await expect(notificationsScreen.headerTitle).toHaveText('Plaats berichten')
  await notificationsScreen.projectCardPlaatsBerichtenSluisbuurt.waitForExist({
    timeout: 3000,
  })
  await expect(notificationsScreen.successMessage).toBeDisplayed()
  await homeScreen.headerBackButton.click()
  await expect(
    homeScreen.HomeConstructionWorkEditorModuleButton,
  ).toBeDisplayed()
})

Then(
  /^mijn bericht wordt getoond in het nieuwsoverzicht van project Sluisbuurt op Zeeburgereiland$/,
  async () => {
    await notificationsScreen.headerBackButton.click()
    await homeScreen.homeConstructionWorkModuleButton.waitForDisplayed({
      timeout: 2000,
    })
    await homeScreen.homeConstructionWorkModuleButton.click()
    await constructionWorkScreen.constructionWorkSearchFieldButton.click()
    await expect(constructionWorkScreen.headerTitle).toHaveText(
      'Zoek in werkzaamheden',
    )
    await constructionWorkScreen.constructionWorkProjectsTextSearchField.addValue(
      'Sluisbuurt op Zeeburgereiland',
    )
    await gestures.hitEnter()
    await constructionWorkScreen.constructionWorkSluisbuurtOpZeeburgereilandProjectCard.waitForDisplayed(
      {timeout: 15000},
    )
    console.log(await titleMessage)
    await constructionWorkScreen.constructionWorkSluisbuurtOpZeeburgereilandProjectCard.click()
    await driver.pause(2000)
    await gestures.swipeUpSlowFraction()
    const expectedLabel =
      await constructionWorkScreen.ConstructionWorkProjectArticlePreviewTitle(
        titleMessage,
      )
    if (OS === 'iOS') {
      const actualLabel =
        await constructionWorkScreen.constructionWorkProjectArticlePreviewButton.getAttribute(
          'label',
        )
      chai.expect(actualLabel).to.equal(expectedLabel)
    } else {
      const actualLabel =
        await constructionWorkScreen.constructionWorkProjectArticlePreviewButton.getAttribute(
          'content-desc',
        )
      chai.expect(actualLabel).to.equal(expectedLabel)
    }
  },
)
