// import { Given, Then, When } from '@wdio/cucumber-framework';
// import { TOTP } from 'totp-generator';
// import { adwPassword, adwSecret, adwUsername, passwordMA, usernameMA } from '../../credentials.js';
// import { getTokens } from '../../initSession.js';
// import citypassScreen from '../screenobjects/citypass.screen.ts';
// import HomeScreen from '../screenobjects/home.screen.ts';
// import safariScreen from '../screenobjects/safari.screen.ts';
// import SsoScreen, { default as ssoScreenScreen } from '../screenobjects/ssoScreen.screen.ts';
// import { openDeepLinkUrl } from '../Shared/helpers/openDeeplink.ts';

// const OS = driver.capabilities.platformName

// Given(/ik login via deepLink/, async () => {
//     //console.log(tokens)
//     // open deeplink
//     await HomeScreen.getHomeScreen()
//     await citypassScreen.homeCityPassModuleButton.click()
//     const { accessToken, refreshToken } = await getTokens()
//     const cityPassLoginDeepLink = `amsterdam://stadspas/gelukt/${accessToken}/${refreshToken}`
//     await openDeepLinkUrl(cityPassLoginDeepLink)
//     await driver.pause(10000)
// })

// Given(/ik login via de browser/, async () => {
//     const screensize = await driver.getWindowRect()
//     //console.log(screensize)
//     await HomeScreen.getHomeScreen()
//     //await helpers.switchEnv('TEST')
//     await citypassScreen.homeCityPassModuleButton.click()
//     await citypassScreen.cityPassLoginButton.click()
//     await driver.pause(5000)

//     if (OS === 'iOS') {
//         //sso login iOS
//         await SsoScreen.ssoUsernameInput.click()
//         await SsoScreen.ssoUsernameInput.keys(adwUsername)
//         //await gestures.hitEnter()
//         await SsoScreen.ssoNextButton.click()
//         await driver.pause(2000)
//         await SsoScreen.ssoPasswordInput.click()
//         await SsoScreen.ssoPasswordInput.keys(adwPassword)
//         //await gestures.hitEnter()
//         await SsoScreen.ssoNextButton.click()
//         await driver.pause(2000)
//         await SsoScreen.ssoSignInButton.click()
//         await SsoScreen.ssoUseOtherMFA.waitForDisplayed({timeout:10000});
//         await SsoScreen.ssoUseOtherMFA.click()
//         let isDisplayed = await SsoScreen.useVerificationCodeButton.isDisplayed()
//         const clickWhileNotDisplayed = async () => {
//             while (isDisplayed === false) {
//                 await SsoScreen.ssoUseOtherMFA.click()
//                 isDisplayed = await SsoScreen.useVerificationCodeButton.isDisplayed()
//             }
//         }
//         clickWhileNotDisplayed()
//         await driver.pause(2000)
//         await SsoScreen.useVerificationCodeButton.click()
//         await driver.pause(2000)
//         await SsoScreen.totpInput.click()
//         await driver.pause(2000)
//         const { otp } = TOTP.generate(adwSecret)
//         console.log(otp)
//         await SsoScreen.totpInput.keys(otp)
//         await SsoScreen.verifyButton.click()
//         await driver.pause(2000)
//         await ssoScreenScreen.digidLoginUsernameButton.waitForDisplayed({timeout:10000});
//         await ssoScreenScreen.digidLoginUsernameButton.click()
//         await ssoScreenScreen.digidLoginUsernameField.keys(usernameMA)
//         await ssoScreenScreen.digidLoginPasswordField.keys(passwordMA)
//         await ssoScreenScreen.digidLoginButton.click()
//         // await citypassScreen.testaccountMarga02.click()
//         // await HomeScreen.openDeepLinkSafari.click()
//         await safariScreen.openDeeplink.click()
//         await citypassScreen.cityPassLoggedInAlertPositive.waitForDisplayed({timeout:10000});
//     } else {
//         //sso login Android
//         // await SsoScreen.ssoUsernameInput.addValue(adwUsername)
//         // await gestures.hitEnter()
//         // await driver.pause(2000)
//         // await SsoScreen.ssoPasswordInput.click()
//         // await SsoScreen.ssoPasswordInput.addValue(adwPassword)
//         // await gestures.hitEnter()
//         // await driver.pause(2000)
//         //await SsoScreen.ssoSignInButton.click()
//         //Deze onderstaande stap werkt nu niet, omdat er alleen een algemeeen webview element is om op te klikken
//         //await SsoScreen.ssoUseOtherMFA.click()
//         // await driver.pause(2000)
//         // await SsoScreen.useVerificationCodeButton.click()
//         // await driver.pause(2000)
//         // await SsoScreen.totpInput.click()
//         // await driver.pause(2000)
//         // const { otp } = TOTP.generate(adwSecret)
//         // console.log(otp)
//         // await SsoScreen.totpInput.addValue(otp)
//         // await SsoScreen.verifyButton.click()
//         // await driver.pause(2000)
//         // await citypassScreen.testaccountMarga02.click()
//     }
// })

// Then(/ik zie het overzicht met mijn stadspassen/, async () => {
//     await expect(citypassScreen.cityPassShowPassesButton).toBeDisplayed()
//     await expect(citypassScreen.cityPassOwnerButtonMarga).toBeDisplayed()
//     await expect(citypassScreen.cityPassOwnerButtonJan).toBeDisplayed()
//     await expect(citypassScreen.cityPassOwnerButtonChelsea).toBeDisplayed()
//     await expect(citypassScreen.cityPassOwnerButtonMini).toBeDisplayed()
// })

// When(/ik open de stadspas details van een volwassene/, async () => {
//     await citypassScreen.cityPassOwnerButtonMarga.click()
// })

// Then(/ik zie de stadspas details van een volwassene/, async () => {
//     //beginnen met wachten op dit element, dan weten we dat de pagina geladen is
//     await citypassScreen.cityPassTransactionHistoryTableHeader.waitForDisplayed({timeout:10000});
//     await expect(citypassScreen.cityPassCityPassDetailsTitle).toBeDisplayed()
//     await expect(citypassScreen.cityPassCityPassDetailsSubtitle).toBeDisplayed()
//     await expect(citypassScreen.cityPassDetailScreenCopyButton).toBeDisplayed()
//     await expect(citypassScreen.cityPassCityPassDetailsExpiryDate).toBeDisplayed()
// })

// When(/^ik open de stadspas details van kind (.*)$/, async naam => {
//     if (naam === 'Chelsea') {
//         await citypassScreen.cityPassOwnerButtonChelsea.click()
//     } else {
//         await citypassScreen.cityPassOwnerButtonMini.click()
//     }
// })

// Then(/^ik zie de stadspas details van kind (.*)$/, async naam => {
//     if (naam === 'Chelsea') {
//         await citypassScreen.cityPassKindtegoed10_11Button.waitForDisplayed({timeout:10000});
//         await expect(citypassScreen.cityPassKindtegoed4_9Button).toBeDisplayed()
//     } else {
//         await citypassScreen.cityPassKindtegoed10_11Button.waitForDisplayed({timeout:10000});
//         await expect(citypassScreen.cityPassKindtegoed0_3Button).toBeDisplayed()
//     }
//     await expect(citypassScreen.cityPassCityPassDetailsTitle).toBeDisplayed()
//     await expect(citypassScreen.cityPassCityPassDetailsSubtitle).toBeDisplayed()
//     await expect(citypassScreen.cityPassDetailScreenCopyButton).toBeDisplayed()
//     await expect(citypassScreen.cityPassCityPassDetailsExpiryDate).toBeDisplayed()
// })

// When(/^ik open het kindtegoed overzicht (.*)$/, async (kindtegoed) => {
//     if (kindtegoed === 'kindtegoed_10_11') {
//         await citypassScreen.cityPassKindtegoed10_11Button.click()
//     } else if (kindtegoed === 'kindtegoed_4_9') {
//         await citypassScreen.cityPassKindtegoed4_9Button.click()
//     } else {
//         await citypassScreen.cityPassKindtegoed0_3Button.click()
//     }
// })

// Then(/^ik zie een betalingen overzicht horend bij (.*)$/, async kindtegoed => {
//     if (kindtegoed === 'kindtegoed_10_11') {
//         await citypassScreen.cityPassTransactionHistoryNoTransactions.waitForDisplayed({timeout:10000});
//         await expect(citypassScreen.cityPassBalanceTitleLabel).toBeDisplayed()
//         await expect(citypassScreen.cityPassBalanceTitleValue).toBeDisplayed()
//         await expect(citypassScreen.betalingenTitle).toBeDisplayed()
//         await expect(citypassScreen.cityPassTransactionHistoryTableHeader).toBeDisplayed()
//     } else if (kindtegoed === 'kindtegoed_4_9') {
//         await citypassScreen.transactions.waitForDisplayed({timeout:10000});
//         await expect(citypassScreen.cityPassBalanceTitleLabel).toBeDisplayed()
//         await expect(citypassScreen.cityPassBalanceTitleValue).toBeDisplayed()
//         await expect(citypassScreen.betalingenTitle).toBeDisplayed()
//         await expect(citypassScreen.cityPassTransactionHistoryTableHeader).toBeDisplayed()
//     } else {
//         await citypassScreen.cityPassTransactionHistoryNoTransactions.waitForDisplayed({timeout:10000});
//         await expect(citypassScreen.cityPassBalanceTitleLabel).toBeDisplayed()
//         await expect(citypassScreen.cityPassBalanceTitleValue).toBeDisplayed()
//         await expect(citypassScreen.betalingenTitle).toBeDisplayed()
//         await expect(citypassScreen.cityPassTransactionHistoryTableHeader).toBeDisplayed()
//     }
// })
