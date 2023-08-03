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

    get HomeConstructionWorkEditorModuleButton() {
        return helpers.createSelector("HomeConstructionWorkEditorModuleButton")
    }

    get headerModuleSettingsButton() {
        return helpers.createSelector("HeaderModuleSettingsButton")
    }

    get headerUserButton() {
        return helpers.createSelector("HeaderUserButton")
    }

    get headerModuleSettingsButton() {
        return helpers.createSelector("HeaderModuleSettingsButton")
    }

    async getHomeScreen() {
        //await driver.launchApp()
        await this.homeAboutModuleButton.waitForDisplayed(10000)
        await expect(this.homeAboutModuleButton).toBeDisplayed()
    }

    async checkModulesExist(module) {
        switch (module) {
            case 'Afvalwijzer':
                await expect(this.homeWasteGuideModuleButton).toBeDisplayed()
                break
            case 'Gft-container openen':
                await expect(this.homeOpenWasteContainerModuleButton).toBeDisplayed()
                break
            case 'Werkzaamheden':
                await expect(this.homeConstructionWorkModuleButton).toBeDisplayed()
                break
            case 'Melding doen':
                await expect(this.homeReportProblemModuleButton).toBeDisplayed()
                break
            case 'Contact':
                await expect(this.homeContactModuleButton).toBeDisplayed()
                break
            case 'Direct regelen':
                await expect(this.homeRedirectsModuleButton).toBeDisplayed()
                break
            case 'Over deze app':
                await expect(this.homeAboutModuleButton).toBeDisplayed()
                break
            case 'Welkomstscherm':
                await driver.closeApp()
                await driver.launchApp()
                await expect(this.welcomeImageAndQuoteButton).toBeDisplayed()
                break
            default:
                assert.fail(`Invalid ‘${module}’ input`)
        }
    }

    async checkModulesNotExist(module) {
        switch (module) {
            case 'Afvalwijzer':
                await expect(this.homeWasteGuideModuleButton).not.toBeDisplayed()
                break
            case 'Gft-container openen':
                await expect(this.homeOpenWasteContainerModuleButton).not.toBeDisplayed()
                break
            case 'Werkzaamheden':
                await expect(this.homeConstructionWorkModuleButton).not.toBeDisplayed()
                break
            case 'Melding doen':
                await expect(this.homeReportProblemModuleButton).not.toBeDisplayed()
                break
            case 'Contact':
                await expect(this.homeContactModuleButton).not.toBeDisplayed()
                break
            case 'Direct regelen':
                await expect(this.homeRedirectsModuleButton).not.toBeDisplayed()
                break
            case 'Over deze app':
                await expect(this.homeAboutModuleButton).not.toBeDisplayed()
                break
            case 'Welkomstscherm':
                await driver.closeApp()
                await driver.launchApp()
                await expect(this.welcomeImageAndQuoteButton).not.toBeDisplayed()
                break
            default:
                assert.fail(`Invalid ‘${module}’ input`)
        }
    }

    async checkAllModulesNotExist() {
        await expect(this.homeWasteGuideModuleButton).not.toBeDisplayed()
        await expect(this.homeOpenWasteContainerModuleButton).not.toBeDisplayed()
        await expect(this.homeConstructionWorkModuleButton).not.toBeDisplayed()
        await expect(this.homeReportProblemModuleButton).not.toBeDisplayed()
        await expect(this.homeContactModuleButton).not.toBeDisplayed()
        await expect(this.homeRedirectsModuleButton).not.toBeDisplayed()
    }

}

export default new HomeScreen();