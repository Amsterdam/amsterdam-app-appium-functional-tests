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
    'appium:platformVersion': '12',
    'appium:deviceName': 'iPhone 7',
    'appium:app': bsUrliOS,
    'appium:noReset': 'false',
    //"appium:fullReset": "true",
    //"appium:autoAcceptAlerts": "true",
    //"appium:clearPackageData": true,
    'bstack:options': {
      projectName: projectName,
      buildName: buildNameIosMobile,
      appiumVersion: appiumVersion,
      midSessionInstallApps: [bsUrliOS],
      // "enableCameraImageInjection": "true",
      //"autoAcceptAlerts": "true"
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
