import helpers from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfileScreen extends Screen {

    get addressTitle() {
        return helpers.createSelector("AddressTitle");
    }

    get addressInstructionParagraph() {
        return helpers.createSelector("AddressInstructionParagraph")
    }

    get addressAddButton() {
        return helpers.createSelector("AddressAddButton")
    }

    get addressStreetInputSearchField() {
        return helpers.createSelector("AddressStreetInputSearchField")
    }

    get addressSearchResultWeesperstraat113() {
        return helpers.createSelector("AddressSearchResultWeesperstraat 113Button")
    }

    get addressSearchResultBalistraat1hg1() {
        return helpers.createSelector("AddressSearchResultBalistraat 1-1Button")
    }

    get addressSearchResultWeesperstraat() {
        return helpers.createSelector("AddressSearchResultWeesperstraatButton")
    }

    get addressTooltipButton() {
        return helpers.createSelector("AddressTooltipButton")
    }

    get addressEditButton() {
        return helpers.createSelector("AddressEditButton")
    }

    get addressDeleteButton() {
        return helpers.createSelector("AddressDeleteButton")
    }

    get addressStreetnameAndNumberText() {
        return helpers.createSelector("AddressStreetnameAndNumberText")
    }

    get addressPostalcodeAndCityText() {
        return helpers.createSelector("AddressPostalcodeAndCityText")
    }

    // get deletedTxt() {
    //     return "~Gelukt, Het adres is verwijderd uit uw profiel."
    // }

    get deletedTxt() {
        return helpers.createContentSelector("Gelukt, Het adres is verwijderd uit uw profiel.")
    }

    async addressSelector(adres) {
        return helpers.createSelector(`AddressSearchResult${adres}Button`)
    }

    async addAddress(adres) {
        await expect(this.headerTitle).toHaveText('Adres')
        await this.addressStreetInputSearchField.waitForDisplayed(3000)
        await this.addressStreetInputSearchField.addValue(adres)
    }

    async checkAddressAdded(adres, postcode) {
        await expect(this.addressTitle).toBeDisplayed()
        await expect(this.addressStreetnameAndNumberText).toBeDisplayed()
        await expect(this.addressPostalcodeAndCityText).toBeDisplayed()
        await expect(this.addressStreetnameAndNumberText).toHaveText(adres)
        await expect(this.addressPostalcodeAndCityText).toHaveText(postcode)
    }
}

export default new ProfileScreen();