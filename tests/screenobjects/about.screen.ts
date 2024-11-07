import helpers from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub screen containing specific selectors and methods for a specific screen
 */
class AboutScreen extends Screen {
  /**
   * define selectors using getter methods
   */

  get AboutTitleAmsterdam() {
    return helpers.createSelector("AboutTitleAmsterdam")
    //return $('//android.view.View[contains(@resource-id, "AboutTitleAmsterdam")')
  }

  get AboutTextVersion() {
    return helpers.createSelector("AboutTextVersion")
    //return $('//android.view.View[contains(@resource-id, "AboutTextVersion")]')
  }

  get aboutAboutTheAppDutchButton() {
    return helpers.createSelector("AboutAboutTheAppDutchButton")
    //return $('//android.view.View[contains(@resource-id, "AboutAboutTheAppDutchButton")]')
  }

  get aboutAboutTheAppEnglishButton() {
    return helpers.createSelector("AboutAboutTheAppEnglishButton")
    //return $('//android.view.View[contains(@resource-id, "AboutAboutTheAppEnglishButton")]')
  }

  get aboutPrivacyStatementButton() {
    return helpers.createSelector("AboutPrivacyStatementButton")
    //return $('//android.view.View[contains(@resource-id, "AboutPrivacyStatementButton")]')
  }

  get aboutAccessibilityStatementButton() {
    return helpers.createSelector("AboutAccessibilityStatementButton")
    //return $('//android.view.View[contains(@resource-id, "AboutAccessibilityStatementButton")]')
  }

  get aboutOnboardingButton() {
    return helpers.createSelector("AboutOnboardingButton")
  }
}

export default new AboutScreen();
