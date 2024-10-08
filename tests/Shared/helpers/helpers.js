import { execSync } from 'child_process'
import HomeScreen from '../../screenobjects/home.screen.js'

class Helpers {
  currentOS = driver.capabilities.platformName

  createSelector(id) {
    const testID = this.currentOS === 'iOS' ? `~${id}` : `android=new UiSelector().resourceId("${id}")`
    return $(testID)
  }

  createContentSelector(id) {
    const testID = this.currentOS === 'iOS' ? `~${id}` : `android=new UiSelector().descriptionMatches("${id}")`
    return $(testID)
  }

  createTextBasedSelector(text, className) {
    if (this.currentOS === 'iOS') {
      const iOSTestID = `~${text}`
      return $(iOSTestID)
    } else {
      const selector = `new UiSelector().text("${text}").className("${className}")`
      const androidTestID = $(`android=${selector}`)
      return androidTestID
    }

  }

  createPredicateSelector(label) {
    const selector = $(`-ios predicate string:${label}`);
    return selector
  }

  // export default function checkOS() {
  //   const this.currentOS = driver.capabilities.platformName
  //   return this.currentOS
  // }
  realDeviceCheckiOS() {
    const simulatorRegex = new RegExp('(.*-.*){2,}');

    // Check if we are a simulator
    return ('udid' in driver.capabilities && simulatorRegex.test(driver.capabilities.udid) ? true : false);
  }

  async launchApp() {
    const OS = await driver.capabilities.platformName
    if (OS === 'iOS') {
      await driver.activateApp('nl.amsterdam.app.dev')
    }
    else {
      await driver.startActivity('nl.amsterdam.app.dev', 'nl.amsterdam.app.MainActivity')
    }
  }

  async closeApp() {
    await driver.terminateApp('nl.amsterdam.app.dev')
  }

  isEmulator() {
    try {
      const adbDevicesOutput = execSync('adb devices -l').toString();
      return /(?:emulator)/i.test(adbDevicesOutput);
    } catch (error) {
      console.error('Error:', error.message);
      return false; // Assume it's not an emulator in case of an error
    }
  }

  async switchEnv(environment) {
    switch (environment) {
      case 'DEV':
        await HomeScreen.headerEnvironmentButton.click()
        await HomeScreen.environmentDev.click()
        await HomeScreen.headerBackButton.click()
        await driver.pause(6000)
        break
      case 'TEST':
        await HomeScreen.headerEnvironmentButton.click()
        await HomeScreen.environmentTest.click()
        await HomeScreen.headerBackButton.click()
        await driver.pause(6000)
        break
      case 'ACC':
        await HomeScreen.headerEnvironmentButton.click()
        await HomeScreen.environmentAcc.click()
        await HomeScreen.headerBackButton.click()
        await driver.pause(6000)
        break
      case 'PROD':
        await HomeScreen.headerEnvironmentButton.click()
        await HomeScreen.environmentProduction.click()
        await HomeScreen.headerBackButton.click()
        await driver.pause(6000)
        break
      default:
        await assert.fail(`${environment} doesn't exist`)
    }
  }

}

export default new Helpers;