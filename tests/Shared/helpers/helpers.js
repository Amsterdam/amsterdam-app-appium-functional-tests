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
}

export default new Helpers;