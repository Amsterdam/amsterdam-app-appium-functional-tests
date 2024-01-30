import { appiumVersion, bsUrliOS, buildNameIosMobile, projectName } from '../../credentials.js';
import { config as sharedconfig } from "../shared/wdio.conf.shared.js";

sharedconfig.capabilities = [

    {
        platformName: "ios",
        "appium:platformVersion": "12",
        "appium:deviceName": "iPhone 7",
        "appium:app": bsUrliOS,
        "appium:noReset": "false",
        //"appium:fullReset": "true",
        //"appium:autoAcceptAlerts": "true",
        //"appium:clearPackageData": true,
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameIosMobile,
            "appiumVersion": appiumVersion,
            "midSessionInstallApps": [bsUrliOS],
            // "enableCameraImageInjection": "true",
            //"autoAcceptAlerts": "true"
            //"deviceOrientation": "landscape",
        },
    },
    {
        platformName: "ios",
        "appium:platformVersion": "13",
        "appium:deviceName": "iPhone 8",
        "appium:app": bsUrliOS,
        "appium:noReset": "false",
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameIosMobile,
            "appiumVersion": "1.22.0",
            "midSessionInstallApps": [bsUrliOS],
            // "enableCameraImageInjection": "true",
        },
    },
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
        "appium:platformVersion": "15",
        "appium:deviceName": "iPhone XS",
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
        "appium:platformVersion": "16",
        "appium:deviceName": "iPhone 14 Plus",
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
        "appium:deviceName": "iPhone SE 2020",
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
        "appium:deviceName": "iPhone 13",
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
]

sharedconfig.services = [
    ['browserstack', {
        browserstackLocal: false
    }]
]


export const config = sharedconfig;
