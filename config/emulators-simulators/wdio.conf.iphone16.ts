import {config as sharedconfig} from '../shared/wdio.conf.shared.js'

//
sharedconfig.capabilities = [
  {
    'appium:platformName': 'iOS',
    'appium:platformVersion': '18.1',
    'appium:deviceName': 'iPhone 16',
    //'appium:platformVersion': '16.3.1',
    //This should be the exact same name from the device you use in the Android Emulator
    'appium:automationName': 'XCUITest',
    //'appium:app': 'nl.amsterdam.app.dev',
    'appium:app': 'app/iOS/Amsterdam test.app',
    'appium:autoAcceptAlerts': false,
  },
]

sharedconfig.services = ['appium']

export const config = sharedconfig
