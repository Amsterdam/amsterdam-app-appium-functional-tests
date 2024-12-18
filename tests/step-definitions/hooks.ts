import {After, Before} from '@wdio/cucumber-framework'
import {bsUrliOS} from '../../credentials.js'
import helpers from '../Shared/helpers/helpers.ts'
import notificationsScreen from '../screenobjects/notifications.screen.ts'
import onboardingScreen from '../screenobjects/onboarding.screen.ts'

Before({tags: '@BeforeOnboarding'}, async () => {
  // @ts-ignore
  const currentOS = driver.capabilities.platformName
  const simulatorRegex = new RegExp('(.*-.*){2,}')
  // Check if we are a simulator
  if (
    'udid' in driver.capabilities &&
    // @ts-ignore
    simulatorRegex.test(driver.capabilities.udid) &&
    currentOS === 'iOS'
  ) {
    await driver.installApp('./app/iOS/Amsterdam test.app')
    await driver.activateApp('nl.amsterdam.app.dev')
    //await driver.executeScript('mobile: launchApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
  } else if (currentOS === 'iOS') {
    await driver.installApp(bsUrliOS)
    await driver.activateApp('nl.amsterdam.app.dev')
    //await driver.executeScript('mobile: launchApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
  } else {
    await driver.activateApp('nl.amsterdam.app.dev')
    //await driver.startActivity('nl.amsterdam.app.dev', 'nl.amsterdam.app.MainActivity')
  }

  //check if device is real or emulator
  if (helpers.isEmulator()) {
    console.log('This is an emulator.')
  } else {
    console.log('This is a real device/ios simulator.')
  }
})

Before({tags: '@Before'}, async () => {
  //launch app
  // @ts-ignore
  const OS = await driver.capabilities.platformName
  if (OS === 'iOS') {
    await driver.activateApp('nl.amsterdam.app.dev')
    //await driver.executeScript('mobile: launchApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
    if (await onboardingScreen.nextButtonSelector.isDisplayed()) {
      await onboardingScreen.closeOnboarding()
    }
  } else {
    //await driver.startActivity('nl.amsterdam.app.dev', 'nl.amsterdam.app.MainActivity')
    await driver.activateApp('nl.amsterdam.app.dev')
    // @ts-ignore
    await driver.orientation('LANDSCAPE')
    if (await onboardingScreen.nextButtonSelector.isDisplayed()) {
      await onboardingScreen.closeOnboarding()
    }
    //await driver.launchApp()
  }
  //await switchEnv(environment)
  //check if device is real or emulator
  if (helpers.isEmulator()) {
    console.log('This is an emulator.')
  } else {
    console.log('This is a real device/ios simulator.')
  }
})

Before({tags: '@BeforeClean'}, async () => {
  // @ts-ignore
  const currentOS = driver.capabilities.platformName
  const simulatorRegex = /(.*-.*){2,}/
  // Check if we are a simulator
  if (
    'udid' in driver.capabilities &&
    // @ts-ignore
    simulatorRegex.test(driver.capabilities.udid) &&
    currentOS === 'iOS'
  ) {
    await driver.installApp('./app/iOS/Amsterdam test.app')
    await driver.pause(1000)
    // await driver.executeScript('mobile: launchApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
    await driver.activateApp('nl.amsterdam.app.dev')
    await notificationsScreen.allowNotifications()
    await onboardingScreen.closeOnboarding()
  } else if (currentOS === 'iOS') {
    await driver.installApp(bsUrliOS)
    //await driver.executeScript('mobile: launchApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
    await driver.activateApp('nl.amsterdam.app.dev')
    await notificationsScreen.allowNotifications()
    await onboardingScreen.closeOnboarding()
  } else {
    //await driver.startActivity('nl.amsterdam.app.dev', 'nl.amsterdam.app.MainActivity')
    await driver.activateApp('nl.amsterdam.app.dev')
    await notificationsScreen.allowNotifications()
    await onboardingScreen.closeOnboarding()
  }
  //await switchEnv(environment)

  if (helpers.isEmulator()) {
    console.log('This is an emulator.')
  } else {
    console.log('This is a real device.')
  }
})

After({tags: '@After'}, async function () {
  // const currentOS = driver.capabilities.platformName
  // if (currentOS === 'iOS') {
  //     await driver.executeScript('mobile: terminateApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
  // } else {
  //     await driver.terminateApp('nl.amsterdam.app.dev')
  // }
  await driver.terminateApp('nl.amsterdam.app.dev')
})

After({tags: '@AfterClean'}, async function () {
  // @ts-ignore
  const currentOS = driver.capabilities.platformName
  if (currentOS === 'iOS') {
    // await driver.executeScript('mobile: terminateApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
    // await driver.removeApp('nl.amsterdam.app.dev')
    await driver.terminateApp('nl.amsterdam.app.dev')
    await driver.removeApp('nl.amsterdam.app.dev')
  } else {
    await driver.terminateApp('nl.amsterdam.app.dev')
    //await driver.clearApp('nl.amsterdam.app.dev')
    await driver.execute('mobile:clearApp', {
      appId: 'nl.amsterdam.app.dev',
    })
  }
})
