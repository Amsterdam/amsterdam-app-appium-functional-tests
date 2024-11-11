import {Modules} from '../types/modules.ts'
import gestures from '../Shared/helpers/gestures.ts'
import helpers from '../Shared/helpers/helpers.ts'
import Screen from './screen.ts'
import assert from 'assert'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SettingsScreen extends Screen {
  get homeModuleSettingWasteGuideSwitch() {
    return helpers.createSelector('HomeModuleSettingWasteGuideSwitch')
  }

  get HomeModuleSettingConstructionWorkSwitch() {
    return helpers.createSelector('HomeModuleSettingConstructionWorkSwitch')
  }

  get HomeModuleSettingReportProblemSwitch() {
    return helpers.createSelector('HomeModuleSettingReportProblemSwitch')
  }

  get HomeModuleSettingContactSwitch() {
    return helpers.createSelector('HomeModuleSettingContactSwitch')
  }

  get HomeModuleSettingRedirectsSwitch() {
    return helpers.createSelector('HomeModuleSettingRedirectsSwitch')
  }

  async tapSettingsSwitchButton(module: Modules) {
    switch (module) {
      case Modules.wasteGuide:
        await gestures.checkProjectDisplayedWithScrollDownSlow(
          this.homeModuleSettingWasteGuideSwitch,
          4,
        )
        await this.homeModuleSettingWasteGuideSwitch.click()
        break
      case Modules.constructionWork:
        await gestures.checkProjectDisplayedWithScrollDown(
          this.HomeModuleSettingConstructionWorkSwitch,
          1000,
        )
        await this.HomeModuleSettingConstructionWorkSwitch.click()
        break
      case Modules.reportProblem:
        await gestures.checkProjectDisplayedWithScrollDown(
          this.HomeModuleSettingReportProblemSwitch,
          4,
        )
        await this.HomeModuleSettingReportProblemSwitch.click()
        break
      case Modules.contact:
        await gestures.checkProjectDisplayedWithScrollDown(
          this.HomeModuleSettingContactSwitch,
          4,
        )
        await this.HomeModuleSettingContactSwitch.click()
        break
      case Modules.redirects:
        await gestures.checkProjectDisplayedWithScrollDown(
          this.HomeModuleSettingRedirectsSwitch,
          4,
        )
        await this.HomeModuleSettingRedirectsSwitch.click()
        break
      default:
        assert.fail(`Module setting switch button ‘${module}’ doesn't exist`)
    }
  }

  async switchAllModulesOff() {
    await this.homeModuleSettingWasteGuideSwitch.click()
    await this.HomeModuleSettingConstructionWorkSwitch.click()
    await this.HomeModuleSettingReportProblemSwitch.click()
    await this.HomeModuleSettingContactSwitch.click()
    await gestures.checkProjectDisplayedWithScrollDown(
      this.HomeModuleSettingRedirectsSwitch,
      4,
    )
    await this.HomeModuleSettingRedirectsSwitch.click()
  }
}

export default new SettingsScreen()
