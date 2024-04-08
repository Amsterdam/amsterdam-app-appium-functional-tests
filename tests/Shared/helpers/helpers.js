import { execSync } from 'child_process'

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
      await driver.executeScript('mobile: launchApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
    }
    else {
      await driver.startActivity('nl.amsterdam.app.dev', 'nl.amsterdam.app.MainActivity')
    }
  }

  async closeApp() {
    if (this.currentOS === 'iOS') {
      await driver.executeScript('mobile: terminateApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
    } else {
      await driver.terminateApp('nl.amsterdam.app.dev')
    }
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
}

export default new Helpers;