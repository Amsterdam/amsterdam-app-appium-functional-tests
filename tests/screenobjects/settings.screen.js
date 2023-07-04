import helpers from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SettingsScreen extends Screen {

    get homeModuleSettingWasteGuideSwitch() {
        return helpers.createSelector("HomeModuleSettingWasteGuideSwitch");
    }

    get homeModuleSettingOpenWasteContainerSwitch() {
        return helpers.createSelector("HomeModuleSettingOpenWasteContainerSwitch")
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
                await this.homeModuleSettingWasteGuideSwitch.click()
                break
            case 'Gft-container openen':
                await this.homeModuleSettingOpenWasteContainerSwitch.click()
                break
            case 'Werkzaamheden':
                await this.HomeModuleSettingConstructionWorkSwitch.click()
                break
            case 'Melding doen':
                await this.HomeModuleSettingReportProblemSwitch.click()
                break
            case 'Contact':
                await this.HomeModuleSettingContactSwitch.click()
                break
            case 'Direct regelen':
                await this.HomeModuleSettingRedirectsSwitch.click()
                break
            case 'Welkomstscherm':
                await this.HomeModuleSettingWelcomeSwitch.click()
                break
            default:
                assert.fail(`Module setting switch button ‘${module}’ doesn't exist`)
        }
    }

    async switchAllModulesOff() {
        await this.homeModuleSettingWasteGuideSwitch.click()
        await this.homeModuleSettingOpenWasteContainerSwitch.click()
        await this.HomeModuleSettingConstructionWorkSwitch.click()
        await this.HomeModuleSettingReportProblemSwitch.click()
        await this.HomeModuleSettingContactSwitch.click()
        await this.HomeModuleSettingRedirectsSwitch.click()
        await this.HomeModuleSettingWelcomeSwitch.click()
    }
}

export default new SettingsScreen();
