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


export const config = sharedconfig;
