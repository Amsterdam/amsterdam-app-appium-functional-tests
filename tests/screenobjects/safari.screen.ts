import helpers from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub screen containing specific selectors and methods for a specific screen
 */
class SafariScreen extends Screen {
  /**
   * define selectors using getter methods
   */

  get safariIcon() {
    return helpers.createContentSelector("Safari")
    //return $('//android.view.View[contains(@resource-id, "AboutTitleAmsterdam")')
  }

  get chromeIcon() {
    //return helpers.createContentSelector("Plaats berichten")
    const selector = `name == "Chrome" == "XCUIElementTypeIcon"`
    return $(`-ios predicate string:${selector}`);
  }

  get tabBarItemTitle() {
    //return helpers.createSelector("TabBarItemTitle")
    const selector = `label == "Adres"`
    return $(`-ios predicate string:${selector}`);
  }

  get openDeeplink() {
    //return $('//XCUIElementTypeButton[@name="Open"]')
    const selector = `name == "Open" AND type == "XCUIElementTypeButton"`
    // return $(`-ios predicate string:${selector}`)
    // driver.updateSettings({ fixImageTemplateScale: true, })
    // driver.pause(5000)
    // return $('./tests/open-button.png')
    //const openSelector = `type == 'XCUIElementTypeButton' && name CONTAINS 'Open'`;
    return $(`-ios predicate string:${selector}`);
  }

}

export default new SafariScreen();
