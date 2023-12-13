import { Given, Then, When } from "@wdio/cucumber-framework";
import aboutScreen from "../screenobjects/about.screen.js";
import homeScreen from "../screenobjects/home.screen.js";
import onboardingScreen from "../screenobjects/onboarding.screen.js";

//Given
Given(/de onboarding opent/, async () => {
    await expect(onboardingScreen.nextButtonSelector).toBeDisplayed()
    await onboardingScreen.checkOnboardingSlideZero()
})

When(/sluit de onboarding middels de (.*) button/, async (button) => {
    if (button === 'sluiten') {
        await onboardingScreen.onboardingCloseButton.click()
    }
    else {
        await onboardingScreen.letsGoButton.click()
    }
})

When(/ik open de onboarding/, async () => {
    await aboutScreen.aboutOnboardingButton.click()
})

Then(/ik kan door de onboarding swipen/, async () => {
})

Then(/ik kan door de onboarding navigeren middels de volgende knop/, async () => {
    await onboardingScreen.checkOnboardingSlides()
})

Then(/ik kan door de onboarding navigeren middels het bolletjesmenu/, async () => {
    await onboardingScreen.onboardingScreenPagineationFour.click()
    await onboardingScreen.onboardingScreenPagineationThree.click()
    await onboardingScreen.onboardingScreenPagineationTwo.click()
    await onboardingScreen.onboardingScreenPagineationOne.click()
    await onboardingScreen.onboardingScreenPagineationZero.click()
    await onboardingScreen.onboardingScreenPagineationFive.click()
})

Then(/ik zie het homescherm/, async () => {
    await expect(homeScreen.homeAboutModuleButton).toBeDisplayed()
})

Then(/de onboarding caroussel start/, async () => {
    await onboardingScreen.checkOnboardingSlideZero()
})