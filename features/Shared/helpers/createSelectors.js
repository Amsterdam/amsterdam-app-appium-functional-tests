export default function createSelectors(id) {
    const currentOS = driver.capabilities.platformName
    const testID = currentOS === 'iOS' ? `~${id}` : `android=new UiSelector().resourceId("${id}")`
    return $$(testID)
}
