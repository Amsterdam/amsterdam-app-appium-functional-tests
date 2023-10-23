import helpers from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class WasteGuideScreen extends Screen {

    get wasteGuideChangeLocationButton() {
        return helpers.createSelector("WasteGuideChangeLocationButton");
    }

    get wasteGuideChangeLocationButtonText() {
        return helpers.createSelector("WasteGuideChangeLocationButtonText");
    }

    get wasteGuideRequestLocationButton() {
        return helpers.createSelector("WasteGuideRequestLocationButton");
    }

    get wasteGuideSelectContractRadioGroupfalseRadioButton() {
        return helpers.createSelector("WasteGuideSelectContractRadioGroupfalseRadioButton")
    }

    get wasteGuideSelectContractRadioGrouptrueRadioButton() {
        return helpers.createSelector("WasteGuideSelectContractRadioGrouptrueRadioButton")
    }

    get wasteGuideScreenTitle() {
        return helpers.createTextBasedSelector("Voor welke locatie wilt u informatie over afval?", "android.view.View")
    }

}

export default new WasteGuideScreen();