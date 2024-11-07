import GesturesScreen from '../Shared/helpers/gesturesv2.ts'
import helpers from '../Shared/helpers/helpers.ts'
import Screen from './screen.ts'

class OnboardingScreen extends Screen {
  OS = driver.capabilities.platformName

  get nextButtonSelector() {
    if (this.OS === 'iOS') {
      const selector = 'label == "Volgende"'
      return $(`-ios predicate string:${selector}`)
    } else {
      return helpers.createContentSelector('Volgende')
    }
  }

  get letsGoButton() {
    if (this.OS === 'iOS') {
      const selector = 'label == "Aan de slag"'
      return $(`-ios predicate string:${selector}`)
    } else {
      return helpers.createContentSelector('Aan de slag')
    }
  }

  get onboardingScreenSlide0Title() {
    const title = 'Amsterdam App'
    if (this.OS === 'iOS') {
      return helpers.createContentSelector(title)
    } else {
      const testID =
        'new UiSelector().text("Amsterdam App").className("android.view.View")'
      const selector = $(`android=${testID}`)
      return selector
    }
  }

  get onboardingScreenSlide0Text() {
    if (this.OS === 'iOS') {
      const label = 'label == "Informatie en diensten binnen handbereik."'
      const selector = $(`-ios predicate string:${label}`)
      return selector
    } else {
      const testID =
        'new UiSelector().text("Informatie en diensten binnen handbereik.").className("android.widget.TextView")'
      const selector = $(`android=${testID}`)
      return selector
    }
  }

  get onboardingScreenSlide1Title() {
    if (this.OS === 'iOS') {
      return helpers.createContentSelector('Persoonlijk')
    } else {
      const testID =
        'new UiSelector().text("Persoonlijk").className("android.view.View")'
      const selector = $(`android=${testID}`)
      return selector
    }
  }

  get onboardingScreenSlide1Text() {
    if (this.OS === 'iOS') {
      const label =
        'label == "De hele stad bekijken of alleen uw adres? Bepaal het in de app."'
      const selector = $(`-ios predicate string:${label}`)
      return selector
    } else {
      const testID =
        'new UiSelector().text("De hele stad bekijken of alleen uw adres? Bepaal het in de app.").className("android.widget.TextView")'
      const selector = $(`android=${testID}`)
      return selector
    }
  }

  get onboardingScreenSlide2Title() {
    if (this.OS === 'iOS') {
      return helpers.createContentSelector('Relevant')
    } else {
      const testID =
        'new UiSelector().text("Relevant").className("android.view.View")'
      const selector = $(`android=${testID}`)
      return selector
    }
  }

  get onboardingScreenSlide2Text() {
    if (this.OS === 'iOS') {
      const label = 'label == "Kies zelf wat u in de app wilt zien."'
      const selector = $(`-ios predicate string:${label}`)
      return selector
    } else {
      const testID =
        'new UiSelector().text("Kies zelf wat u in de app wilt zien.").className("android.widget.TextView")'
      const selector = $(`android=${testID}`)
      return selector
    }
  }

  get onboardingScreenSlide3Title() {
    if (this.OS === 'iOS') {
      return helpers.createContentSelector('Afvalwijzer')
    } else {
      const testID =
        'new UiSelector().text("Afvalwijzer").className("android.view.View")'
      const selector = $(`android=${testID}`)
      return selector
    }
  }

  get onboardingScreenSlide3Text() {
    if (this.OS === 'iOS') {
      const label =
        'label == "Praktische informatie over afval altijd bij de hand."'
      const selector = $(`-ios predicate string:${label}`)
      return selector
    } else {
      const testID =
        'new UiSelector().text("Praktische informatie over afval altijd bij de hand.").className("android.widget.TextView")'
      const selector = $(`android=${testID}`)
      return selector
    }
  }

  get onboardingScreenSlide4Title() {
    if (this.OS === 'iOS') {
      return helpers.createContentSelector('Werkzaamheden')
    } else {
      const testID =
        'new UiSelector().text("Werkzaamheden").className("android.view.View")'
      const selector = $(`android=${testID}`)
      return selector
    }
  }

  get onboardingScreenSlide4Text() {
    if (this.OS === 'iOS') {
      const label = 'label == "Bekijk waar wij aan het werk zijn."'
      const selector = $(`-ios predicate string:${label}`)
      return selector
    } else {
      const testID =
        'new UiSelector().text("Bekijk waar wij aan het werk zijn.").className("android.widget.TextView")'
      const selector = $(`android=${testID}`)
      return selector
    }
  }

  get onboardingScreenSlide5Title() {
    if (this.OS === 'iOS') {
      return helpers.createContentSelector('Melding doen')
    } else {
      const testID =
        'new UiSelector().text("Melding doen").className("android.view.View")'
      const selector = $(`android=${testID}`)
      return selector
    }
  }

  get onboardingScreenSlide6Title() {
    if (this.OS === 'iOS') {
      return helpers.createContentSelector('Stadspas')
    } else {
      const testID =
        'new UiSelector().text("Stadspas").className("android.view.View")'
      const selector = $(`android=${testID}`)
      return selector
    }
  }

  get onboardingScreenSlide5Text() {
    if (this.OS === 'iOS') {
      const label =
        'label == "Overlast? Iets kapot? Vertel het ons via de app."'
      const selector = $(`-ios predicate string:${label}`)
      return selector
    } else {
      const testID =
        'new UiSelector().text("Overlast? Iets kapot? Vertel het ons via de app.").className("android.widget.TextView")'
      const selector = $(`android=${testID}`)
      return selector
    }
  }

  get onboardingScreenSlide6Text() {
    if (this.OS === 'iOS') {
      const label = 'label == "Uw Stadspas altijd mee en inzicht in uw saldo."'
      const selector = $(`-ios predicate string:${label}`)
      return selector
    } else {
      const testID =
        'new UiSelector().text("Uw Stadspas altijd mee en inzicht in uw saldo.").className("android.widget.TextView")'
      const selector = $(`android=${testID}`)
      return selector
    }
  }

  get onboardingScreenPagineationZero() {
    return helpers.createSelector('OnboardingPagination0')
  }

  get onboardingScreenPagineationOne() {
    return helpers.createSelector('OnboardingPagination1')
  }

  get onboardingScreenPagineationTwo() {
    return helpers.createSelector('OnboardingPagination2')
  }

  get onboardingScreenPagineationThree() {
    return helpers.createSelector('OnboardingPagination3')
  }

  get onboardingScreenPagineationFour() {
    return helpers.createSelector('OnboardingPagination4')
  }

  get onboardingScreenPagineationFive() {
    return helpers.createSelector('OnboardingPagination5')
  }

  get onboardingScreenPagineationSix() {
    return helpers.createSelector('OnboardingPagination6')
  }

  get onboardingScreenImageSlideZero() {
    return helpers.createSelector('OnboardingSide0')
  }

  get onboardingScreenImageSlideOne() {
    return helpers.createSelector('OnboardingSide1')
  }

  get onboardingScreenImageSlideTwo() {
    return helpers.createSelector('OnboardingSide2')
  }

  get onboardingScreenImageSlideThree() {
    return helpers.createSelector('OnboardingSide3')
  }

  get onboardingScreenImageSlideFour() {
    return helpers.createSelector('OnboardingSide4')
  }

  get onboardingScreenImageSlideFive() {
    return helpers.createSelector('OnboardingSide5')
  }

  get onboardingScreenImageSlideSix() {
    return helpers.createSelector('OnboardingSide6')
  }

  get onboardingCloseButton() {
    return helpers.createSelector('OnboardingCloseButton')
  }

  get onboardingScreenScrollView() {
    if (this.OS === 'iOS') {
      const type = 'type == "XCUIElementTypeScrollView"'
      const selector = $(`-ios predicate string:${type}`)
      return selector
    } else {
      const testID =
        'new UiSelector().className("android.widget.HorizontalScrollView")'
      const selector = $(`android=${testID}`)
      return selector
    }
  }

  async closeOnboarding() {
    await this.onboardingCloseButton.waitForDisplayed({timeout: 15000})
    await this.onboardingCloseButton.click()
  }

  async nextPageMethod(method) {
    if (method === 'swipeLeft') {
      GesturesScreen.swipeLeftSelector(this.onboardingScreenScrollView)
    } else if (method === 'nextButton') {
      this.nextButtonSelector.click()
    }
  }

  async checkOnboardingSlides(method) {
    await this.nextPageMethod(method)
    await expect(this.onboardingScreenSlide1Title).toBeDisplayed()
    await expect(this.onboardingScreenSlide1Text).toBeDisplayed()
    await expect(this.onboardingScreenImageSlideOne).toBeDisplayed()
    await expect(this.onboardingScreenPagineationOne).toBeDisplayed()
    await this.nextPageMethod(method)
    await expect(this.onboardingScreenSlide2Title).toBeDisplayed()
    await expect(this.onboardingScreenSlide2Text).toBeDisplayed()
    await expect(this.onboardingScreenImageSlideTwo).toBeDisplayed()
    await expect(this.onboardingScreenPagineationTwo).toBeDisplayed()
    await this.nextPageMethod(method)
    await expect(this.onboardingScreenSlide3Title).toBeDisplayed()
    await expect(this.onboardingScreenSlide3Text).toBeDisplayed()
    await expect(this.onboardingScreenImageSlideThree).toBeDisplayed()
    await expect(this.onboardingScreenPagineationThree).toBeDisplayed()
    await this.nextPageMethod(method)
    await expect(this.onboardingScreenSlide4Title).toBeDisplayed()
    await expect(this.onboardingScreenSlide4Text).toBeDisplayed()
    await expect(this.onboardingScreenImageSlideFour).toBeDisplayed()
    await expect(this.onboardingScreenPagineationFour).toBeDisplayed()
    await this.nextPageMethod(method)
    await expect(this.onboardingScreenSlide5Title).toBeDisplayed()
    await expect(this.onboardingScreenSlide5Text).toBeDisplayed()
    await expect(this.onboardingScreenImageSlideFive).toBeDisplayed()
    await expect(this.onboardingScreenPagineationFive).toBeDisplayed()
    await this.nextPageMethod(method)
    await expect(this.onboardingScreenSlide6Title).toBeDisplayed()
    await expect(this.onboardingScreenSlide6Text).toBeDisplayed()
    await expect(this.onboardingScreenImageSlideSix).toBeDisplayed()
    await expect(this.onboardingScreenPagineationSix).toBeDisplayed()
  }

  async checkOnboardingSlideZero() {
    await expect(this.onboardingScreenSlide0Title).toBeDisplayed()
    await expect(this.onboardingScreenSlide0Text).toBeDisplayed()
    await expect(this.onboardingScreenImageSlideZero).toBeDisplayed()
    await expect(this.onboardingScreenPagineationZero).toBeDisplayed()
  }
}

export default new OnboardingScreen()
