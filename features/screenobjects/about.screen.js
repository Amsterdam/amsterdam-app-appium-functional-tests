import createSelector from '../Shared/helpers/helpers.js'
import Screen from './screen.js'
/**
 * sub screen containing specific selectors and methods for a specific screen
 */
class AboutScreen extends Screen {
  /**
   * define selectors using getter methods
   */
  
  get AboutTitleAmsterdam() {
    return createSelector("AboutTitleAmsterdam")
    //return $('//android.view.View[contains(@resource-id, "AboutTitleAmsterdam")')
  }

  get AboutTextVersion() {
    return createSelector("AboutTextVersion")
    //return $('//android.view.View[contains(@resource-id, "AboutTextVersion")]')
  }

  get aboutAboutTheAppDutchButton() {
    return createSelector("AboutAboutTheAppDutchButton")
    //return $('//android.view.View[contains(@resource-id, "AboutAboutTheAppDutchButton")]')
  }

   get aboutAboutTheAppEnglishButton() {
    return createSelector("AboutAboutTheAppEnglishButton")
    //return $('//android.view.View[contains(@resource-id, "AboutAboutTheAppEnglishButton")]')
  }

  get aboutPrivacyStatementButton() {
    return createSelector("AboutPrivacyStatementButton")
    //return $('//android.view.View[contains(@resource-id, "AboutPrivacyStatementButton")]')
  }

  get aboutAccessibilityStatementButton() {
    return createSelector("AboutAccessibilityStatementButton")
    //return $('//android.view.View[contains(@resource-id, "AboutAccessibilityStatementButton")]')
  }
}

export default new AboutScreen();
