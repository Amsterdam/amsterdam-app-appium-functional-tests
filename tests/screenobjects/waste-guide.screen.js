import createSelector from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class WasteGuideScreen extends Screen {

    get wasteGuideEnterAddressButton() {
        return createSelector("WasteGuideEnterAddressButton");
    }

    get wasteGuideSelectContractRadioGroupfalseRadioButton() {
        return createSelector("WasteGuideSelectContractRadioGroupfalseRadioButton")
    }

    get wasteGuideSelectContractRadioGrouptrueRadioButton() {
        return createSelector("WasteGuideSelectContractRadioGrouptrueRadioButton")
    }

}

export default new WasteGuideScreen();