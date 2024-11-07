import helpers from '../Shared/helpers/helpers.ts'
import Screen from './screen.ts'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class PermissionsScreen extends Screen {
  //android
  get addressLocationPermissionInstructionModalCloseButton() {
    return helpers.createSelector(
      'AddressLocationPermissionInstructionModalCloseButton',
    )
  }

  get androidPermissionsButton() {
    const selector =
      'new UiSelector().text("Permissions").className("android.widget.Textview")'
    return selector
  }

  get androidLocationPermissionsButton() {
    const selector =
      'new UiSelector().text("Location").className("android.widget.Textview")'
    return selector
  }

  get androidAllowWhileUsingAppRadioButton() {
    const selector =
      'new UiSelector().text("Allow only while using the app").className("android.widget.RadioButton")'
    return selector
  }

  get androidAllowOnlyThisTimeRadioButton() {
    const selector =
      'new UiSelector().text("Ask every time").className("android.widget.RadioButton")'
    return selector
  }

  get androidAllowDontAllowRadioButton() {
    const selector =
      'new UiSelector().text("Don\'t allow").className("android.widget.RadioButton")'
    return selector
  }

  get androidAllowWhileUsingAppButton() {
    return helpers.createSelector(
      'com.android.permissioncontroller:id/permission_allow_foreground_only_button',
    )
  }

  get androidAllowOnlyThisTimeButton() {
    //const selector = 'new UiSelector().text("Only this time").className("android.widget.Button")'
    //return selector
    return helpers.createSelector(
      'com.android.permissioncontroller:id/permission_allow_one_time_button',
    )
  }

  get androidAllowDontAllowButton() {
    return helpers.createSelector(
      'com.android.permissioncontroller:id/permission_deny_button',
    )
  }

  get androidBackButton() {
    return helpers.createContentSelector('Back')
  }

  //iOS selectors
  get iosAllowWhileUsingAppButton() {
    return helpers.createSelector('Allow While Using App')
  }
}

export default new PermissionsScreen()
