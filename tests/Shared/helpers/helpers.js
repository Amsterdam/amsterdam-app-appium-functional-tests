class Helpers {

  createSelector(id) {
    const currentOS = driver.capabilities.platformName
    const testID = currentOS === 'iOS' ? `~${id}` : `android=new UiSelector().resourceId("${id}")`
    return $(testID)
  }

  createContentSelector(id) {
    const currentOS = driver.capabilities.platformName
    const testID = currentOS === 'iOS' ? `~${id}` : `android=new UiSelector().descriptionMatches("${id}")`
    return $(testID)
  }
  // export default function checkOS() {
  //   const currentOS = driver.capabilities.platformName
  //   return currentOS
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
    const currentOS = await driver.capabilities.platformName
    if (currentOS === 'iOS') {
      await driver.executeScript('mobile: terminateApp', [{ bundleId: 'nl.amsterdam.app.dev' }])
    } else {
      await driver.terminateApp('nl.amsterdam.app.dev')
    }
  }
}

export default new Helpers;