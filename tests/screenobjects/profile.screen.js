import createSelector from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfileScreen extends Screen {

    get addressTitle() {
        return createSelector("AddressTitle");
    }

    get addressInstructionParagraph() {
        return createSelector("AddressInstructionParagraph")
    }

    get addressAddButton() {
        return createSelector("AddressAddButton")
    }

    get addressStreetInputSearchField() {
        return createSelector("AddressStreetInputSearchField")
    }

    get addressSearchResultWeesperstraat113() {
        return createSelector("AddressSearchResultWeesperstraat 113Button")
    }

    get addressSearchResultBalistraat1hg1() {
        return createSelector("AddressSearchResultBalistraat 1-1Button")
    }

    get addressSearchResultWeesperstraat() {
        return createSelector("AddressSearchResultWeesperstraatButton")
    }

    async addressSelector(adres) {
        return createSelector(`AddressSearchResult${adres}Button`)
    }
}

export default new ProfileScreen();