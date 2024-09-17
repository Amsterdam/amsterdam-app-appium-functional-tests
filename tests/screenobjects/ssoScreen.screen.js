import Screen from './screen.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
const OS = driver.capabilities.platformName

class SsoScreen extends Screen {

    get ssoUsernameInput() {
        if (OS === 'iOS') {
            return $('//XCUIElementTypeTextField[@name="Emailadres"]')
        }
    }

    get ssoNextButton() {
        if (OS === 'iOS') {
            return $('//XCUIElementTypeButton[@name="Volgende"]')
        }
    }

    get ssoPasswordInput() {
        if (OS === 'iOS') {
            return $('//XCUIElementTypeSecureTextField[@name="Wachtwoord"]')
        }
    }

    get ssoSignInButton() {
        if (OS === 'iOS') {
            return $('//XCUIElementTypeButton[@name="Inloggen"]')
        }
    }

    get ssoUseOtherMFA() {
        if (OS === 'iOS') {
            return $('//XCUIElementTypeButton[@name="Gebruik een andere methode"]')
        }
    }

    get useVerificationCodeButton() {
        if (OS === 'iOS') {
            return $('//XCUIElementTypeButton[@name="Gebruik een verificatiecode"]')
        }
    }

    get totpInput() {
        if (OS === 'iOS') {
            return $('//XCUIElementTypeTextField[@name="Voer de verificatiecode in"]')
        }
    }
}

export default new SsoScreen();

