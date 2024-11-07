import helpers from '../Shared/helpers/helpers.js'
import Screen from './screen.js'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContactScreen extends Screen {
  /**
   * define selectors using getter methods
   */

  get ContactTitleContactOptions() {
    return helpers.createSelector("ContactTitleContactOptions")
  }

  get ContactTextContactOptions() {
    return helpers.createSelector("ContactTextContactOptions")
  }

  get ContactButtonContactform() {
    return helpers.createSelector("ContactButtonContactform")
  }
  get ContactButtonChat() {
    return helpers.createSelector("ContactChatButton")
  }

  get ContactButtonContactformTitle() {
    return helpers.createSelector("ContactButtonContactformTitle")
  }

  get ContactButtonContactformText() {
    return helpers.createSelector("ContactButtonContactformText")
  }

  get ContactButtonPhone() {
    return helpers.createSelector("ContactButtonPhone")
  }

  get ContactButtonPhoneTitle() {
    return helpers.createSelector("ContactButtonPhoneTitle")
  }

  get ContactButtonPhoneText() {
    return helpers.createSelector("ContactButtonPhoneText")
  }

  get ContactButtonWhatsapp() {
    return helpers.createSelector("ContactButtonWhatsapp")
  }

  get ContactButtonWhatsappTitle() {
    return helpers.createSelector("ContactButtonWhatsappTitle")
  }

  get ContactButtonWhatsappText() {
    return helpers.createSelector("ContactButtonWhatsappText")
  }

  get ContactButtonMyAmsterdam() {
    return helpers.createSelector("ContactButtonMyAmsterdam")
  }

  get ContactButtonMyAmsterdamTitle() {
    return helpers.createSelector("ContactButtonMyAmsterdamTitle")
  }

  get ContactButtonMyAmsterdamText() {
    return helpers.createSelector("ContactButtonMyAmsterdamText")
  }

  get ContactVisitUsTitle() {
    return helpers.createSelector("ContactVisitUsTitle")
  }

  get ContactCurrentCityOfficeButton() {
    return helpers.createSelector("ContactCurrentCityOfficeButton")
  }

  get ContactCurrentCityOfficeButtonTitle() {
    return helpers.createSelector("ContactCurrentCityOfficeButtonTitle")
  }

  get ContactTextVisitingHours() {
    return helpers.createSelector("ContactTextVisitingHours")
  }

  get ContactButtonVisitingHoursDetails() {
    return helpers.createSelector("ContactButtonVisitingHoursDetails")
  }

  get contactSeeRouteButton() {
    return helpers.createSelector("ContactSeeRouteButton")
  }

  get contactMakeAppointmentButton() {
    return helpers.createSelector("ContactMakeAppointmentButton")
  }

  get ContactButtonRouteLabel() {
    return helpers.createSelector("ContactButtonRouteLabel")
  }

  get contactVisitingHoursTooltipButton() {
    return helpers.createSelector("ContactVisitingHoursTooltipButton")
  }
  get cityOfficeCentrumButton() {
    return helpers.createSelector('ContactCityOfficee9871a7716da02a4c20cfb06f9547005Button')
  }

  get cityOfficeNieuwWestButton() {
    return helpers.createSelector('ContactCityOffice5d9637689a8b902fa1a13acdf0006d26Button')
  }

  get cityOfficeNoordButton() {
    return helpers.createSelector('ContactCityOffice081d6a38f46686905693fcd6087039f5Button')
  }

  get cityOfficeOostButton() {
    return helpers.createSelector('ContactCityOffice29e3b63d09d1f0c9a9c7238064c70790Button')
  }

  get cityOfficeWestButton() {
    return helpers.createSelector
      ('ContactCityOfficeb4b178107cbc0c609d8d190bbdbdfb08Button')
  }

  get cityOfficeZuidButton() {
    return helpers.createSelector
      ('ContactCityOfficeb887a4d081821c4245c02f07e2de3290Button')
  }

  get cityOfficeZuidoostButton() {
    return helpers.createSelector
      ('ContactCityOfficed338d28f8e6132ea2cfcf3e61785454cButton')
  }

  get cityOfficeWeespButton() {
    return helpers.createSelector
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
