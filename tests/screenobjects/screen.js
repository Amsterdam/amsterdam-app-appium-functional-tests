/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
import createSelector from "../Shared/helpers/helpers.js";
export default class Screen {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    get welcomeImageAndQuoteButton () {
        // const id = Helpers.createSelector("WelcomeImageAndQuoteButton")
        // return $(id);
        return createSelector("WelcomeImageAndQuoteButton");
    }

    get headerTitle() {
        return createSelector("HeaderTitle")
    }
    
    get headerBackButton() {
        return createSelector("HeaderBackButton")
    }
}
