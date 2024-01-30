import { config as sharedconfig } from "./wdio.conf.shared.js";


sharedconfig.capabilities = [
    {
        platformName: "Android",
        "appium:platformVersion": "9.0",
        "appium:deviceName": "Google Pixel 3",
        "appium:app": "bs://9a2b08bfbb2f886ddb4040b8bf68383cf4cb6e41",
        "bstack:options": {
            "projectName": "amsterdam-app-android",
            "buildName": "Sanity Check Eyes+functional App-version 0.32.0.5694",
            "appiumVersion": "2.0.0",
            "deviceOrientation": "landscape",
        },
    },
    // {
    //     platformName: "Android",
    //     "appium:platformVersion": "12.0",
    //     "appium:deviceName": "Samsung Galaxy S22",
    //     "appium:app": "bs://9a2b08bfbb2f886ddb4040b8bf68383cf4cb6e41",
    //     "bstack:options": {
    //         "projectName": "amsterdam-app-android",
    //         "buildName": "Sanity Check Eyes+functional App-version 0.32.0.5694",
    //         "appiumVersion": "2.0.0",
    //         "deviceOrientation": "landscape",
    //     },
    // },
    // {
    //     platformName: "ios",
    //     "appium:platformVersion": "15",
    //     "appium:deviceName": "iPhone 11",
    //     "appium:app": "bs://b435e00f6a2adf71fe9f1970eafc499c63d8b323",
    //     'bstack:options': {
    //         "projectName": "amsterdam-app-ios",
    //         "buildName": "Sanity Check Eyes+functional App-version 0.32.0.5690",
    //         "appiumVersion": "2.0.0",
    //         "deviceOrientation": "landscape",
    //     },
    // },
    {
        platformName: "ios",
        "appium:platformVersion": "12",
        "appium:deviceName": "iPhone 11",
        "appium:app": "bs://b435e00f6a2adf71fe9f1970eafc499c63d8b323",
        'bstack:options': {
            "projectName": "amsterdam-app-ios",
            "buildName": "Sanity Check Eyes+functional App-version 0.32.0.5690",
            "appiumVersion": "2.0.0",
            "deviceOrientation": "landscape",
        },
    }
]

sharedconfig.services = ['browserstack']

//sharedconfig.exclude([^\]]*)
export const config = sharedconfig;