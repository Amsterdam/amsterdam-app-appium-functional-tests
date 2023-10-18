import { bsUrlAndroid } from './credentials.js';
import { config as sharedconfig } from "./wdio.conf.shared.js";

sharedconfig.capabilities = [
    {
        "platformName": "android",
        "appium:platformVersion": "8.0",
        "appium:deviceName": "Google Pixel 2",
        "appium:app": bsUrlAndroid,
        'bstack:options': {
            "projectName": "amsterdam-app-mobile-android",
            "buildName": "Sprint 42",
            "appiumVersion": "2.0.1",
            "enableCameraImageInjection": "true",
        },
    },
    {
        "platformName": "android",
        "appium:platformVersion": "8.1",
        "appium:deviceName": "Samsung Galaxy J7 Prime",
        "appium:app": bsUrlAndroid,
        'bstack:options': {
            "projectName": "amsterdam-app-mobile-android",
            "buildName": "Sprint 42",
            "appiumVersion": "2.0.1",
            "enableCameraImageInjection": "true",
        },
    },
    {
        "platformName": "android",
        "appium:platformVersion": "9.0",
        "appium:deviceName": "Huawei P30",
        "appium:app": bsUrlAndroid,
        'bstack:options': {
            "projectName": "amsterdam-app-mobile-android",
            "buildName": "Sprint 42",
            "appiumVersion": "2.0.1",
            "enableCameraImageInjection": "true",
        },
    },
    {
        "platformName": "android",
        "appium:platformVersion": "10.0",
        "appium:deviceName": "Samsung Galaxy Note 20",
        "appium:app": bsUrlAndroid,
        'bstack:options': {
            "projectName": "amsterdam-app-mobile-android",
            "buildName": "Sprint 42",
            "appiumVersion": "2.0.1",
            "enableCameraImageInjection": "true",
        },
    },
    {
        "platformName": "android",
        "appium:platformVersion": "10.0",
        "appium:deviceName": "Motorola Moto G9 Play",
        "appium:app": bsUrlAndroid,
        'bstack:options': {
            "projectName": "amsterdam-app-mobile-android",
            "buildName": "Sprint 42",
            "appiumVersion": "2.0.1",
            "enableCameraImageInjection": "true",
        },
    },
    {
        "platformName": "android",
        "appium:platformVersion": "11.0",
        "appium:deviceName": "Samsung Galaxy M32",
        "appium:app": bsUrlAndroid,
        'bstack:options': {
            "projectName": "amsterdam-app-mobile-android",
            "buildName": "Sprint 42",
            "appiumVersion": "2.0.1",
            "enableCameraImageInjection": "true",
        },
    },
    {
        "platformName": "android",
        "appium:platformVersion": "11.0",
        "appium:deviceName": "Xiaomi Redmi Note 11",
        "appium:app": bsUrlAndroid,
        'bstack:options': {
            "projectName": "amsterdam-app-mobile-android",
            "buildName": "Sprint 42",
            "appiumVersion": "2.0.1",
            "enableCameraImageInjection": "true",
        },
    },
    {
        "platformName": "android",
        "appium:platformVersion": "11.0",
        "appium:deviceName": "Oppo Reno 6",
        "appium:app": bsUrlAndroid,
        'bstack:options': {
            "projectName": "amsterdam-app-mobile-android",
            "buildName": "Sprint 42",
            "appiumVersion": "2.0.1",
            "enableCameraImageInjection": "true",
        },
    },
    {
        platformName: "Android",
        "appium:platformVersion": "12.0",
        "appium:deviceName": "Samsung Galaxy S22",
        "appium:app": bsUrlAndroid,
        "appium:noReset": "false",
        "bstack:options": {
            "projectName": "amsterdam-app-mobile-android",
            "buildName": "Sprint 42 - Android - run 3",
            "appiumVersion": "2.0.1",
            "enableCameraImageInjection": "true",
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
            "projectName": "amsterdam-app-mobile-android",
            "buildName": "Sprint 42 - Android - run 3",
            "appiumVersion": "2.0.1",
            "enableCameraImageInjection": "true",
            //"deviceOrientation": "landscape",
        },
    },
    {
        platformName: "Android",
        "appium:platformVersion": "13.0",
        "appium:deviceName": "OnePlus 11R",
        "appium:app": bsUrlAndroid,
        "appium:noReset": "false",
        "bstack:options": {
            "projectName": "amsterdam-app-mobile-android",
            "buildName": "Sprint 42 - Android - run 3",
            "appiumVersion": "2.0.1",
            "enableCameraImageInjection": "true",
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
            "projectName": "amsterdam-app-mobile-android",
            "buildName": "Sprint 42 - Android - run 3",
            "appiumVersion": "2.0.1",
            "enableCameraImageInjection": "true",
            //"deviceOrientation": "landscape",
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
    //"./tests/features/functional/settings.feature",
    "./tests/features/functional/notifications_simulator.feature",
    //"./tests/features/functional/mijnprofiel.feature",
    //"./tests/features/functional/notifications.feature",
    //"./tests/features/functional/launchapp.feature",
    //"./tests/features/functional/construction-work.feature",
    //"./tests/features/functional/contact.feature",
    "./tests/features/visual-eyes/about.feature",
    "./tests/features/visual-eyes/construction-work.feature",
    "./tests/features/visual-eyes/contact.feature",
    "./tests/features/visual-eyes/open-waste-container.feature",
    "./tests/features/visual-eyes/redirects.feature",
    "./tests/features/visual-eyes/report-problem.feature",
    "./tests/features/visual-eyes/waste-guide.feature",
    "./tests/features/visual-percy/about.feature",
    "./tests/features/visual-percy/construction-work.feature",
    "./tests/features/visual-percy/contact.feature",
    "./tests/features/visual-percy/redirects.feature",
    "./tests/features/visual-percy/report-problem.feature",
    "./tests/features/visual-percy/waste-guide.feature",
    "./tests/features/location-features/my-location-construction-work-android.feature",
    "./tests/features/location-features/my-location-waste-guide-android.feature"
]

export const config = sharedconfig;
