import helpers from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
const OS = driver.capabilities.platformName

class CityPassScreen extends Screen {


    get homeCityPassModuleButton() {
        return helpers.createSelector("HomeCityPassModuleButton");
    }

    get cityPassLoginButton() {
        if (OS === 'iOS') {
            const selector = `name == "CityPassLoginButton" AND label == "Inloggen met DigiD"`
            return $(`-ios predicate string:${selector}`);
        } else {
            return helpers.createSelector("CityPassLoginButton");
        }
    }

    get testaccountMarga02() {
        if (OS === 'iOS') {
            const selector = `type == "XCUIElementTypeLink" AND name == "Marga02"`
            return $(`-ios predicate string:${selector}`);
        } else {
            const testID = 'new UiSelector().text("Marga02").className("android.widget.TextView")'
            const selector = $(`android=${testID}`)
            return selector
        }
    }

    get webViewId() {
        if (OS === 'iOS') {
            return helpers.createSelector("XCUIElementTypeWebView");
        } else {
            const testID = 'new UiSelector().text("Sign in to your account")'
            const selector = $(`android=${testID}`)
            return selector
        }
    }

    get cityPassLoggedInAlertPositive() {
        return helpers.createSelector("CityPassLoggedInAlertPositive");
    }

    get cityPassShowPassesButton() {
        return helpers.createSelector("CityPassShowPassesButton");
    }

    get cityPassOwnerButtonMarga() {
        return helpers.createSelector("CityPassOwnerButton-201519")
    }
    get cityPassOwnerButtonJan() {
        return helpers.createSelector("CityPassOwnerButton-201603")
    }
    get cityPassOwnerButtonChelsea() {
        return helpers.createSelector("CityPassOwnerButton-201604")
    }
    get cityPassOwnerButtonMini() {
        return helpers.createSelector("CityPassOwnerButton-201605")
    }

    get cityPassCityPassDetailsTitle() {
        return helpers.createSelector("CityPassCityPassDetailsTitle")
    }

    get cityPassCityPassDetailsSubtitle() {
        return helpers.createSelector("CityPassCityPassDetailsSubtitle")
    }

    get cityPassDetailScreenCopyButton() {
        return helpers.createSelector("CityPassDetailScreenCopyButton")
    }

    get cityPassCityPassDetailsExpiryDate() {
        return helpers.createSelector("CityPassCityPassDetailsExpiryDate")
    }

    get cityPassTransactionHistoryTableHeader() {
        return helpers.createSelector("CityPassTransactionHistoryTableHeader")
    }

    get cityPassKindtegoed10_11Button() {
        return helpers.createSelector("CityPassBudgetBalance2024_AMSTEG_10-11Button")
    }

    get cityPassKindtegoed4_9Button() {
        return helpers.createSelector("CityPassBudgetBalance2024_AMSTEG_4-9Button")
    }

    get cityPassKindtegoed0_3Button() {
        return helpers.createSelector("CityPassBudgetBalance2024_AMSTEG_0-3Button")
    }

    get cityPassBalanceTitleLabel() {
        return helpers.createSelector("CityPassBalanceTitleLabel")
    }

    get cityPassBalanceTitleValue() {
        return helpers.createSelector("CityPassBalanceTitleValue")
    }

    get betalingenTitle() {
        return helpers.createSelector("Betalingen")
    }

    get cityPassTransactionHistoryTableHeader() {
        return helpers.createSelector("CityPassTransactionHistoryTableHeader")
    }

    get transactions() {
        if (OS === 'iOS') {
            const selector = `type == "XCUIElementTypeOther" AND name CONTAINS "Gemeente"`
            return $(`-ios predicate string:${selector}`);
        }
    }

    get cityPassTransactionHistoryNoTransactions() {
        return helpers.createSelector("CityPassTransactionHistoryNoTransactions")
    }


}

export default new CityPassScreen();