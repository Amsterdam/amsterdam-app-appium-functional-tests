import createSelector from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfileScreen extends Screen {

    get userAddressTitle() {
        return createSelector("UserAddressTitle");
    }

    get userAddressInstructionParagraph() {
        return createSelector("UserAddressInstructionParagraph")
    }

    get userAddressAddButton() {
        return createSelector("UserAddressAddButton")
    }

    get userAddressStreetInputSearchField() {
        return createSelector("UserAddressStreetInputSearchField")
    }
}

export default new ProfileScreen();