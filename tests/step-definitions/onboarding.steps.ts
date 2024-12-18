import {Given, Then, When} from '@wdio/cucumber-framework'
import GesturesScreen from '../Shared/helpers/gesturesv2.ts'
import aboutScreen from '../screenobjects/about.screen.ts'
import homeScreen from '../screenobjects/home.screen.ts'
import onboardingScreen from '../screenobjects/onboarding.screen.ts'

Given(/de onboarding opent/, async () => {
  await expect(onboardingScreen.nextButtonSelector).toBeDisplayed()
  await onboardingScreen.checkOnboardingSlideZero()
})

When(/sluit de onboarding middels de (.*) button/, async button => {
  if (button === 'sluiten') {
    await onboardingScreen.onboardingCloseButton.click()
  } else {
    await onboardingScreen.letsGoButton.click()
  }
})

When(/ik open de onboarding/, async () => {
  await aboutScreen.aboutOnboardingButton.click()
})

Then(/ik kan door de onboarding swipen/, async () => {
  await driver.pause(2000)
  await onboardingScreen.checkOnboardingSlides('swipeLeft')
  await GesturesScreen.swipeRightSelector(
    onboardingScreen.onboardingScreenScrollView,
  )
  await expect(onboardingScreen.onboardingScreenSlide5Title).toBeDisplayed()
  await GesturesScreen.swipeRightSelector(
    onboardingScreen.onboardingScreenScrollView,
  )
  await expect(onboardingScreen.onboardingScreenSlide4Title).toBeDisplayed()
  await GesturesScreen.swipeRightSelector(
    onboardingScreen.onboardingScreenScrollView,
  )
  await expect(onboardingScreen.onboardingScreenSlide3Title).toBeDisplayed()
  await GesturesScreen.swipeRightSelector(
    onboardingScreen.onboardingScreenScrollView,
  )
  await expect(onboardingScreen.onboardingScreenSlide2Title).toBeDisplayed()
  await GesturesScreen.swipeRightSelector(
    onboardingScreen.onboardingScreenScrollView,
  )
  await expect(onboardingScreen.onboardingScreenSlide1Title).toBeDisplayed()
  await GesturesScreen.swipeRightSelector(
    onboardingScreen.onboardingScreenScrollView,
  )
  await expect(onboardingScreen.onboardingScreenSlide0Title).toBeDisplayed()
})

Then(
  /ik kan door de onboarding navigeren middels de volgende knop/,
  async () => {
    await onboardingScreen.checkOnboardingSlides('nextButton')
  },
)

Then(
  /ik kan door de onboarding navigeren middels het bolletjesmenu/,
  async () => {
    await onboardingScreen.onboardingScreenPagineationFour.click()
    await onboardingScreen.onboardingScreenPagineationThree.click()
    await onboardingScreen.onboardingScreenPagineationTwo.click()
    await onboardingScreen.onboardingScreenPagineationOne.click()
    await onboardingScreen.onboardingScreenPagineationZero.click()
    await onboardingScreen.onboardingScreenPagineationFive.click()
    await onboardingScreen.onboardingScreenPagineationSix.click()
  },
)

Then(/ik zie het homescherm/, async () => {
  await expect(homeScreen.homeAboutModuleButton).toBeDisplayed()
})

Then(/de onboarding carousel start/, async () => {
  await onboardingScreen.checkOnboardingSlideZero()
})
