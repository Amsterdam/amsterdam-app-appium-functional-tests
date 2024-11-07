import {config as sharedconfig} from './shared/wdio.conf.shared.js'

//
sharedconfig.capabilities = [
  {
    'appium:platformName': 'iOS',
    'appium:platformVersion': '17.0',
    'appium:deviceName': 'iPhone SE (3rd generation)',
    'appium:automationName': 'XCUITest',
    'appium:app': 'app/iOS/Amsterdam test.app',
    'appium:autoAcceptAlerts': false,
  },
]

sharedconfig.services = ['appium']

export const config = sharedconfig
