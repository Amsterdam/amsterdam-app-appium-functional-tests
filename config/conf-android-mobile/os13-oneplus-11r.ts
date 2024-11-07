import {
  appiumVersion,
  bsUrlAndroid,
  buildNameAndroidMobile,
  projectName,
} from '../../credentials.js'
import {config as sharedconfig} from '../shared/wdio.conf.shared.js'

sharedconfig.capabilities = [
  {
    platformName: 'Android',
    'appium:platformVersion': '13.0',
    'appium:deviceName': 'OnePlus 11R',
    'appium:app': bsUrlAndroid,
    'appium:noReset': 'false',
    'bstack:options': {
      projectName: projectName,
      buildName: buildNameAndroidMobile,
      appiumVersion: appiumVersion,
      // "enableCameraImageInjection": "true",
      //"deviceOrientation": "landscape",
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
