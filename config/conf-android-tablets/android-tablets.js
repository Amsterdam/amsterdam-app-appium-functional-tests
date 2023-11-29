import { appiumVersion, bsUrlAndroid, buildNameAndroidTablet, projectName } from '../../credentials.js';
import { config as sharedconfig } from "../shared/wdio.conf.shared.js";

sharedconfig.capabilities = [

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
            "enableCameraImageInjection": "true",
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
            "enableCameraImageInjection": "true",
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
            "enableCameraImageInjection": "true",
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
            "enableCameraImageInjection": "true",
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
            "enableCameraImageInjection": "true",
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
    "./../../tests/features/functional/settings.feature",
    "./../../tests/features/functional/mijnprofiel.feature",
    "./../../tests/features/functional/notifications.feature",
    "./../../tests/features/functional/launchapp.feature",
    "./../../tests/features/functional/construction-work.feature",
    "./../../tests/features/functional/contact.feature",
    "./../../tests/features/functional/waste-guide.feature",
    "./../../tests/features/visual-percy/about.feature",
    "./../../tests/features/visual-percy/construction-work.feature",
    "./../../tests/features/visual-percy/contact.feature",
    "./../../tests/features/visual-percy/redirects.feature",
    "./../../tests/features/visual-percy/report-problem.feature",
    //"./../../tests/features/visual-percy/waste-guide.feature",
    "./../../tests/features/location-features/my-location-construction-work-android.feature",
    "./../../tests/features/location-features/my-location-waste-guide-android.feature"
]

export const config = sharedconfig;