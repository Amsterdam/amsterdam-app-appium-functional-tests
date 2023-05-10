import createSelector from '../Shared/helpers/helpers.js'
import Screen from './screen.js'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContactScreen extends Screen {
  /**
   * define selectors using getter methods
   */

  get ContactTitleContactOptions() {
    return createSelector("ContactTitleContactOptions")
  }

  get ContactTextContactOptions() {
    return createSelector("ContactTextContactOptions")
  }

  get ContactButtonContactform() {
    return createSelector("ContactButtonContactform")
  }

  get ContactButtonContactformTitle() {
    return createSelector("ContactButtonContactformTitle")
  }

  get ContactButtonContactformText() {
    return createSelector("ContactButtonContactformText")
  }

  get ContactButtonPhone() {
    return createSelector("ContactButtonPhone")
  }

  get ContactButtonPhoneTitle() {
    return createSelector("ContactButtonPhoneTitle")
  }

  get ContactButtonPhoneText() {
    return createSelector("ContactButtonPhoneText")
  }

  get ContactButtonWhatsapp() {
    return createSelector("ContactButtonWhatsapp")
  }

  get ContactButtonWhatsappTitle() {
    return createSelector("ContactButtonWhatsappTitle")
  }

  get ContactButtonWhatsappText() {
    return createSelector("ContactButtonWhatsappText")
  }

  get ContactButtonMyAmsterdam() {
    return createSelector("ContactButtonMyAmsterdam")
  }

  get ContactButtonMyAmsterdamTitle() {
    return createSelector("ContactButtonMyAmsterdamTitle")
  }

  get ContactButtonMyAmsterdamText() {
    return createSelector("ContactButtonMyAmsterdamText")
  }

  get ContactVisitUsTitle() {
    return createSelector("ContactVisitUsTitle")
  }

  get ContactCurrentCityOfficeButton() {
    return createSelector("ContactCurrentCityOfficeButton")
  }

  get ContactCurrentCityOfficeButtonTitle() {
    return createSelector("ContactCurrentCityOfficeButtonTitle")
  }

  get ContactTextVisitingHours() {
    return createSelector("ContactTextVisitingHours")
  }

  get ContactButtonVisitingHoursDetails() {
    return createSelector("ContactButtonVisitingHoursDetails")
  }

  get contactSeeRouteButton() {
    return createSelector("ContactSeeRouteButton")
  }

  get contactMakeAppointmentButton() {
    return createSelector("ContactMakeAppointmentButton")
  }

  get ContactButtonRouteLabel() {
    return createSelector("ContactButtonRouteLabel")
  }

  get contactVisitingHoursTooltipButton() {
    return createSelector("ContactVisitingHoursTooltipButton")
  }
  get cityOfficeCentrumButton() {
    return createSelector('ContactCityOfficee9871a7716da02a4c20cfb06f9547005Button')
  }

  get cityOfficeNieuwWestButton() {
    return createSelector('ContactCityOffice5d9637689a8b902fa1a13acdf0006d26Button')
  }

  get cityOfficeNoordButton() {
    return createSelector('ContactCityOffice081d6a38f46686905693fcd6087039f5Button')
  }

  get cityOfficeOostButton() {
    return createSelector('ContactCityOffice29e3b63d09d1f0c9a9c7238064c70790Button')
  }

  get cityOfficeWestButton() {
    return createSelector
      ('ContactCityOfficeb4b178107cbc0c609d8d190bbdbdfb08Button')
  }

  get cityOfficeZuidButton() {
    return createSelector
      ('ContactCityOfficeb887a4d081821c4245c02f07e2de3290Button')
  }

  get cityOfficeZuidoostButton() {
    return createSelector
      ('ContactCityOfficed338d28f8e6132ea2cfcf3e61785454cButton')
  }

  get cityOfficeWeespButton() {
    return createSelector
      ('ContactCityOffice5ae1d0dd98a417fbf6772aeec85cb40fButton')
  }

  async tapCityOfficeButton(stadsloket) {
    switch (stadsloket) {
      case 'Centrum':
        await this.cityOfficeCentrumButton.click()
        break
      case 'Nieuw-West':
        await this.cityOfficeNieuwWestButton.click()
        break
      case 'Noord':
        await this.cityOfficeNoordButton.click()
        break
      case 'Oost':
        await this.cityOfficeOostButton.click()
        break
      case 'West':
        await this.cityOfficeWestButton.click()
        break
      case 'Zuid':
        await this.cityOfficeZuidButton.click()
        break
      case 'Zuidoost':
        await this.cityOfficeZuidoostButton.click()
        break
      case 'Weesp':
        await this.cityOfficeWeespButton.click()
        break
      default:
        assert.fail(`Invalid city office title ‘${stadsloket}’`)
    }
  }
}

export default new ContactScreen()
