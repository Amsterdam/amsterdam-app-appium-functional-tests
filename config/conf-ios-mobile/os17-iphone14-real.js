import { config as sharedconfig } from "../shared/wdio.conf.shared.js";

sharedconfig.capabilities = [
    {
        platformName: "ios",
        "appium:platformVersion": "17.4.1",
        "appium:deviceName": "GA-iPhone-C7YWQ7X00P",
        "appium:automationName": "XCUITest",
        "appium:app": "nl.amsterdam.app.dev",
        "appium:xcodeOrgId": "39J4LQT4VN",
        "appum: xcodeSigningId": "iPhone Developer",
        "appium:udid": "00008110-000251640E29401E",
        "appium:noReset": "false",
    }
]

sharedconfig.services = [
    ['appium']
]


export const config = sharedconfig;
