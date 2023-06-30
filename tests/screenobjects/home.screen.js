import helpers from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomeScreen extends Screen {

    get homeContactModuleButton() {
        return helpers.createSelector("HomeContactModuleButton");
    }

    get homeConstructionWorkModuleButton() {
        return helpers.createSelector("HomeConstructionWorkModuleButton")
    }

    get homeWasteGuideModuleButton() {
        return helpers.createSelector("HomeWasteGuideModuleButton")
    }

    get homeOpenWasteContainerModuleButton() {
        return helpers.createSelector("HomeOpenWasteContainerModuleButton")
    }

    get homeReportProblemModuleButton() {
        return helpers.createSelector("HomeReportProblemModuleButton")
    }

    get homeRedirectsModuleButton() {
        return helpers.createSelector("HomeRedirectsModuleButton")
    }

    get homeAboutModuleButton() {
        return helpers.createSelector("HomeAboutModuleButton")
    }

    get headerUserButton() {
        return helpers.createSelector("HeaderUserButton")
    }

    get headerModuleSettingsButton() {
        return helpers.createSelector("HeaderModuleSettingsButton")
    }

    async getHomeScreen() {
        //await driver.launchApp()
        await this.homeConstructionWorkModuleButton.waitForDisplayed()
        await expect(this.homeConstructionWorkModuleButton).toBeDisplayed()
    }

}

export default new HomeScreen();