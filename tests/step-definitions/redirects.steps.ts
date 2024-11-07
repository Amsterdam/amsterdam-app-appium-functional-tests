import {When} from '@wdio/cucumber-framework'
import HomeScreen from '../screenobjects/home.screen.ts'

When(/ik open de Direct regelen module/, async () => {
  await HomeScreen.homeRedirectsModuleButton.click()
  await expect(HomeScreen.headerTitle).toHaveText('Direct regelen')
})
