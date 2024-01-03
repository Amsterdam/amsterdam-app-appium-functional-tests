export const user = process.env.BROWSERSTACK_USERNAME
export const key = process.env.BROWSERSTACK_ACCESS_KEY
export const bsUrliOS = process.env.BROWSERSTACK_APP_ID
export const bsUrlAndroid = process.env.BROWSERSTACK_APP_ID
export const username = process.env.WEB_USERNAME
export const password = process.env.WEB_PASSWORD
export const appiumVersion = '2.0.1'
export const projectName = 'amsterdam-app'
export const buildNumber = process.env.VERSION_NUMBER
export const runNumber = process.env.RELEASE_ATTEMPTNUMBER
export const buildNameIosTablet = `Build ${buildNumber} - iOS - run ${runNumber}`
export const buildNameIosMobile = `Build ${buildNumber} - iOS - run ${runNumber}`
export const buildNameAndroidTablet = `Build ${buildNumber} - Android - run ${runNumber}`
export const buildNameAndroidMobile = `Build ${buildNumber} - Android - run ${runNumber}`