/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
import helpers from "../Shared/helpers/helpers.js";
export default class Screen {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    get welcomeImageAndQuoteButton() {
        // const id = .helpers.createSelector("WelcomeImageAndQuoteButton")
        // return $(id);
        return helpers.createSelector("WelcomeImageAndQuoteButton");
    }

    get headerTitle() {
        return helpers.createSelector("HeaderTitle")
    }

    get headerBackButton() {
        return helpers.createSelector("HeaderBackButton")
    }

    get allowLocationButton() {
        this.allowLocationSelector()
    }

    async allowLocationSelector() {
        const OS = await driver.capabilities.platformName
        if (OS === 'iOS') {
            return $(`-ios predicate string: label == "Allow While Using App"`)
        }
        //Android:
        else { return helpers.createSelector("com.android.permissioncontroller:id/permission_allow_foreground_only_button") }

        //return helpers.createSelector(`AddressSearchResult${adres}Button`)
    }

}
