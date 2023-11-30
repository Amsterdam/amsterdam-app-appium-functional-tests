import { config as sharedconfig } from "../shared/wdio.conf.shared.js";

sharedconfig.exclude = [
    //"../../tests/features/functional/notifications.feature",
    "../../tests/features/functional/settings.feature",
    "../../tests/features/functional/mijnprofiel.feature",
    "../../tests/features/functional/construction-work.feature",
    "../../tests/features/functional/contact.feature",
    "../../tests/features/functional/waste-guide.feature",
    "../../tests/features/visual-percy/construction-work.feature",
    "../../tests/features/visual-percy/contact.feature",
    "../../tests/features/visual-percy/about.feature",
    "../../tests/features/visual-percy/contact.feature",
    "../../tests/features/visual-percy/open-waste-container.feature",
    "../../tests/features/visual-percy/redirects.feature",
    "../../tests/features/visual-percy/report-problem.feature",
    "../../tests/features/visual-percy/waste-guide.feature",
    "../../tests/features/functional/launchapp.feature",
    "../../tests/features/location-features/my-location-waste-guide-android.feature",
    "../../tests/features/location-features/my-location-construction-work-android.feature"
]

//
sharedconfig.capabilities = [
    {
        'appium:platformName': 'iOS',
        'appium:platformVersion': '17.0',
        'appium:deviceName': 'iPhone 11',
        //'appium:platformVersion': '16.3.1',
        //This should be the exact same name from the device you use in the Android Emulator
        'appium:automationName': 'XCUITest',
        //'appium:app': 'nl.amsterdam.app.dev',
        'appium:app': 'app/iOS/Amsterdam test.app',
        'appium:autoAcceptAlerts': false,
    },
    //real device
    // {
    //     'appium:platformName': 'iOS',
    //     'appium:platformVersion': '16.5.1',
    //     'appium:deviceName': deviceName,
    //     'appium:automationName': 'XCUITest',
    //     'appium:bundleId': 'nl.amsterdam.app.dev',
    //     'appium:udid': udid,
    //     'appium:xcodeOrgId': xcodeOrgId,
    //     'appum: xcodeSigningId': xcodeSigningId,
    //     //'appium:app': 'app/iOS/AmsterdamTest.ipa',
    //     'appium: updatedWDABundleid': 'nl.amsterdam.app.dev',
    //     'appium:autoAcceptAlerts': true
    // },
]

sharedconfig.services = ['appium']

export const config = sharedconfig;