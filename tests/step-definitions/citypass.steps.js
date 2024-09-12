import { Given, Then, When } from '@wdio/cucumber-framework';
import { getTokens } from '../../initSession.js';
import citypassScreen from '../screenobjects/citypass.screen.js';
import { default as HomeScreen, default as homeScreen } from '../screenobjects/home.screen.js';
import helpers from '../Shared/helpers/helpers.js';
import { openDeepLinkUrl } from '../Shared/helpers/openDeeplink.js';

const OS = driver.capabilities.platformName

Given(/ik login via deepLink/, async () => {
    console.log(tokens)
    // open deeplink
    await HomeScreen.getHomeScreen()
    await citypassScreen.homeCityPassModuleButton.click()
    const {accessToken, refreshToken} = await getTokens()
    const cityPassLoginDeepLink = `amsterdam://stadspas/gelukt/${accessToken}/${refreshToken}`
    await openDeepLinkUrl(cityPassLoginDeepLink)
    await driver.pause(10000)
})

Given(/ik login via de browser/, async () => {
    const screensize = await driver.getWindowRect()
    //console.log(screensize)
    await HomeScreen.getHomeScreen()
    await helpers.switchEnv('TEST')
    await citypassScreen.homeCityPassModuleButton.click()
    await citypassScreen.cityPassLoginButton.click()
    await driver.pause(5000)

    if (OS === 'iOS') {
        //sso login iOS
        // await ssoScreen.ssoUsernameInput.addValue(adwUsername)
        // //await gestures.hitEnter()
        // await ssoScreen.ssoNextButton.click()
        // await driver.pause(2000)
        // await ssoScreen.ssoPasswordInput.click()
        // await ssoScreen.ssoPasswordInput.addValue(adwPassword)
        // //await gestures.hitEnter()
        // await ssoScreen.ssoNextButton.click()
        // await driver.pause(2000)
        // await ssoScreen.ssoSignInButton.click()
        // await ssoScreen.ssoUseOtherMFA.click()
        // await driver.pause(2000)
        // await ssoScreen.useVerificationCodeButton.click()
        // await driver.pause(2000)
        // await ssoScreen.totpInput.click()
        // await driver.pause(2000)
        // const { otp } = TOTP.generate(adwSecret)
        // console.log(otp)
        // await ssoScreen.totpInput.addValue(otp)
        // await ssoScreen.verifyButton.click()
        // await driver.pause(2000)
        await citypassScreen.testaccountMarga02.click()
        await homeScreen.openDeepLinkSafari.click()
        await citypassScreen.cityPassLoggedInAlertPositive.waitForDisplayed(10000)
    } else {
        //sso login Android 
        // await ssoScreen.ssoUsernameInput.addValue(adwUsername)
        // await gestures.hitEnter()
        // await driver.pause(2000)
        // await ssoScreen.ssoPasswordInput.click()
        // await ssoScreen.ssoPasswordInput.addValue(adwPassword)
        // await gestures.hitEnter()
        // await driver.pause(2000)
        //await ssoScreen.ssoSignInButton.click()
        //Deze onderstaande stap werkt nu niet, omdat er alleen een algemeeen webview element is om op te klikken
        //await ssoScreen.ssoUseOtherMFA.click()
        // await driver.pause(2000)
        // await ssoScreen.useVerificationCodeButton.click()
        // await driver.pause(2000)
        // await ssoScreen.totpInput.click()
        // await driver.pause(2000)
        // const { otp } = TOTP.generate(adwSecret)
        // console.log(otp)
        // await ssoScreen.totpInput.addValue(otp)
        // await ssoScreen.verifyButton.click()
        // await driver.pause(2000)
        // await citypassScreen.testaccountMarga02.click()
    }
})

Then(/ik zie het overzicht met mijn stadspassen/, async () => {
    await expect(citypassScreen.cityPassShowPassesButton).toBeDisplayed()
    await expect(citypassScreen.cityPassOwnerButtonMarga).toBeDisplayed()
    await expect(citypassScreen.cityPassOwnerButtonJan).toBeDisplayed()
    await expect(citypassScreen.cityPassOwnerButtonChelsea).toBeDisplayed()
    await expect(citypassScreen.cityPassOwnerButtonMini).toBeDisplayed()
})

When(/ik open de stadspas details van een volwassene/, async () => {
    await citypassScreen.cityPassOwnerButtonMarga.click()
})

Then(/ik zie de stadspas details van een volwassene/, async () => {
    //beginnen met wachten op dit element, dan weten we dat de pagina geladen is
    await citypassScreen.cityPassTransactionHistoryTableHeader.waitForDisplayed(10000)
    await expect(citypassScreen.cityPassCityPassDetailsTitle).toBeDisplayed()
    await expect(citypassScreen.cityPassCityPassDetailsSubtitle).toBeDisplayed()
    await expect(citypassScreen.cityPassDetailScreenCopyButton).toBeDisplayed()
    await expect(citypassScreen.cityPassCityPassDetailsExpiryDate).toBeDisplayed()
})


When(/^ik open de stadspas details van kind (.*)$/, async naam => {
    if (naam === 'Chelsea') {
        await citypassScreen.cityPassOwnerButtonChelsea.click()
    } else {
        await citypassScreen.cityPassOwnerButtonMini.click()
    }
})

Then(/^ik zie de stadspas details van kind (.*)$/, async naam => {
    if (naam === 'Chelsea') {
        await citypassScreen.cityPassKindtegoed10_11Button.waitForDisplayed(10000)
        await expect(citypassScreen.cityPassKindtegoed4_9Button).toBeDisplayed()
    } else {
        await citypassScreen.cityPassKindtegoed10_11Button.waitForDisplayed(10000)
        await expect(citypassScreen.cityPassKindtegoed0_3Button).toBeDisplayed()
    }
    await expect(citypassScreen.cityPassCityPassDetailsTitle).toBeDisplayed()
    await expect(citypassScreen.cityPassCityPassDetailsSubtitle).toBeDisplayed()
    await expect(citypassScreen.cityPassDetailScreenCopyButton).toBeDisplayed()
    await expect(citypassScreen.cityPassCityPassDetailsExpiryDate).toBeDisplayed()
})

When(/^ik open het kindtegoed overzicht (.*)$/, async (kindtegoed) => {
    if (kindtegoed === 'kindtegoed_10_11') {
        await citypassScreen.cityPassKindtegoed10_11Button.click()
    } else if (kindtegoed === 'kindtegoed_4_9') {
        await citypassScreen.cityPassKindtegoed4_9Button.click()
    } else {
        await citypassScreen.cityPassKindtegoed0_3Button.click()
    }
})

Then(/^ik zie een betalingen overzicht horend bij (.*)$/, async kindtegoed => {
    if (kindtegoed === 'kindtegoed_10_11') {
        await citypassScreen.cityPassTransactionHistoryNoTransactions.waitForDisplayed(10000)
        await expect(citypassScreen.cityPassBalanceTitleLabel).toBeDisplayed()
        await expect(citypassScreen.cityPassBalanceTitleValue).toBeDisplayed()
        await expect(citypassScreen.betalingenTitle).toBeDisplayed()
        await expect(citypassScreen.cityPassTransactionHistoryTableHeader).toBeDisplayed()
    } else if (kindtegoed === 'kindtegoed_4_9') {
        await citypassScreen.transactions.waitForDisplayed(10000)
        await expect(citypassScreen.cityPassBalanceTitleLabel).toBeDisplayed()
        await expect(citypassScreen.cityPassBalanceTitleValue).toBeDisplayed()
        await expect(citypassScreen.betalingenTitle).toBeDisplayed()
        await expect(citypassScreen.cityPassTransactionHistoryTableHeader).toBeDisplayed()
    } else {
        await citypassScreen.cityPassTransactionHistoryNoTransactions.waitForDisplayed(10000)
        await expect(citypassScreen.cityPassBalanceTitleLabel).toBeDisplayed()
        await expect(citypassScreen.cityPassBalanceTitleValue).toBeDisplayed()
        await expect(citypassScreen.betalingenTitle).toBeDisplayed()
        await expect(citypassScreen.cityPassTransactionHistoryTableHeader).toBeDisplayed()
    }
})

