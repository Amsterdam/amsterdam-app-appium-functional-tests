import Screen from './screen.ts'
/**
 * sub page containing specific selectors and methods for a specific page
 */
// @ts-ignore
const OS = driver.capabilities.platformName

class SsoScreen extends Screen {
  get ssoUsernameInput() {
    if (OS === 'iOS') {
      return $(
        '//XCUIElementTypeTextField[@value="Email address, phone number or Skype"]',
      )
    }
  }

  get ssoNextButton() {
    if (OS === 'iOS') {
      return $('//XCUIElementTypeButton[@name="Next"]')
    }
  }

  get ssoPasswordInput() {
    if (OS === 'iOS') {
      return $('//XCUIElementTypeSecureTextField[@value="Password"]')
    }
  }

  get ssoSignInButton() {
    if (OS === 'iOS') {
      return $('//XCUIElementTypeButton[@name="Sign in"]')
    }
  }

  get ssoUseOtherMFA() {
    if (OS === 'iOS') {
      return $(
        '//XCUIElementTypeLink[@name="I can\'t use my Microsoft Authenticator app right now"]',
      )
    }
  }

  get useVerificationCodeButton() {
    if (OS === 'iOS') {
      return $('//XCUIElementTypeButton[@name="Use a verification code"]')
    }
  }

  get totpInput() {
    if (OS === 'iOS') {
      return $('//XCUIElementTypeTextField[@name="Enter code"]')
    }
  }

  get verifyButton() {
    if (OS === 'iOS') {
      return $('//XCUIElementTypeButton[@name="Verify"]')
    }
  }

  get digidLoginUsernameButton() {
    if (OS === 'iOS') {
      const selector =
        'type == "XCUIElementTypeLink" && name CONTAINS "wachtwoord"'
      return $(`-ios predicate string:${selector}`)
    }
  }

  get digidLoginUsernameField() {
    if (OS === 'iOS') {
      return $('//XCUIElementTypeTextField')
    }
  }

  get digidLoginPasswordField() {
    if (OS === 'iOS') {
      return $('//XCUIElementTypeSecureTextField')
    }
  }

  get digidLoginButton() {
    if (OS === 'iOS') {
      return $('//XCUIElementTypeButton[@name="Inloggen "]')
    }
  }
}

export default new SsoScreen()
