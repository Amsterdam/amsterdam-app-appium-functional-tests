import { appiumVersion, bsUrlAndroid, bsUrliOS, buildNameAndroidMobile, buildNameIosMobile, projectName } from '../../credentials.js';
import { config as sharedconfig } from "./wdio.conf.shared.js";

const devices = {
    android: {
        'os8-1-samsung-galaxy-j7-prime': {
            "appium:platformVersion": "8.1",
            "appium:deviceName": "Samsung Galaxy J7 Prime",
        },
        'os11-oppo-reno-6': {
            "appium:platformVersion": "11.0",
            "appium:deviceName": "Oppo Reno 6",
        }
    },
    ios: {
        'os15-iphoneXS': {
            "appium:platformVersion": "15",
            "appium:deviceName": "iPhone XS",
        },
        'os17-iphone13': {
            "appium:platformVersion": "17",
            "appium:deviceName": "iPhone 13",
        }
    }
}

const getCapabilitiesForDevice = (device, platform) => {
    const deviceConfig = devices[platform][device]
    if (platform === 'android') {
        return {
            "platformName": "android",
            "appium:platformVersion": deviceConfig["appium:platformVersion"],
            "appium:deviceName": deviceConfig["appium:deviceName"],
            "appium:app": bsUrlAndroid,
            'bstack:options': {
                "projectName": projectName,
                "buildName": buildNameAndroidMobile,
                "appiumVersion": appiumVersion,
                // "enableCameraImageInjection": "true",
            },
        }
    } else {
        return {
            "platformName": "ios",
            "appium:platformVersion": deviceConfig["appium:platformVersion"],
            "appium:deviceName": deviceConfig["appium:deviceName"],
            "appium:app": bsUrliOS,
            "appium:noReset": "false",
            'bstack:options': {
                "projectName": projectName,
                "buildName": buildNameIosMobile,
                "appiumVersion": appiumVersion,
                "midSessionInstallApps": [bsUrliOS],
                // "enableCameraImageInjection": "true",
            },
        }
    }
}

const platform = process.env.PLATFORM
let device = process.env.CONFIG

console.log(`##vso[task.setvariable variable=BROWSERSTACK_BUILD_NAME])${platform === 'android' ? buildNameAndroidMobile: buildNameIosMobile}`)

if (device === 'random') {
    const keys = Object.keys(devices[platform])
    device = keys[Math.floor(Math.random() * keys.length)]
}
console.log(`Device config: ${device}`)
if (device === 'all') { 
    sharedconfig.capabilities = Object.keys(devices[platform]).map(deviceKey =>
        getCapabilitiesForDevice(deviceKey, platform)
    )
} else {
    sharedconfig.capabilities = [
        getCapabilitiesForDevice(device, platform)
    ]
}

sharedconfig.services = [
    ['browserstack', {
        browserstackLocal: false
    }]
]

// Patterns to exclude.
sharedconfig.exclude = [
    // "../../tests/features/functional/settings.feature",
    // "../../tests/features/functional/notifications_simulator.feature",
    // "../../tests/features/functional/mijnprofiel.feature",
    // "../../tests/features/functional/notifications.feature",
    // "../../tests/features/functional/launchapp.feature",
    //"../../tests/features/functional/construction-work.feature",
    // "../../tests/features/functional/contact.feature",
    // "../../tests/features/functional/waste-guide.feature",
    "../../tests/features/visual-eyes/about.feature",
    "../../tests/features/visual-eyes/construction-work.feature",
    "../../tests/features/visual-eyes/contact.feature",
    "../../tests/features/visual-eyes/open-waste-container.feature",
    "../../tests/features/visual-eyes/redirects.feature",
    "../../tests/features/visual-eyes/report-problem.feature",
    "../../tests/features/visual-eyes/waste-guide.feature",
    "../../tests/features/visual-percy/about.feature",
    "../../tests/features/visual-percy/construction-work.feature",
    "../../tests/features/visual-percy/contact.feature",
    "../../tests/features/visual-percy/redirects.feature",
    "../../tests/features/visual-percy/report-problem.feature",
    "../../tests/features/visual-percy/waste-guide.feature",
    "../../tests/features/location-features/my-location-construction-work-android.feature",
    "../../tests/features/location-features/my-location-waste-guide-android.feature"
]

export const config = sharedconfig
