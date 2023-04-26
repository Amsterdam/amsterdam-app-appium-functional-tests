export default function createSelector(id) {
  const currentOS = driver.capabilities.platformName
  const testID = currentOS === 'iOS' ? `~${id}` : `android=new UiSelector().resourceId("${id}")`
  return $(testID)
}


  // export default function checkOS() {
  //   const currentOS = driver.capabilities.platformName
  //   return currentOS
  // }

