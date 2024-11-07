import {
  appiumVersion,
  bsUrlAndroid,
  buildNameAndroidTablet,
  projectName,
} from '../../credentials.js'
import {config as sharedconfig} from '../shared/wdio.conf.shared.js'

sharedconfig.capabilities = [
  {
    platformName: 'android',
    'appium:platformVersion': '11.0',
    'appium:deviceName': 'Samsung Galaxy Tab S7',
    'appium:app': bsUrlAndroid,
    'appium:noReset': 'false',
    'bstack:options': {
      projectName: projectName,
      buildName: buildNameAndroidTablet,
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
