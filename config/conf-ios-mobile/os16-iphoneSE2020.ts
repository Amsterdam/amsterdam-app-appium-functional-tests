import {
  appiumVersion,
  bsUrliOS,
  buildNameIosMobile,
  projectName,
} from '../../credentials.js'
import {config as sharedconfig} from '../shared/wdio.conf.shared.js'

sharedconfig.capabilities = [
  {
    platformName: 'ios',
    'appium:platformVersion': '16',
    'appium:deviceName': 'iPhone SE 2020',
    'appium:app': bsUrliOS,
    'appium:noReset': 'false',
    'bstack:options': {
      projectName: projectName,
      buildName: buildNameIosMobile,
      appiumVersion: appiumVersion,
      midSessionInstallApps: [bsUrliOS],
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
