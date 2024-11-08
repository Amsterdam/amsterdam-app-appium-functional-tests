import {
  appiumVersion,
  bsUrlAndroid,
  buildNameAndroidMobile,
  projectName,
} from '../../credentials.js'
import {config as sharedconfig} from '../shared/wdio.conf.shared.js'

sharedconfig.capabilities = [
  {
    platformName: 'android',
    'appium:platformVersion': '10.0',
    'appium:deviceName': 'Motorola Moto G9 Play',
    'appium:app': bsUrlAndroid,
    'bstack:options': {
      projectName: projectName,
      buildName: buildNameAndroidMobile,
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
