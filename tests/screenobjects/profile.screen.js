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

    get addressAddButtonTitle() {
        return helpers.createSelector("AddressAddButtonTitle")
    }

    get addressAddButtonText() {
        return helpers.createSelector("AddressAddButtonText")
    }

    get addressAddButton() {
        return helpers.createSelector("AddressAddButton")
    }

    get addressStreetInputSearchField() {
        return helpers.createSelector("AddressStreetInputSearchField")
    }

    get addressSearchResultWeesperstraat113() {
        //return helpers.createContentSelector("Weesperstraat 113")
        return helpers.createSelector("AddressSearchResultadr-8cf66b905374f45aa16f692cd537d013Button")
    }

    // get addressSearchResultBalistraat1hg1() {
    //     return helpers.createSelector("AddressSearchResultBalistraat 1-1Button")
    // }

    get addressSearchResultBalistraat1hg1() {
        //return helpers.createContentSelector("Balistraat 1-1")
        return helpers.createSelector("AddressSearchResultadr-99f4d1223f0f6b0c4a9086aa4c18f894Button")
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

    get bottomSheetSelectAddressButton() {
        return helpers.createSelector("BottomSheetSelectAddressButton")
    }

    get bottomSheetChangeAddressButton() {
        return helpers.createSelector("BottomSheetChangeAddressButton")
    }

    get bottomSheetSelectLocationButton() {
        return helpers.createSelector("BottomSheetSelectLocationButton")
    }

    get bottomSheetSelectLocationButtonText() {
        return helpers.createSelector("BottomSheetSelectLocationButtonText")
    }

    get selectLocationTypeBottomSheet() {
        return helpers.createSelector("SelectLocationTypeBottomSheet")
    }

    get addressAddedAlert() {
        return helpers.createSelector("AddressAddedAlert")
    }

    get addressDeletedAlert() {
        return helpers.createSelector("AddressDeletedAlert")
    }

    get addressLocationPrivacyInfoButton() {
        const OS = driver.capabilities.platformName
        if (OS === 'iOS') {
            return $(`-ios predicate string: label == "Zo gebruiken wij uw locatie en adres"`)
        }
        //Android:
        else {
            const selector = 'new UiSelector().text("Zo gebruiken wij uw locatie en adres").className("android.view.View")'
            const androidSelector = $(`android=${selector}`)
            return androidSelector
        }
    }

    get addressPrivacyInfoTitle() {
        return helpers.createSelector("AddressPrivacyInfoTitle")
    }

    get addressPrivacyInfoModalHeaderCloseButton() {
        return helpers.createSelector("AddressPrivacyInfoModalHeaderCloseButton")
    }

    get addressPrivacyInfoModalCloseButton() {
        return helpers.createSelector("AddressPrivacyInfoModalCloseButton")
    }

    get addressPrivacyInfoModalCloseButtonLabel() {
        return helpers.createSelector("AddressPrivacyInfoModalCloseButtonLabel")
    }

    async addressSelector(adres) {
        const OS = await driver.capabilities.platformName
        if (OS === 'iOS') {
            return $(`-ios predicate string: label == "${adres}"`)
        }
        //Android:
        else { return helpers.createContentSelector(adres) }
    }

    async addAddress(adres) {
        await expect(this.headerTitle).toHaveText('Adres')
        await this.addressStreetInputSearchField.waitForDisplayed(3000)
        await this.addressStreetInputSearchField.setValue(adres)
    }

    async checkAddressAdded() {
        await this.addressAddButton.waitForDisplayed(5000)
        await expect(this.addressAddedAlert).toBeDisplayed()

        //Dit weer aanzetten als iOS testIDs gefixt zijn
        //await expect(this.addressAddButtonTitle).toBeDisplayed()
        //await expect(this.addressAddButtonText).toBeDisplayed()
        //await expect(this.addressAddButtonTitle).toHaveText('Mijn adres')
        //await expect(this.addressAddButtonText).toHaveText(adres)
    }

    async checkAddressAddedAfterRefresh() {
        await expect(this.addressAddedAlert).not.toBeDisplayed()
        await expect(this.addressAddButton).toBeDisplayed()
        //Dit weer aanzetten als iOS testIDs gefixt zijn
        //await expect(this.addressAddButtonTitle).toBeDisplayed()
        //await expect(this.addressAddButtonText).toBeDisplayed()
        //await expect(this.addressAddButtonTitle).toHaveText('Mijn adres')
        //await expect(this.addressAddButtonText).toHaveText(adres)
    }
}

export default new ProfileScreen();