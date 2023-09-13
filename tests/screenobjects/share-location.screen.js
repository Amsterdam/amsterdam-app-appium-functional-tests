import helpers from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LocationScreen extends Screen {

    get addressLocationPermissionInstructionModalCloseButton() {
        return helpers.createSelector("AddressLocationPermissionInstructionModalCloseButton");
    }



}

export default new LocationScreen();