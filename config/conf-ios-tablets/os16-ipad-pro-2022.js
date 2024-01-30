import { appiumVersion, bsUrliOS, buildNameIosTablet, projectName } from '../../credentials.js';
import { config as sharedconfig } from "../shared/wdio.conf.shared.js";


sharedconfig.capabilities = [
    {
        platformName: "ios",
        "appium:platformVersion": "16",
        "appium:deviceName": "iPad Pro 11 2022",
        "appium:app": bsUrliOS,
        "appium:noReset": "false",
        'bstack:options': {
            "projectName": projectName,
            "buildName": buildNameIosTablet,
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
