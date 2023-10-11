import gestures from '../Shared/helpers/gestures.js';
import helpers from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SettingsScreen extends Screen {

    get homeModuleSettingWasteGuideSwitch() {
        return helpers.createSelector("HomeModuleSettingWasteGuideSwitch");
    }

    get HomeModuleSettingConstructionWorkSwitch() {
        return helpers.createSelector("HomeModuleSettingConstructionWorkSwitch")
    }

    get HomeModuleSettingReportProblemSwitch() {
        return helpers.createSelector("HomeModuleSettingReportProblemSwitch")
    }

    get HomeModuleSettingContactSwitch() {
        return helpers.createSelector("HomeModuleSettingContactSwitch")
    }

    get HomeModuleSettingRedirectsSwitch() {
        return helpers.createSelector("HomeModuleSettingRedirectsSwitch")
    }

    get HomeModuleSettingWelcomeSwitch() {
        return helpers.createSelector("HomeModuleSettingWelcomeSwitch")
    }

    async tapSettingsSwitchButton(module) {
        switch (module) {
            case 'Afvalwijzer':
                await gestures.checkProjectDisplayedWithScrollDownSlow(this.homeModuleSettingWasteGuideSwitch, 4)
                await this.homeModuleSettingWasteGuideSwitch.click()
                break
            case 'Werkzaamheden':
                await gestures.checkProjectDisplayedWithScrollDown(this.HomeModuleSettingConstructionWorkSwitch)
                await this.HomeModuleSettingConstructionWorkSwitch.click()
                break
            case 'Melding doen':
                await gestures.checkProjectDisplayedWithScrollDown(this.HomeModuleSettingReportProblemSwitch, 4)
                await this.HomeModuleSettingReportProblemSwitch.click()
                break
            case 'Contact':
                await gestures.checkProjectDisplayedWithScrollDown(this.HomeModuleSettingContactSwitch, 4)
                await this.HomeModuleSettingContactSwitch.click()
                break
            case 'Direct regelen':
                await gestures.checkProjectDisplayedWithScrollDown(this.HomeModuleSettingRedirectsSwitch, 4)
                await this.HomeModuleSettingRedirectsSwitch.click()
                break
            case 'Welkomstscherm':
                await gestures.checkProjectDisplayedWithScrollDown(this.HomeModuleSettingWelcomeSwitch, 4)
                await this.HomeModuleSettingWelcomeSwitch.click()
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
        await gestures.checkProjectDisplayedWithScrollDown(this.HomeModuleSettingRedirectsSwitch, 4)
        await this.HomeModuleSettingRedirectsSwitch.click()
        await gestures.checkProjectDisplayedWithScrollDown(this.HomeModuleSettingWelcomeSwitch, 4)
        await this.HomeModuleSettingWelcomeSwitch.click()
    }
}

export default new SettingsScreen();
