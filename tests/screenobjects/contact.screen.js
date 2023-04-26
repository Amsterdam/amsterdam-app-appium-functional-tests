import createSelector from '../Shared/helpers/helpers.js'
import Screen from './screen'
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

  get ContactTitleVisit() {
    return createSelector("ContactTitleVisit")
  }

  get ContactButtonCurrentCityOffice() {
    return createSelector("ContactButtonCurrentCityOffice")
  }

  get ContactButtonCurrentCityOfficeTitle() {
    return createSelector("ContactButtonCurrentCityOfficeTitle")
  }

  get ContactTextVisitingHours() {
    return createSelector("ContactTextVisitingHours")
  }

  get ContactButtonVisitingHoursDetails() {
    return createSelector("ContactButtonVisitingHoursDetails")
  }

  get ContactButtonRoute() {
    return createSelector("ContactButtonRoute")
  }

  get ContactButtonRouteLabel() {
    return createSelector("ContactButtonRouteLabel")
  }
}

export default new ContactScreen()
