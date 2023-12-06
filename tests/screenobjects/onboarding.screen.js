import helpers from '../Shared/helpers/helpers.js';
import Screen from './screen.js';

class OnboardingScreen extends Screen {

    OS = driver.capabilities.platformName

    get nextButtonSelector() {

        if (this.OS === 'iOS') {
            const selector = 'label == "Volgende"'
            return $(`-ios predicate string:${selector}`)
        } else {
            return helpers.createContentSelector("Volgende")
        }

    }

    get letsGoButton() {
        if (this.OS === 'iOS') {
            const selector = 'label == "Aan de slag"'
            return $(`-ios predicate string:${selector}`)
        } else {
            return helpers.createContentSelector("Aan de slag")
        }
    }

    get onboardingScreenSlide0Title() {
        const title = "Amsterdam App"
        if (this.OS === 'iOS') {
            return helpers.createContentSelector(title)
        }
        else {
            // const testID = `new UiSelector().text(${title}).className("android.view.View")`
            // const selector = $(`android=${testID}`)
            // console.log(selector)
            // return selector
            const testID = 'new UiSelector().text("Amsterdam App").className("android.view.View")'
            const selector = $(`android=${testID}`)
            return selector
        }
    }

    get onboardingScreenSlide0Text() {
        const text = "Snel en gemakkelijk informatie opzoeken, werkzaamheden bekijken en meldingen doen."
        if (this.OS === 'iOS') {
            return helpers.createContentSelector(text)
        }
        else {
            const testID = 'new UiSelector().text("Snel en gemakkelijk informatie opzoeken, werkzaamheden bekijken en meldingen doen.").className("android.widget.TextView")'
            const selector = $(`android=${testID}`)
            return selector
        }

    }

    get onboardingScreenSlide1Title() {
        if (this.OS === 'iOS') {
            return helpers.createContentSelector("Persoonlijk")
        }
        else {
            const testID = 'new UiSelector().text("Persoonlijk").className("android.view.View")'
            const selector = $(`android=${testID}`)
            return selector
        }
    }

    get onboardingScreenSlide1Text() {
        if (this.OS === 'iOS') {
            return helpers.createContentSelector("De hele stad bekijken of alleen uw adres? Bepaal het in de app.")
        }
        else {
            const testID = 'new UiSelector().text("De hele stad bekijken of alleen uw adres? Bepaal het in de app.").className("android.widget.TextView")'
            const selector = $(`android=${testID}`)
            return selector
        }
    }

    get onboardingScreenSlide2Title() {
        if (this.OS === 'iOS') {
            return helpers.createContentSelector('Relevant')
        }
        else {
            const testID = 'new UiSelector().text("Relevant").className("android.view.View")'
            const selector = $(`android=${testID}`)
            return selector
        }
    }

    get onboardingScreenSlide2Text() {
        if (this.OS === 'iOS') {
            return helpers.createContentSelector("Kies zelf wat u in de app wilt zien.")
        }
        else {
            const testID = 'new UiSelector().text("Kies zelf wat u in de app wilt zien.").className("android.widget.TextView")'
            const selector = $(`android=${testID}`)
            return selector
        }
    }

    get onboardingScreenSlide3Title() {
        if (this.OS === 'iOS') {
            return helpers.createContentSelector('Afvalwijzer')
        }
        else {
            const testID = 'new UiSelector().text("Afvalwijzer").className("android.view.View")'
            const selector = $(`android=${testID}`)
            return selector
        }
    }

    get onboardingScreenSlide3Text() {
        if (this.OS === 'iOS') {
            return helpers.createContentSelector("Praktische informatie over afval altijd bij de hand.")
        }
        else {
            const testID = 'new UiSelector().text("Praktische informatie over afval altijd bij de hand.").className("android.widget.TextView")'
            const selector = $(`android=${testID}`)
            return selector
        }
    }

    get onboardingScreenSlide4Title() {
        if (this.OS === 'iOS') {
            return helpers.createContentSelector("Werkzaamheden")
        }
        else {
            const testID = 'new UiSelector().text("Werkzaamheden").className("android.view.View")'
            const selector = $(`android=${testID}`)
            return selector
        }
    }

    get onboardingScreenSlide4Text() {
        if (this.OS === 'iOS') {
            return helpers.createContentSelector("Bekijk waar wij aan het werk zijn.")
        }
        else {
            const testID = 'new UiSelector().text("Bekijk waar wij aan het werk zijn.").className("android.widget.TextView")'
            const selector = $(`android=${testID}`)
            return selector
        }
    }

    get onboardingScreenSlide5Title() {
        if (this.OS === 'iOS') {
            return helpers.createContentSelector("Melding doen")
        }
        else {
            const testID = 'new UiSelector().text("Melding doen").className("android.view.View")'
            const selector = $(`android=${testID}`)
            return selector
        }
    }

    get onboardingScreenSlide5Text() {
        if (this.OS === 'iOS') {
            return helpers.createContentSelector("Overlast? Iets kapot? Vertel het ons via de app.")
        }
        else {
            const testID = 'new UiSelector().text("Overlast? Iets kapot? Vertel het ons via de app.").className("android.widget.TextView")'
            const selector = $(`android=${testID}`)
            return selector
        }
    }

    get onboardingScreenPagineationZero() {
        return helpers.createSelector('Pagination0')
    }

    get onboardingScreenPagineationOne() {
        return helpers.createSelector('Pagination1')
    }

    get onboardingScreenPagineationTwo() {
        return helpers.createSelector('Pagination2')
    }

    get onboardingScreenPagineationThree() {
        return helpers.createSelector('Pagination3')
    }

    get onboardingScreenPagineationFour() {
        return helpers.createSelector('Pagination4')
    }

    get onboardingScreenPagineationFive() {
        return helpers.createSelector('Pagination5')
    }

    async closeOnboarding() {
        for (let i = 0; i < 5; i++) {
            await this.nextButtonSelector.click()
        }
        await this.letsGoButton.click()
    }

    async checkOnboardingSlides() {
        await this.nextButtonSelector.click()
        await expect(this.onboardingScreenSlide1Title).toBeDisplayed()
        await expect(this.onboardingScreenSlide1Text).toBeDisplayed()
        await expect(this.onboardingScreenPagineationOne).toBeDisplayed()
        await this.nextButtonSelector.click()
        await expect(this.onboardingScreenSlide2Title).toBeDisplayed()
        await expect(this.onboardingScreenSlide2Text).toBeDisplayed()
        await expect(this.onboardingScreenPagineationTwo).toBeDisplayed()
        await this.nextButtonSelector.click()
        await expect(this.onboardingScreenSlide3Title).toBeDisplayed()
        await expect(this.onboardingScreenSlide3Text).toBeDisplayed()
        await expect(this.onboardingScreenPagineationThree).toBeDisplayed()
        await this.nextButtonSelector.click()
        await expect(this.onboardingScreenSlide4Title).toBeDisplayed()
        await expect(this.onboardingScreenSlide4Text).toBeDisplayed()
        await expect(this.onboardingScreenPagineationFour).toBeDisplayed()
        await this.nextButtonSelector.click()
        await expect(this.onboardingScreenSlide5Title).toBeDisplayed()
        await expect(this.onboardingScreenSlide5Text).toBeDisplayed()
        await expect(this.onboardingScreenPagineationFive).toBeDisplayed()
    }


}

export default new OnboardingScreen();