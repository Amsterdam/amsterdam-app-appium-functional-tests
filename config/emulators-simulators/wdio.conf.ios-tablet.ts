import {config as sharedconfig} from '../shared/wdio.conf.shared.js'

//
sharedconfig.capabilities = [
  // {
  //     'appium:platformName': 'iOS',
  //     'appium:platformVersion': '17.0',
  //     'appium:deviceName': 'iPhone 11',
  //     //'appium:platformVersion': '16.3.1',
  //     //This should be the exact same name from the device you use in the Android Emulator
  //     'appium:automationName': 'XCUITest',
  //     //'appium:app': 'nl.amsterdam.app.dev',
  //     'appium:app': 'app/iOS/Amsterdam test.app',
  //     'appium:autoAcceptAlerts': false,
  // },
  // {
  //     'appium:platformName': 'iOS',
  //     'appium:platformVersion': '17.0',
  //     'appium:deviceName': 'iPad (10th generation)',
  //     'appium:automationName': 'XCUITest',
  //     'appium:app': 'app/iOS/Amsterdam test.app',
  //     'appium:autoAcceptAlerts': false,
  // },
  {
    'appium:platformName': 'iOS',
    'appium:platformVersion': '17.0',
    'appium:deviceName': 'iPad Pro (12.9-inch) (6th generation)',
    'appium:automationName': 'XCUITest',
    'appium:app': 'app/iOS/Amsterdam test.app',
    'appium:autoAcceptAlerts': false,
  },
  //real device
  // {
  //     'appium:platformName': 'iOS',
  //     'appium:platformVersion': '16.5.1',
  //     'appium:deviceName': deviceName,
  //     'appium:automationName': 'XCUITest',
  //     'appium:bundleId': 'nl.amsterdam.app.dev',
  //     'appium:udid': udid,
  //     'appium:xcodeOrgId': xcodeOrgId,
  //     'appum: xcodeSigningId': xcodeSigningId,
  //     //'appium:app': 'app/iOS/AmsterdamTest.ipa',
  //     'appium: updatedWDABundleid': 'nl.amsterdam.app.dev',
  //     'appium:autoAcceptAlerts': true
  // },
]

sharedconfig.services = ['appium']

export const config = sharedconfig
