import {
  appiumVersion,
  bsUrlAndroid,
  bsUrliOS,
  buildNameAndroidMobile,
  buildNameIosMobile,
  projectName,
} from '../../credentials.js'
import {config as sharedconfig} from './wdio.conf.shared.js'

const devices = {
  android: {
    'os-10-motorola-moto-g9-play': {
      'appium:platformVersion': '10.0',
      'appium:deviceName': 'Motorola Moto G9 Play',
    },
    'os11-oppo-reno-6': {
      'appium:platformVersion': '11.0',
      'appium:deviceName': 'Oppo Reno 6',
    },
    'os12-samsung-galaxy-s22': {
      'appium:platformVersion': '12.0',
      'appium:deviceName': 'Samsung Galaxy S22',
    },
    'os13-oneplus-11R': {
      'appium:platformVersion': '13.0',
      'appium:deviceName': 'OnePlus 11R',
    },
    'os14-google-pixel-8pro': {
      'appium:platformVersion': '14.0',
      'appium:deviceName': 'Google Pixel 8 Pro',
    },
  },
  ios: {
    // 'os14-iphone12': {
    //     "appium:platformVersion": "14",
    //     "appium:deviceName": "iPhone 12",
    // },
    'os15-iphoneXS': {
      'appium:platformVersion': '15.6',
      'appium:deviceName': 'iPhone XS',
    },
    'os16-iphone12-pro': {
      'appium:platformVersion': '16',
      'appium:deviceName': 'iPhone 12 Pro',
    },
    'os17-iphone13': {
      'appium:platformVersion': '17',
      'appium:deviceName': 'iPhone 13',
    },
  },
}

const getCapabilitiesForDevice = (device, platform) => {
  const deviceConfig = devices[platform][device]
  if (platform === 'android') {
    return {
      platformName: 'android',
      'appium:platformVersion': deviceConfig['appium:platformVersion'],
      'appium:deviceName': deviceConfig['appium:deviceName'],
      'appium:app': bsUrlAndroid,
      'appium:fullReset': true,
      'bstack:options': {
        projectName: projectName,
        buildName: buildNameAndroidMobile,
        appiumVersion: appiumVersion,
        // "enableCameraImageInjection": "true",
      },
    }
  } else {
    return {
      platformName: 'ios',
      'appium:platformVersion': deviceConfig['appium:platformVersion'],
      'appium:deviceName': deviceConfig['appium:deviceName'],
      'appium:app': bsUrliOS,
      'appium:noReset': false,
      'appium:fullReset': true,
      'bstack:options': {
        projectName: projectName,
        buildName: buildNameIosMobile,
        appiumVersion: appiumVersion,
        midSessionInstallApps: [bsUrliOS],
        // "enableCameraImageInjection": "true",
      },
    }
  }
}

const platform = process.env.PLATFORM
let device = process.env.CONFIG

console.log(
  `##vso[task.setvariable variable=BROWSERSTACK_BUILD_NAME]${
    platform === 'android' ? buildNameAndroidMobile : buildNameIosMobile
  }`,
)

if (device === 'random') {
  const keys = Object.keys(devices[platform])
  device = keys[Math.floor(Math.random() * keys.length)]
}
console.log(`Device config: ${device}`)
if (device === 'all') {
  sharedconfig.capabilities = Object.keys(devices[platform]).map(deviceKey =>
    getCapabilitiesForDevice(deviceKey, platform),
  )
} else {
  sharedconfig.capabilities = [getCapabilitiesForDevice(device, platform)]
}

sharedconfig.services = [
  [
    'browserstack',
    {
      browserstackLocal: false,
    },
  ],
]

export const config = sharedconfig
