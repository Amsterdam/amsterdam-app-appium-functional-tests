import helpers from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
import { wasteGuideBalistraat } from './wasteGuideTestdataBalistraat.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
const OS = driver.capabilities.platformName

class WasteGuideScreen extends Screen {

    async getselector(address, selector) {
        if (address == 'Balistraat' && OS == 'iOS') {
            wasteGuideBalistraat.iOS
        }
    }

    get wasteGuideRequestLocationButtonText() {
        return helpers.createSelector("WasteGuideRequestLocationButtonText");
    }

    get wasteGuideRequestLocationButton() {
        return helpers.createSelector("WasteGuideRequestLocationButton");
    }

    get wasteGuideRequestLocationButtonTitle() {
        return helpers.createSelector("WasteGuideRequestLocationButtonTitle");
    }

    get wasteGuideSelectContractRadioGroupfalseRadioButton() {
        return helpers.createSelector("WasteGuideSelectContractRadioGroupfalseRadioButton")
    }

    get wasteGuideSelectContractRadioGrouptrueRadioButton() {
        return helpers.createSelector("WasteGuideSelectContractRadioGrouptrueRadioButton")
    }

    get wasteGuideScreenRestafvalTitle() {
        OS == 'iOS' ? selector = helpers.createPredicateSelector("Restafval Hoe: In de container voor restafval Waar: Kaart met containers in de buurt") : selector = helpers.createContentSelector("Restafval")
        return selector
    }

    get wasteGuideReportWrongBuildingTypeIntroPhrase() {
        return helpers.createSelector("WasteGuideReportWrongBuildingTypeIntroPhrase")
    }

    get wasteGuideBusinessesInfoTitle() {
        return helpers.createTextBasedSelector("Neem contact op met uw afvalinzamelaar", "android.view.View")
    }

    get wasteGuideBusinessesInfoPhrase() {
        return helpers.createSelector("WasteGuideBusinessesInfoPhrase")
    }

    get wasteGuideNotFoundMessage() {
        return helpers.createSelector("WasteGuideNotFoundMessage")
    }

    get wasteGuideNotFoundMistakeButton() {
        return helpers.createSelector("WasteGuideNotFoundMistakeButton")
    }

}

export default new WasteGuideScreen();