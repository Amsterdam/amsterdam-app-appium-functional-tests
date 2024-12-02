import {Given, When} from '@wdio/cucumber-framework'
import HomeScreen from '../screenobjects/home.screen.ts'
import helpers from '../Shared/helpers/helpers.ts'
import {type Environments} from '../types/environments.ts'
import onboardingScreen from '../screenobjects/onboarding.screen.ts'

Given(/ik ben op het home scherm/, async () => {
  await HomeScreen.getHomeScreen()
})

Given(/ik ben op het contactscherm/, async () => {
  await HomeScreen.getHomeScreen()
  await HomeScreen.homeContactModuleButton.click()
  await expect(HomeScreen.headerTitle).toHaveText('Contact')
})

Given(
  /ik ben op de "(DEV|TEST|ACC|PROD)" omgeving/,
  async (environment: Environments) => {
    await HomeScreen.getHomeScreen()
    await helpers.switchEnv(environment)
    if (await onboardingScreen.nextButtonSelector.isDisplayed()) {
      await onboardingScreen.closeOnboarding()
    }
    await HomeScreen.getHomeScreen()
  },
)

When(/ik wacht (\d+) seconden?/, async (seconds: number) => {
  await driver.pause(seconds * 1000)
})
