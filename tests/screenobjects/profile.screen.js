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
        return createSelector("AddressSearchResultWeesperstraatButton")
    }

    get addressSearchResultWeesperstraat() {
        return createSelector("AddressSearchResultWeesperstraatButton")
    }
}

export default new ProfileScreen();