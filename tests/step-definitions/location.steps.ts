import {Then, When} from '@wdio/cucumber-framework'
import * as chai from 'chai'
import constructionWorkScreen from '../screenobjects/construction-work.screen.ts'
import homeScreen from '../screenobjects/home.screen.ts'
import permissionsScreen from '../screenobjects/permissions.screen.ts'
import profileScreen from '../screenobjects/profile.screen.ts'
import wasteGuideScreen from '../screenobjects/waste-guide.screen.ts'

// @ts-ignore
const OS = driver.capabilities.platformName

const locationsArray = [
  'Mijn huidige locatie, In de buurt van Zeedijk 5',
  'Mijn huidige locatie, In de buurt van Viergrenzenweg 97',
  'Mijn huidige locatie, In de buurt van Vliehors 1',
  "Mijn huidige locatie, In de buurt van 'n Tip 1",
  'Mijn huidige locatie, In de buurt van Ruhenbergerweg 35',
  'Mijn huidige locatie, In de buurt van Nieuwe Statenzijl 23',
]
const locationsAndroid = [
  'In de buurt van Zeedijk 5',
  'In de buurt van Viergrenzenweg 97',
  'In de buurt van Vliehors 1',
  'In de buurt van "n Tip 1',
  'In de buurt van Ruhenbergerweg 35',
  'In de buurt van Nieuwe Statenzijl 23',
]
//chai.expect(attr).to.be.oneOf(locationsArray)

//When
When(/ik geef mijn locatie door/, async () => {
  await constructionWorkScreen.constructionWorkRequestLocationButton.click()
  await profileScreen.selectLocationTypeBottomSheet.waitForDisplayed({
    timeout: 5000,
  })
  await profileScreen.bottomSheetSelectLocationButton.click()
  if (OS === 'iOS') {
    await permissionsScreen.iosAllowWhileUsingAppButton.click()
  } else {
    await permissionsScreen.androidAllowWhileUsingAppButton.click()
  }
})

//Then
Then(
  /mijn locatie wordt gebruikt voor het tonen van werkzaamheden/,
  async () => {
    await constructionWorkScreen.constructionWorkRequestLocationButton.waitForDisplayed(
      {timeout: 5000},
    )
    if (OS === 'iOS') {
      await driver.pause(15000)
      const locationButtonLabel =
        await constructionWorkScreen.constructionWorkRequestLocationButton.getAttribute(
          'label',
        )
      console.log(await locationButtonLabel)
      chai.expect(locationButtonLabel).to.be.oneOf(locationsArray)
      //await expect(await constructionWorkScreen.constructionWorkRequestLocationButton).toHaveAttribute('label', 'Mijn huidige locatie, In de buurt van Zeedijk 5' || 'label', 'Mijn huidige locatie, In de buurt van Viergrenzenweg 97' || 'label', 'Mijn huidige locatie, In de buurt van Vliehors 1' || 'label', 'Mijn huidige locatie, In de buurt van "n Tip 1')
    } else {
      await driver.pause(10000)
      //const locationText = await constructionWorkScreen.constructionWorkRequestLocationButtonText.getText()
      const locationText =
        await constructionWorkScreen.constructionWorkRequestLocationButton.getAttribute(
          'content-desc',
        )
      console.log(await locationText)
      chai.expect(locationText).to.be.oneOf(locationsArray)
      //chai.expect(locationText).to.be.oneOf(locationsAndroid)
    }
    await constructionWorkScreen.headerBackButton.click()
    await homeScreen.homeWasteGuideModuleButton.click()
    await expect(homeScreen.headerTitle).toHaveText('Afvalwijzer')
    await wasteGuideScreen.wasteGuideRequestLocationButton.waitForDisplayed({
      timeout: 20000,
    })
    if (OS === 'iOS') {
      await driver.pause(15000)
      const locationButtonLabel =
        await wasteGuideScreen.wasteGuideRequestLocationButton.getAttribute(
          'label',
        )
      console.log(await locationButtonLabel)
      chai.expect(locationButtonLabel).to.be.oneOf(locationsArray)
      //await expect(await wasteGuideScreen.wasteGuideRequestLocationButton).toHaveAttribute('label', 'Mijn huidige locatie, In de buurt van Zeedijk 5' || 'label', 'Mijn huidige locatie, In de buurt van Viergrenzenweg 97' || 'label', 'Mijn huidige locatie, In de buurt van Vliehors 1' || 'label', 'Mijn huidige locatie, In de buurt van "n Tip 1')
    } else {
      await driver.pause(10000)
      //const locationText = await wasteGuideScreen.wasteGuideRequestLocationButtonText.getText()
      const locationText =
        await wasteGuideScreen.wasteGuideRequestLocationButton.getAttribute(
          'content-desc',
        )
      console.log(await locationText)
      //chai.expect(locationText).to.be.oneOf(locationsAndroid)
      chai.expect(locationText).to.be.oneOf(locationsArray)
    }
    await wasteGuideScreen.wasteGuideNotFoundMessage.waitForDisplayed({
      timeout: 20000,
    })
    await wasteGuideScreen.wasteGuideNotFoundMistakeButton.waitForDisplayed({
      timeout: 20000,
    })
  },
)
