import helpers from '../Shared/helpers/helpers.ts'
import Screen from './screen.ts'
/**
 * sub page containing specific selectors and methods for a specific page
 */
// @ts-ignore
const OS = driver.capabilities.platformName

class WasteGuideScreen extends Screen {
  get wasteGuideRequestLocationButtonText() {
    return helpers.createSelector('WasteGuideRequestLocationButtonText')
  }

  get wasteGuideRequestLocationButton() {
    return helpers.createSelector('WasteGuideRequestLocationButton')
  }

  get wasteGuideRequestLocationButtonTitle() {
    return helpers.createSelector('WasteGuideRequestLocationButtonTitle')
  }

  get wasteGuideSelectContractRadioGroupfalseRadioButton() {
    return helpers.createSelector(
      'WasteGuideSelectContractRadioGroupfalseRadioButton',
    )
  }

  get wasteGuideSelectContractRadioGrouptrueRadioButton() {
    return helpers.createSelector(
      'WasteGuideSelectContractRadioGrouptrueRadioButton',
    )
  }

  get wasteGuideScreenRestafvalTitle() {
    if (this.OS == 'iOS') {
      const selector =
        '**/XCUIElementTypeOther[`label == "Restafval Hoe: In de container voor restafval Waar: Kaart met containers in de buurt"`]'
      return $(`-ios class chain:${selector}`)
    } else {
      return helpers.createContentSelector('Restafval')
    }
  }

  get wasteGuideScreenRestafvalTitleBusinessAddress() {
    if (this.OS == 'iOS') {
      return helpers.createPredicateSelector(
        'Restafval Hoe: In de container voor restafval Waar: Kaart met containers in de buurt',
      )
    } else {
      return helpers.createContentSelector('Restafval')
    }
  }

  get wasteGuideReportWrongBuildingTypeIntroPhrase() {
    return helpers.createSelector(
      'WasteGuideReportWrongBuildingTypeIntroPhrase',
    )
  }

  get wasteGuideBusinessesInfoTitle() {
    return helpers.createTextBasedSelector(
      'Neem contact op met uw afvalinzamelaar',
      'android.view.View',
    )
  }

  get wasteGuideBusinessesInfoPhrase() {
    return helpers.createSelector('WasteGuideBusinessesInfoPhrase')
  }

  get wasteGuideNotFoundMessage() {
    return helpers.createSelector('WasteGuideNotFoundMessage')
  }

  get wasteGuideNotFoundMistakeButton() {
    return helpers.createSelector('WasteGuideNotFoundMistakeButton')
  }
}

export default new WasteGuideScreen()
