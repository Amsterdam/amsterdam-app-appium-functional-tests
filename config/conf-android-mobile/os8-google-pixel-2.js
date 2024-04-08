import { appiumVersion, bsUrlAndroid, buildNameAndroidMobile, projectName } from '../../credentials.js';
import { config as sharedconfig } from "../shared/wdio.conf.shared.js";

sharedconfig.capabilities = [
    {
        "platformName": "android",
        "appium:platformVersion": "8.0",
        "appium:deviceName": "Google Pixel 2",
        "appium:app": bsUrlAndroid,
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameAndroidMobile,
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
