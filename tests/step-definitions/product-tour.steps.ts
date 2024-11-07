import {Then, When} from '@wdio/cucumber-framework'
import productTourScreen from '../screenobjects/product-tour.screen.ts'

const OS = driver.capabilities.platformName

Then(/(.*): ik zie een pop-up bij de knop/, async scherm => {
  if (OS === 'iOS') {
    await productTourScreen.checkPopUp(scherm)
  }
})

When(/(.*): ik tik op de pop-up/, async scherm => {
  if (OS === 'iOS') {
    await productTourScreen.clickPopUp(scherm)
  }
})

Then(/(.*): de pop-up verdwijnt/, async scherm => {
  if (OS === 'iOS') {
    await productTourScreen.checkPopUpDissapear(scherm)
  }
})
