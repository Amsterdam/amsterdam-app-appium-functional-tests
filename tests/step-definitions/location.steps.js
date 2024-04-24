import { Then, When } from "@wdio/cucumber-framework";
import chai from "chai";
import constructionWorkScreen from "../screenobjects/construction-work.screen.js";
import homeScreen from "../screenobjects/home.screen.js";
import permissionsScreen from "../screenobjects/permissions.screen.js";
import profileScreen from "../screenobjects/profile.screen.js";
import wasteGuideScreen from "../screenobjects/waste-guide.screen.js";

const OS = driver.capabilities.platformName

const locationsIOS = ['Mijn huidige locatie, In de buurt van Zeedijk 5', 'Mijn huidige locatie, In de buurt van Viergrenzenweg 97', 'Mijn huidige locatie, In de buurt van Vliehors 1', 'Mijn huidige locatie, In de buurt van "n Tip 1', 'Mijn huidige locatie, In de buurt van Ruhenbergerweg 35', 'Mijn huidige locatie, In de buurt van Nieuwe Statenzijl 23']
const locationsAndroid = ['In de buurt van Zeedijk 5', 'In de buurt van Viergrenzenweg 97', 'In de buurt van Vliehors 1', 'In de buurt van "n Tip 1', 'In de buurt van Ruhenbergerweg 35', 'In de buurt van Nieuwe Statenzijl 23']
//chai.expect(attr).to.be.oneOf(locationsIOS)

//When
When(/ik geef mijn locatie door/, async () => {
    await constructionWorkScreen.constructionWorkRequestLocationButton.click()
    await profileScreen.selectLocationTypeBottomSheet.waitForDisplayed(5000)
    await profileScreen.bottomSheetSelectLocationButton.click()
    if (OS === 'iOS') {
        await permissionsScreen.iosAllowWhileUsingAppButton.click()
    } else {
        await permissionsScreen.androidAllowWhileUsingAppButton.click()
    }
})


//Then
Then(/mijn locatie wordt gebruikt voor het tonen van werkzaamheden/, async () => {
    await constructionWorkScreen.constructionWorkRequestLocationButton.waitForDisplayed(5000)
    if (OS === 'iOS') {
        await driver.pause(15000)
        const locationButtonLabel = await constructionWorkScreen.constructionWorkRequestLocationButton.getAttribute("label")
        console.log(await locationButtonLabel)
        chai.expect(locationButtonLabel).to.be.oneOf(locationsIOS)
    }
    else {
        await driver.pause(15000)
        const locationText = await constructionWorkScreen.constructionWorkRequestLocationButtonText.getText()
        console.log(await locationText)
        chai.expect(locationText).to.be.oneOf(locationsAndroid)
    }
    await constructionWorkScreen.headerBackButton.click()
    await homeScreen.homeWasteGuideModuleButton.click()
    await expect(homeScreen.headerTitle).toHaveText('Afvalwijzer')
    await wasteGuideScreen.wasteGuideRequestLocationButton.waitForDisplayed(20000)
    if (OS === 'iOS') {
        await driver.pause(15000)
        const locationButtonLabel = await wasteGuideScreen.wasteGuideRequestLocationButton.getAttribute("label")
        console.log(await locationButtonLabel)
        chai.expect(locationButtonLabel).to.be.oneOf(locationsIOS)
    }
    else {
        await driver.pause(15000)
        const locationText = await constructionWorkScreen.constructionWorkRequestLocationButtonText.getText()
        console.log(await locationText)
        chai.expect(locationText).to.be.oneOf(locationsAndroid)
    }
    await wasteGuideScreen.wasteGuideNotFoundMessage.waitForDisplayed(20000)
    await wasteGuideScreen.wasteGuideNotFoundMistakeButton.waitForDisplayed(20000)
})

