import { config as sharedconfig } from "./wdio.conf.shared.js";

sharedconfig.capabilities = [
    // {
    //     platformName: "Android",
    //     "appium:platformVersion": "9.0",
    //     "appium:deviceName": "Google Pixel 3",
    //     "appium:app": bsUrlAndroid,
    //     "appium:noReset": "false",
    //     "bstack:options": {
    //         "projectName": "amsterdam-app-android",
    //         "buildName": "Sanity Check Eyes+functional App-version 0.32.0.5694",
    //         "appiumVersion": "2.0.0",
    //         //"deviceOrientation": "landscape",
    //     },
    // },Use this one
    {
        platformName: "Android",
        "appium:platformVersion": "12.0",
        "appium:deviceName": "Samsung Galaxy S22",
        "appium:app": bsUrlAndroid,
        "appium:noReset": "false",
        "bstack:options": {
            "projectName": "amsterdam-app-android",
            "buildName": "Regressietest sprint 38 - Android",
            "appiumVersion": "2.0.0",
            "enableCameraImageInjection": "true",
            //"deviceOrientation": "landscape",
        },
    },
    {
        platformName: "ios",
        "appium:platformVersion": "15.6",
        "appium:deviceName": "iPhone 11",
        "appium:app": bsUrliOS,
        "appium:noReset": "false",
        //"appium:fullReset": "true",
        //"appium:autoAcceptAlerts": "true",
        //"appium:clearPackageData": true,
        'bstack:options': {
            "projectName": "amsterdam-app-ios",
            "buildName": "Regressietest sprint 38 - iOS",
            "appiumVersion": "2.0.0",
            "midSessionInstallApps": [bsUrliOS],
            "enableCameraImageInjection": "true",
            //"autoAcceptAlerts": "true"
            //"deviceOrientation": "landscape",
        },
    },
    // {
    //     platformName: "ios",
    //     "appium:platformVersion": "12",
    //     "appium:deviceName": "iPhone 11",
    //     "appium:app": "bsUrliOS",
    //     'bstack:options': {
    //         "projectName": "amsterdam-app-ios",
    //         "buildName": "Sanity Check Eyes+functional App-version 0.32.0.5690",
    //         "appiumVersion": "2.0.0",
    //         //"deviceOrientation": "landscape",
    //     },
    // }
]

sharedconfig.services = [
    ['browserstack', {
        browserstackLocal: true
    }]
]

// Patterns to exclude.
sharedconfig.exclude = [
    //"./tests/features/functional/notifications.feature",
    "./tests/features/functional/notifications_simulator.feature",
    //"./tests/features/functional/settings.feature",
    //"./tests/features/functional/mijnprofiel.feature",
    //"./tests/features/functional/construction-work.feature",
    //"./tests/features/functional/contact.feature",
    "./tests/features/visual-eyes/about.feature",
    "./tests/features/visual-eyes/construction-work.feature",
    "./tests/features/visual-eyes/contact.feature",
    "./tests/features/visual-eyes/open-waste-container.feature",
    "./tests/features/visual-eyes/redirects.feature",
    "./tests/features/visual-eyes/report-problem.feature",
    "./tests/features/visual-eyes/waste-guide.feature",
    //"./tests/features/visual-percy/about.feature",
    //"./tests/features/visual-percy/construction-work.feature",
    //"./tests/features/visual-percy/contact.feature",
    //"./tests/features/visual-percy/open-waste-container.feature",
    //"./tests/features/visual-percy/redirects.feature",
    //"./tests/features/visual-percy/report-problem.feature",
    //"./tests/features/visual-percy/waste-guide.feature",
]

export const config = sharedconfig;
