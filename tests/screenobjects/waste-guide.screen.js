import helpers from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
import { wasteGuideAmstel } from './wasteGuideTestdataAmstel.js';
import { wasteGuideBalistraat } from './wasteGuideTestdataBalistraat.js';
import { wasteGuideJavastraat } from './wasteGuideTestdataJavastraat.js';
import { wasteGuideOmval } from './wasteGuideTestdataOmval.js';
import { wasteGuideRokin } from './wasteGuideTestdataRokin.js';
import { wasteGuideStoombootweg } from './wasteGuideTestdataStoombootweg.js';
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


    get wasteGuideRequestLocationButton() {
        return helpers.createSelector("WasteGuideChangeLocationButton");
    }

    get wasteGuideRequestLocationButtonText() {
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

    get wasteGuideScreenRestafvalTitle() {
        return helpers.createContentSelector("Restafval")
    }

    get wasteGuideScreenGrofAfvalTitle() {
        return helpers.createContentSelector("Grof afval")
    }

    get wasteGuideScreenPapierTitle() {
        return helpers.createContentSelector("Papier en karton")
    }

    get wasteGuideScreenGFTTitle() {
        return helpers.createContentSelector("Groente-, fruit-, etensresten en tuinafval gé-ef-e-tee")
    }

    get wasteGuideScreenGlasTitle() {
        return helpers.createContentSelector("Glas")
    }

    get wasteGuideScreenTextielTitle() {
        return helpers.createContentSelector("Textiel")
    }

    get wasteGuideScreenRestafvalText() {
        switch (address) {
            case 'Balistraat 1-1':
                label = wasteGuideBalistraat.iOS.wasteGuideScreenRestafvalText;
                break;
            case "Rokin 8-3":
                label = wasteGuideRokin.iOS.wasteGuideScreenRestafvalText;
                break;
            case "Stoombootweg 14":
                label = wasteGuideStoombootweg.iOS.wasteGuideScreenRestafvalText
                break;
            case "Omval 18":
                label = wasteGuideOmval.iOS.wasteGuideScreenRestafvalText
                break;
            case "Amstel 1":
                label = wasteGuideAmstel.iOS.wasteGuideScreenRestafvalText
                break;
            case "Javastraat 20-H":
                label = wasteGuideJavastraat.iOS.wasteGuideScreenRestafvalText
                break;
            default:
                label = "";
        }
        return helpers.createContentSelector(label)
    }

    get wasteGuideRestafvalHowSection() {
        return helpers.createTextBasedSelector("Hoe: In de container voor restafval")
    }

    get wasteGuideRestafvalWhereSection() {
        return helpers.createTextBasedSelector("Waar: Kaart met containers in de buurt")
    }
    async wasteGuideScreenGrofAfvalTextiOS(address) {
        switch (address) {
            case 'Balistraat 1-1':
                label = wasteGuideBalistraat.iOS.wasteGuideScreenGrofAfvalText;
                break;
            case "Rokin 8-3":
                label = wasteGuideRokin.iOS.wasteGuideScreenGrofAfvalText;
                break;
            case "Stoombootweg 14":
                label = wasteGuideStoombootweg.iOS.wasteGuideScreenGrofAfvalText
                break;
            case "Omval 18":
                label = wasteGuideOmval.iOS.wasteGuideScreenGrofAfvalText
                break;
            case "Amstel 1":
                label = wasteGuideAmstel.iOS.wasteGuideScreenGrofAfvalText
                break;
            case "Javastraat 20-H":
                label = wasteGuideJavastraat.iOS.wasteGuideScreenGrofAfvalText
                break;
            default:
                label = "";
        }
        return helpers.createContentSelector(label)
    }

    get wasteGuideGrofAfvalHowSection() {
        return helpers.createTextBasedSelector("Hoe: Wegbrengen naar een Recyclepunt of buiten zetten")
    }

    get wasteGuideGrofAfvalCollectionPointsLink() {
        return helpers.createTextBasedSelector("Kaart met recyclepunten in de buurt")
    }

    get WasteGuideGrofAfvalDaySection() {
        return helpers.createTextBasedSelector("Ophaaldag: Maandag en vrijdag")
    }

    get WasteGuideGrofAfvalOutsideSection() {
        return helpers.createTextBasedSelector("Buitenzetten: Zondag vanaf 21.00 tot maandag 07.00 uur en donderdag vanaf 21.00 tot vrijdag 07.00 uur")
    }

    get WasteGuideGrofAfvalWhereSection() {
        return helpers.createTextBasedSelector("Waar: Aan de rand van de stoep of op de vaste plek")
    }


    get wasteGuidePapierEnKartonHowSection() {
        return helpers.createTextBasedSelector("Hoe: In de container voor papier")
    }

    get wasteGuidePapierEnKartonWhereSection() {
        return helpers.createTextBasedSelector("Waar: Kaart met containers in de buurt")
    }

    get wasteGuideScreenPapierEnKartonText() {
        return helpers.createTextBasedSelector("Hoe: In de container voor papier Waar: Kaart met containers in de buurt")
    }

    get WasteGuideGroenteFruitEtensrestenEnTuinafvalGfeTHowSection() {
        //android+ios
        return helpers.createTextBasedSelector("Hoe: Bij het restafval")
    }

    get WasteGuideGroenteFruitEtensrestenEnTuinafvalGfeTWhereSection() {
        //android+ios
        return helpers.createTextBasedSelector("Tuinafval: breng het naar een tuinkorf in de buurt, naar een Recyclepunt of anders bij het grof afval.")
    }

    get wasteGuideScreenGlasText() {
        return helpers.createContentSelector("Hoe: In de container voor glas Waar: Kaart met containers in de buurt")
    }

    get wasteGuideGlasHowSection() {
        const text = "Hoe: In de container voor glas"
        return helpers.createTextBasedSelector(text)
    }

    get wasteGuideGlasWhereSection() {
        const text = "Waar: Kaart met containers in de buurt"
        return helpers.createTextBasedSelector(text)
    }



    get wasteGuideTextielHowSection() {
        return helpers.createTextBasedSelector("Hoe: In de container voor textiel")
    }

    get wasteGuideTextielWhereSection() {
        return helpers.createTextBasedSelector("Waar: Kaart met containers in de buurt")
    }
    get wasteGuideScreenTextielWasteText() {
        return helpers.createContentSelector("Hoe: In de container voor textiel Waar: Kaart met containers in de buurt")
    }


}

export default new WasteGuideScreen();