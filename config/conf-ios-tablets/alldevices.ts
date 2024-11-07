import {bsUrliOS} from '../credentials.js'
import {config as sharedconfig} from '../wdio.conf.shared.js'

sharedconfig.capabilities = [
  {
    platformName: 'ios',
    'appium:platformVersion': '13',
    'appium:deviceName': 'iPad Air 2019',
    'appium:app': bsUrliOS,
    'appium:noReset': 'false',
    'bstack:options': {
      projectName: 'amsterdam-app-tablet-ios',
      buildName: 'Sprint 42 - iOS - run 3',
      appiumVersion: '1.22.0',
      midSessionInstallApps: [bsUrliOS],
      // "enableCameraImageInjection": "true",
    },
  },
  {
    platformName: 'ios',
    'appium:platformVersion': '14',
    'appium:deviceName': 'iPad Pro 12.9 2021',
    'appium:app': bsUrliOS,
    'appium:noReset': 'false',
    'bstack:options': {
      projectName: 'amsterdam-app-tablet-ios',
      buildName: 'Sprint 42 - iOS - run 3',
      appiumVersion: '2.0.1',
      midSessionInstallApps: [bsUrliOS],
      // "enableCameraImageInjection": "true",
    },
  },

  {
    platformName: 'ios',
    'appium:platformVersion': '15',
    'appium:deviceName': 'iPad Mini 2021',
    'appium:app': bsUrliOS,
    'appium:noReset': 'false',
    'bstack:options': {
      projectName: 'amsterdam-app-tablet-ios',
      buildName: 'Sprint 42 - iOS - run 3',
      appiumVersion: '2.0.1',
      midSessionInstallApps: [bsUrliOS],
      // "enableCameraImageInjection": "true",
    },
  },
  {
    platformName: 'ios',
    'appium:platformVersion': '16',
    'appium:deviceName': 'iPad Pro 11 2022',
    'appium:app': bsUrliOS,
    'appium:noReset': 'false',
    'bstack:options': {
      projectName: 'amsterdam-app-tablet-ios',
      buildName: 'Sprint 42 - iOS - run 3',
      appiumVersion: '2.0.1',
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
