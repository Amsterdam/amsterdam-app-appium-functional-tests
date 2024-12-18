import {
  appiumVersion,
  bsUrlAndroid,
  bsUrliOS,
  buildNameAndroidMobileVisual,
  buildNameAndroidTabletVisual,
  buildNameIosMobileVisual,
  buildNameIosTabletVisual,
  projectName,
} from '../../credentials.js'
import {config as sharedconfig} from '../shared/wdio.conf.shared.js'

sharedconfig.capabilities = [
  //iOS Mobile
  {
    platformName: 'ios',
    'appium:platformVersion': '17',
    'appium:deviceName': 'iPhone 15 Pro Max',
    'appium:app': bsUrliOS,
    'appium:noReset': 'false',
    'bstack:options': {
      projectName: projectName,
      buildName: buildNameIosMobileVisual,
      appiumVersion: appiumVersion,
      midSessionInstallApps: [bsUrliOS],
      // "enableCameraImageInjection": "true",
    },
  },
  //iOS Tablet
  {
    platformName: 'ios',
    'appium:platformVersion': '14',
    'appium:deviceName': 'iPad Pro 12.9 2021',
    'appium:app': bsUrliOS,
    'appium:noReset': 'false',
    'bstack:options': {
      projectName: projectName,
      buildName: buildNameIosTabletVisual,
      appiumVersion: '2.0.1',
      midSessionInstallApps: [bsUrliOS],
      // "enableCameraImageInjection": "true",
    },
  },
  //Android Mobile
  {
    platformName: 'Android',
    'appium:platformVersion': '14.0',
    'appium:deviceName': 'Google Pixel 8 Pro',
    'appium:app': bsUrlAndroid,
    'appium:noReset': 'false',
    'bstack:options': {
      projectName: projectName,
      buildName: buildNameAndroidMobileVisual,
      appiumVersion: '2.0.1',
      // "enableCameraImageInjection": "true",
      //"deviceOrientation": "landscape",
    },
  },
  //Android Tablet
  {
    platformName: 'android',
    'appium:platformVersion': '12.0',
    'appium:deviceName': 'Samsung Galaxy Tab S8',
    'appium:app': bsUrlAndroid,
    'appium:noReset': 'false',
    'bstack:options': {
      projectName: projectName,
      buildName: buildNameAndroidTabletVisual,
      appiumVersion: appiumVersion,
      // "enableCameraImageInjection": "true",
    },
  },
]

sharedconfig.services = [
  [
    'browserstack',
    {
      browserstackLocal: false,
    },
  ],
]

export const config = sharedconfig
