import { appiumVersion, bsUrlAndroid, bsUrliOS, buildNameAndroidMobile, buildNameAndroidTablet, buildNameIosMobile, buildNameiOSTablet, projectName } from '../../credentials.js';
import { config as sharedconfig } from "../shared/wdio.conf.shared.js";

sharedconfig.capabilities = [
    //iOS Mobile
    {
        platformName: "ios",
        "appium:platformVersion": "14",
        "appium:deviceName": "iPhone 12",
        "appium:app": bsUrliOS,
        "appium:noReset": "false",
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameIosMobile,
            "appiumVersion": appiumVersion,
            "midSessionInstallApps": [bsUrliOS],
            // "enableCameraImageInjection": "true",
        },
    },
    {
        platformName: "ios",
        "appium:platformVersion": "15",
        "appium:deviceName": "iPhone 11",
        "appium:app": bsUrliOS,
        "appium:noReset": "false",
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameIosMobile,
            "appiumVersion": appiumVersion,
            "midSessionInstallApps": [bsUrliOS],
            // "enableCameraImageInjection": "true",
        },
    },
    {
        platformName: "ios",
        "appium:platformVersion": "16",
        "appium:deviceName": "iPhone 12 Mini",
        "appium:app": bsUrliOS,
        "appium:noReset": "false",
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameIosMobile,
            "appiumVersion": appiumVersion,
            "midSessionInstallApps": [bsUrliOS],
            // "enableCameraImageInjection": "true",
        },
    },
    {
        platformName: "ios",
        "appium:platformVersion": "17",
        "appium:deviceName": "iPhone 15 Pro Max",
        "appium:app": bsUrliOS,
        "appium:noReset": "false",
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameIosMobile,
            "appiumVersion": appiumVersion,
            "midSessionInstallApps": [bsUrliOS],
            // "enableCameraImageInjection": "true",
        },
    },
    //iOS Tablet
    {
        platformName: "ios",
        "appium:platformVersion": "14",
        "appium:deviceName": "iPad Pro 12.9 2021",
        "appium:app": bsUrliOS,
        "appium:noReset": "false",
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameiOSTablet,
            "appiumVersion": "2.0.1",
            "midSessionInstallApps": [bsUrliOS],
            // "enableCameraImageInjection": "true",
        },
    },

    {
        platformName: "ios",
        "appium:platformVersion": "15",
        "appium:deviceName": "iPad Mini 2021",
        "appium:app": bsUrliOS,
        "appium:noReset": "false",
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameiOSTablet,
            "appiumVersion": "2.0.1",
            "midSessionInstallApps": [bsUrliOS],
            // "enableCameraImageInjection": "true",
        },
    },
    {
        platformName: "ios",
        "appium:platformVersion": "16",
        "appium:deviceName": "iPad Pro 11 2022",
        "appium:app": bsUrliOS,
        "appium:noReset": "false",
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameiOSTablet,
            "appiumVersion": "2.0.1",
            "midSessionInstallApps": [bsUrliOS],
            // "enableCameraImageInjection": "true",
        },
    },
    //Android Mobile
    {
        "platformName": "android",
        "appium:platformVersion": "8.0",
        "appium:deviceName": "Google Pixel 2",
        "appium:app": bsUrlAndroid,
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameAndroidMobile,
            "appiumVersion": "2.0.1",
            // "enableCameraImageInjection": "true",
        },
    },
    {
        "platformName": "android",
        "appium:platformVersion": "8.1",
        "appium:deviceName": "Samsung Galaxy J7 Prime",
        "appium:app": bsUrlAndroid,
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameAndroidMobile,
            "appiumVersion": "2.0.1",
            // "enableCameraImageInjection": "true",
        },
    },
    {
        "platformName": "android",
        "appium:platformVersion": "9.0",
        "appium:deviceName": "Huawei P30",
        "appium:app": bsUrlAndroid,
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameAndroidMobile,
            "appiumVersion": "2.0.1",
            // "enableCameraImageInjection": "true",
        },
    },
    {
        "platformName": "android",
        "appium:platformVersion": "10.0",
        "appium:deviceName": "Motorola Moto G9 Play",
        "appium:app": bsUrlAndroid,
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameAndroidMobile,
            "appiumVersion": "2.0.1",
            // "enableCameraImageInjection": "true",
        },
    },
    {
        "platformName": "android",
        "appium:platformVersion": "11.0",
        "appium:deviceName": "Xiaomi Redmi Note 11",
        "appium:app": bsUrlAndroid,
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameAndroidMobile,
            "appiumVersion": "2.0.1",
            // "enableCameraImageInjection": "true",
        },
    },
    {
        platformName: "Android",
        "appium:platformVersion": "12.0",
        "appium:deviceName": "Samsung Galaxy S22",
        "appium:app": bsUrlAndroid,
        "appium:noReset": "false",
        "bstack:options": {
            "projectName": projectName,
            "buildName": buildNameAndroidMobile,
            "appiumVersion": "2.0.1",
            // "enableCameraImageInjection": "true",
            //"deviceOrientation": "landscape",
        },
    },
    {
        platformName: "Android",
        "appium:platformVersion": "13.0",
        "appium:deviceName": "Samsung Galaxy S23 Ultra",
        "appium:app": bsUrlAndroid,
        "appium:noReset": "false",
        "bstack:options": {
            "projectName": projectName,
            "buildName": buildNameAndroidMobile,
            "appiumVersion": "2.0.1",
            // "enableCameraImageInjection": "true",
            //"deviceOrientation": "landscape",
        },
    },
    {
        platformName: "Android",
        "appium:platformVersion": "14.0",
        "appium:deviceName": "Google Pixel 8 Pro",
        "appium:app": bsUrlAndroid,
        "appium:noReset": "false",
        "bstack:options": {
            "projectName": projectName,
            "buildName": buildNameAndroidMobile,
            "appiumVersion": "2.0.1",
            // "enableCameraImageInjection": "true",
            //"deviceOrientation": "landscape",
        },
    },
    //Android Tablet
    {
        "platformName": "android",
        "appium:platformVersion": "8.1",
        "appium:deviceName": "Samsung Galaxy Tab S4",
        "appium:app": bsUrlAndroid,
        "appium:noReset": "false",
        "appium:adbExecTimeout": "120000",
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameAndroidTablet,
            "appiumVersion": appiumVersion,
            // "enableCameraImageInjection": "true",
        },
    },
    {
        "platformName": "android",
        "appium:platformVersion": "9.0",
        "appium:deviceName": "Samsung Galaxy Tab S6",
        "appium:app": bsUrlAndroid,
        "appium:noReset": "false",
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameAndroidTablet,
            "appiumVersion": appiumVersion,
            // "enableCameraImageInjection": "true",
        },
    },
    {
        "platformName": "android",
        "appium:platformVersion": "10.0",
        "appium:deviceName": "Samsung Galaxy Tab S7",
        "appium:app": bsUrlAndroid,
        "appium:noReset": "false",
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameAndroidTablet,
            "appiumVersion": appiumVersion,
            // "enableCameraImageInjection": "true",
        },
    },
    {
        "platformName": "android",
        "appium:platformVersion": "11.0",
        "appium:deviceName": "Samsung Galaxy Tab S7",
        "appium:app": bsUrlAndroid,
        "appium:noReset": "false",
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameAndroidTablet,
            "appiumVersion": appiumVersion,
            // "enableCameraImageInjection": "true",
        },
    },
    {
        "platformName": "android",
        "appium:platformVersion": "12.0",
        "appium:deviceName": "Samsung Galaxy Tab S8",
        "appium:app": bsUrlAndroid,
        "appium:noReset": "false",
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameAndroidTablet,
            "appiumVersion": appiumVersion,
            // "enableCameraImageInjection": "true",
        },
    },
]

sharedconfig.services = [
    ['browserstack', {
        browserstackLocal: false
    }]
]

// Patterns to exclude.
sharedconfig.exclude = [
    //"./../../tests/features/functional/settings.feature",
    //"./../../tests/features/functional/mijnprofiel.feature",
    //"./../../tests/features/functional/notifications.feature",
    //"./../../tests/features/functional/launchapp.feature",
    //"./../../tests/features/functional/construction-work.feature",
    //"./../../tests/features/functional/contact.feature",
    //"./../../tests/features/functional/waste-guide.feature",
    "./../../tests/features/visual-percy/about.feature",
    "./../../tests/features/visual-percy/construction-work.feature",
    "./../../tests/features/visual-percy/contact.feature",
    "./../../tests/features/visual-percy/redirects.feature",
    "./../../tests/features/visual-percy/report-problem.feature",
    "./../../tests/features/visual-percy/waste-guide.feature",
    "./../../tests/features/location-features/my-location-construction-work-android.feature",
    "./../../tests/features/location-features/my-location-waste-guide-android.feature"
]

export const config = sharedconfig;
