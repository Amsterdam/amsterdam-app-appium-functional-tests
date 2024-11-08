import {When} from '@wdio/cucumber-framework'
import HomeScreen from '../screenobjects/home.screen.ts'

When(/ik open de Melding doen module/, async () => {
  await HomeScreen.homeReportProblemModuleButton.click()
  await expect(HomeScreen.headerTitle).toHaveText('Melding doen')
})
