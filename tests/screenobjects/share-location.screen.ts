import helpers from '../Shared/helpers/helpers.ts'
import Screen from './screen.ts'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LocationScreen extends Screen {
  get addressLocationPermissionInstructionModalCloseButton() {
    return helpers.createSelector(
      'AddressLocationPermissionInstructionModalCloseButton',
    )
  }

  get constructionWorkRequestLocationButtonTitle() {
    return helpers.createSelector('ConstructionWorkRequestLocationButtonTitle')
  }
}

export default new LocationScreen()
