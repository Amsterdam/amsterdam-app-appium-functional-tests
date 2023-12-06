import { Given, Then, When } from "@wdio/cucumber-framework";
import homeScreen from "../screenobjects/home.screen.js";
import onboardingScreen from "../screenobjects/onboarding.screen.js";

//Given
Given(/de onboarding opent/, async () => {
    await expect(onboardingScreen.nextButtonSelector).toBeDisplayed()
    await expect(onboardingScreen.onboardingScreenSlide0Title).toBeDisplayed()
    await expect(onboardingScreen.onboardingScreenSlide0Text).toBeDisplayed()
    await expect(onboardingScreen.onboardingScreenPagineationZero).toBeDisplayed()
})

When(/sluit de onboarding middels de (.*) button/, async (button) => {
    if (button === 'sluiten') {
    }
    else {
        await onboardingScreen.letsGoButton.click()
    }
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
    await onboardingScreen.onboardingScreenPagineationFive.click()
})

Then(/ik zie het homescherm/, async () => {
    await expect(homeScreen.homeAboutModuleButton).toBeDisplayed()
})