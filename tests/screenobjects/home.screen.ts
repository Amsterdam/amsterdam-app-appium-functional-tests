import assert from 'assert'
import helpers from '../Shared/helpers/helpers.ts'
import Screen from './screen.ts'
import {Modules} from 'tests/types/modules.ts'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomeScreen extends Screen {
  get homeContactModuleButton() {
    return helpers.createSelector('HomeContactModuleButton')
  }

  get homeConstructionWorkModuleButton() {
    return helpers.createSelector('HomeConstructionWorkModuleButton')
  }

  get homeWasteGuideModuleButton() {
    return helpers.createSelector('HomeWasteGuideModuleButton')
  }

  get homeReportProblemModuleButton() {
    return helpers.createSelector('HomeReportProblemModuleButton')
  }

  get homeRedirectsModuleButton() {
    return helpers.createSelector('HomeRedirectsModuleButton')
  }

  get homeAboutModuleButton() {
    return helpers.createSelector('HomeAboutModuleButton')
  }

  get HomeConstructionWorkEditorModuleButton() {
    return helpers.createSelector('HomeConstructionWorkEditorModuleButton')
  }

  get headerModuleSettingsButton() {
    return helpers.createSelector('HeaderModuleSettingsButton')
  }

  get headerUserButton() {
    return helpers.createSelector('HeaderUserButton')
  }

  get headerEnvironmentButton() {
    return helpers.createSelector('HeaderEnvironmentButton')
  }

  get environmentProduction() {
    //return helpers.createContentSelector('HomeEnvironmentSelectorProductionAzureButton')
    return helpers.createSelector('HomeEnvironmentSelectorProductionButton')
  }

  get environmentDev() {
    //return helpers.createContentSelector('HomeEnvironmentSelectorDevelopmentAzureButton')
    return helpers.createSelector('HomeEnvironmentSelectorDevelopmentButton')
  }

  get environmentTest() {
    //return helpers.createContentSelector('HomeEnvironmentSelectorTestAzureButton')
    return helpers.createSelector('HomeEnvironmentSelectorTestButton')
  }

  get environmentAcc() {
    //return helpers.createContentSelector('HomeEnvironmentSelectorAcceptanceAzureButton')
    return helpers.createSelector('HomeEnvironmentSelectorAcceptanceButton  ')
  }

  get openDeepLinkSafari() {
    const openSelector =
      'label == "Open" AND name == "Open" AND type == "XCUIElementTypeButton"'
    const open = $(`-ios predicate string:${openSelector}`)
    return open
  }

  async getHomeScreen() {
    //await driver.launchApp()
    //await this.welcomeImageAndQuoteButton.click()
    await this.homeAboutModuleButton.waitForDisplayed({timeout: 15000})
    await expect(this.homeAboutModuleButton).toBeDisplayed()
  }

  async checkModulesExist(module: Modules) {
    switch (module) {
      case Modules.wasteGuide:
        await expect(this.homeWasteGuideModuleButton).toBeDisplayed()
        break
      case Modules.constructionWork:
        await expect(this.homeConstructionWorkModuleButton).toBeDisplayed()
        break
      case Modules.reportProblem:
        await expect(this.homeReportProblemModuleButton).toBeDisplayed()
        break
      case Modules.contact:
        await expect(this.homeContactModuleButton).toBeDisplayed()
        break
      case Modules.redirects:
        await expect(this.homeRedirectsModuleButton).toBeDisplayed()
        break
      case Modules.about:
        await expect(this.homeAboutModuleButton).toBeDisplayed()
        break
      default:
        assert.fail(`Invalid ‘${module}’ input`)
    }
  }

  async checkModulesNotExist(module: Modules) {
    switch (module) {
      case Modules.wasteGuide:
        await expect(this.homeWasteGuideModuleButton).not.toBeDisplayed()
        break
      case Modules.constructionWork:
        await expect(this.homeConstructionWorkModuleButton).not.toBeDisplayed()
        break
      case Modules.reportProblem:
        await expect(this.homeReportProblemModuleButton).not.toBeDisplayed()
        break
      case Modules.contact:
        await expect(this.homeContactModuleButton).not.toBeDisplayed()
        break
      case Modules.redirects:
        await expect(this.homeRedirectsModuleButton).not.toBeDisplayed()
        break
      case Modules.about:
        await expect(this.homeAboutModuleButton).not.toBeDisplayed()
        break
      default:
        assert.fail(`Invalid ‘${module}’ input`)
    }
  }

  async checkAllModulesNotExist() {
    await expect(this.homeWasteGuideModuleButton).not.toBeDisplayed()
    await expect(this.homeConstructionWorkModuleButton).not.toBeDisplayed()
    await expect(this.homeReportProblemModuleButton).not.toBeDisplayed()
    await expect(this.homeContactModuleButton).not.toBeDisplayed()
    await expect(this.homeRedirectsModuleButton).not.toBeDisplayed()
  }
}

export default new HomeScreen()
