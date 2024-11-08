import assert from 'assert'
import helpers from '../Shared/helpers/helpers.ts'
import Screen from './screen.ts'
/**
 * sub screen containing specific selectors and methods for a specific screen
 */
class ProductTourScreen extends Screen {
  /**
   * define selectors using getter methods
   */
  // @ts-ignore
  OS = driver.capabilities.platformName

  get productConstructionWorkFollow() {
    // if (this.OS === 'iOS') {
    //     const selector = '**/XCUIElementTypeOther[`label == "Volg een project en blijf op de hoogte van onze werkzaamheden"`][2]'
    //     return $(`-ios class chain:${selector}`)
    // } else {
    return helpers.createSelector('ConstructionWorkProjectFollowButtonTooltip')
    //}
  }

  async checkPopUp(screen: 'project detailscherm') {
    switch (screen) {
      case 'project detailscherm':
        await expect(await this.productConstructionWorkFollow).toBeDisplayed()
        break
      default:
        await assert.fail(`Check for ‘${screen}’ doesn't exist`)
    }
  }

  async clickPopUp(screen: 'project detailscherm') {
    switch (screen) {
      case 'project detailscherm':
        await this.productConstructionWorkFollow.waitForDisplayed({
          timeout: 5000,
        })
        await this.productConstructionWorkFollow.click()
        break
      default:
        await assert.fail(`Check for ‘${screen}’ doesn't exist`)
    }
  }

  async checkPopUpDissapear(screen: 'project detailscherm') {
    switch (screen) {
      case 'project detailscherm':
        await expect(
          await this.productConstructionWorkFollow,
        ).not.toBeDisplayed()
        break
      default:
        await assert.fail(`Check for ‘${screen}’ doesn't exist`)
    }
  }
}

export default new ProductTourScreen()
