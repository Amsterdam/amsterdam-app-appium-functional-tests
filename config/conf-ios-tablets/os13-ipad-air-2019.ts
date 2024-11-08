import {bsUrliOS, buildNameIosTablet, projectName} from '../../credentials.js'
import {config as sharedconfig} from '../shared/wdio.conf.shared.js'

sharedconfig.capabilities = [
  {
    platformName: 'ios',
    'appium:platformVersion': '13',
    'appium:deviceName': 'iPad Air 2019',
    'appium:app': bsUrliOS,
    'appium:noReset': 'false',
    'bstack:options': {
      projectName: projectName,
      buildName: buildNameIosTablet,
      appiumVersion: '1.22.0',
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
