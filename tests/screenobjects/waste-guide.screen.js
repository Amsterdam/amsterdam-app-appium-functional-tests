import helpers from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class WasteGuideScreen extends Screen {

    get wasteGuideButtonEditAddress() {
        return helpers.createSelector("WasteGuideButtonEditAddress");
    }

    get wasteGuideEnterAddressButton() {
        return helpers.createSelector("WasteGuideEnterAddressButton");
    }

    get wasteGuideSelectContractRadioGroupfalseRadioButton() {
        return helpers.createSelector("WasteGuideSelectContractRadioGroupfalseRadioButton")
    }

    get wasteGuideSelectContractRadioGrouptrueRadioButton() {
        return helpers.createSelector("WasteGuideSelectContractRadioGrouptrueRadioButton")
    }

}

export default new WasteGuideScreen();