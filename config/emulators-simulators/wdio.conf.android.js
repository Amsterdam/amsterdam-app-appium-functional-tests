import { join } from "path";
import { config as sharedconfig } from "../shared/wdio.conf.shared.js";



sharedconfig.capabilities = [{
    'appium:platformName': 'Android',
    'appium:platformVersion': '11',
    'appium:deviceName': 'sdk_gphone_x86_64',
    'appium:noReset': 'false',
    //This should be the exact same name from the device you use in the Android Emulator
    'appium:automationName': 'UiAutomator2',
    'appium:app': join(process.cwd(), 'app/Android/amsterdam-app.apk')
}]

sharedconfig.services = ['appium']

export const config = sharedconfig;

