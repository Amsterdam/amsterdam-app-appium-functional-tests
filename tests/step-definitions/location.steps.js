import { Then, When } from "@wdio/cucumber-framework";
import constructionWorkScreen from "../screenobjects/construction-work.screen.js";
import permissionsScreen from "../screenobjects/permissions.screen.js";
import profileScreen from "../screenobjects/profile.screen.js";
//Given
// Given(/ik geef geen toestemming om 'Mijn locatie' te delen bij werkzaamheden/, async () => {

// })
const OS = driver.capabilities.platformName

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
    if (OS === 'iOS') {
        const locationButtonLabel = await profileScreen.bottomSheetSelectLocationButton.getAttribute("label")
        console.log(await locationButtonLabel)
        const valueExist = await locationButtonLabel.match('In de buurt van Zeedijk 5')
        //expect(await valueExist).toEqual();
        console.log(await valueExist)
    }
    else {
        await expect(profileScreen.bottomSheetSelectLocationButtonText).toHaveText('In de buurt van Zeedijk 5')
    }
    await profileScreen.bottomSheetSelectLocationButton.click()

})


//Then
Then(/mijn locatie wordt gebruikt voor het tonen van werkzaamheden/, async () => {
    await constructionWorkScreen.constructionWorkChangeLocationButton.waitForDisplayed(5000)
    await expect(constructionWorkScreen.constructionWorkChangeLocationButtonTitle).toBeDisplayed()
    console.log(await constructionWorkScreen.constructionWorkChangeLocationButtonText)
    //await expect(constructionWorkScreen.constructionWorkChangeLocationButtonText).toHaveText('In de buurt van Zeedijk 5')
})

