import helpers from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub screen containing specific selectors and methods for a specific screen
 */
class ProductTourScreen extends Screen {
    /**
     * define selectors using getter methods
     */
    OS = driver.capabilities.platformName


    get productConstructionWorkFollow() {

        // if (this.OS === 'iOS') {
        //     const selector = '**/XCUIElementTypeOther[`label == "Volg een project en blijf op de hoogte van onze werkzaamheden"`][2]'
        //     return $(`-ios class chain:${selector}`)
        // } else {
        return helpers.createSelector("ConstructionWorkProjectFollowButtonTooltip")
        //}
    }

    async checkPopUp(screen) {
        switch (screen) {
            case 'project detailscherm':
                await expect(await this.productConstructionWorkFollow).toBeDisplayed()
                break
            default:
                await assert.fail(`Check for ‘${screen}’ doesn't exist`)
        }
    }

    async clickPopUp(screen) {
        switch (screen) {
            case 'project detailscherm':
                await this.productConstructionWorkFollow.waitForDisplayed(5000)
                await this.productConstructionWorkFollow.click()
                break
            default:
                await assert.fail(`Check for ‘${screen}’ doesn't exist`)
        }
    }

    async checkPopUpDissapear(screen) {
        switch (screen) {
            case 'project detailscherm':
                await expect(await this.productConstructionWorkFollow).not.toBeDisplayed()
                break
            default:
                await assert.fail(`Check for ‘${screen}’ doesn't exist`)
        }
    }


}



export default new ProductTourScreen();