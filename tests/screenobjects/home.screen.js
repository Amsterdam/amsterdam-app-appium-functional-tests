import createSelector from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomeScreen extends Screen {
    
    get homeContactModuleButton () {
        return createSelector("HomeContactModuleButton");
    } 
    
    get homeConstructionWorkModuleButton () {
        return createSelector("HomeConstructionWorkModuleButton")
    }
    
    get homeWasteGuideModuleButton() {
        return createSelector("HomeWasteGuideModuleButton")
    }
    
    get homeOpenWasteContainerModuleButton() {
        return createSelector("HomeOpenWasteContainerModuleButton")
    }
    
    get homeReportProblemModuleButton() {
        return createSelector("HomeReportProblemModuleButton")
    }
    
    get homeRedirectsModuleButton() {
        return createSelector("HomeRedirectsModuleButton")
    }
    
    get homeAboutModuleButton() {
        return createSelector("HomeAboutModuleButton")
    }

async getHomeScreen() {
    await this.welcomeImageAndQuoteButton.waitForDisplayed()
    await this.welcomeImageAndQuoteButton.click()
    await this.homeConstructionWorkModuleButton.waitForDisplayed()
    await expect(this.homeConstructionWorkModuleButton).toBeDisplayed()
}

}

export default new HomeScreen();