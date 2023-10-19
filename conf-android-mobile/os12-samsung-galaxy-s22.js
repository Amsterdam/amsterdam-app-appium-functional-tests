import { appiumVersion, bsUrlAndroid, buildNameAndroidMobile, projectName } from './credentials.js';
import { config as sharedconfig } from "./wdio.conf.shared.js";

sharedconfig.capabilities = [
    {
        platformName: "Android",
        "appium:platformVersion": "12.0",
        "appium:deviceName": "Samsung Galaxy S22",
        "appium:app": bsUrlAndroid,
        "appium:noReset": "false",
        "bstack:options": {
            "projectName": projectName,
            "buildName": buildNameAndroidMobile,
            "appiumVersion": appiumVersion,
            "enableCameraImageInjection": "true",
            //"deviceOrientation": "landscape",
        },
    },
]

sharedconfig.services = [
    ['browserstack', {
        browserstackLocal: false
    }]
]

// Patterns to exclude.
sharedconfig.exclude = [
    "./tests/features/functional/settings.feature",
    "./tests/features/functional/notifications_simulator.feature",
    "./tests/features/functional/mijnprofiel.feature",
    "./tests/features/functional/notifications.feature",
    "./tests/features/functional/launchapp.feature",
    "./tests/features/functional/construction-work.feature",
    "./tests/features/functional/contact.feature",
    // "./tests/features/functional/waste-guide.feature",
    "./tests/features/visual-eyes/about.feature",
    "./tests/features/visual-eyes/construction-work.feature",
    "./tests/features/visual-eyes/contact.feature",
    "./tests/features/visual-eyes/open-waste-container.feature",
    "./tests/features/visual-eyes/redirects.feature",
    "./tests/features/visual-eyes/report-problem.feature",
    "./tests/features/visual-eyes/waste-guide.feature",
    "./tests/features/visual-percy/about.feature",
    "./tests/features/visual-percy/construction-work.feature",
    "./tests/features/visual-percy/contact.feature",
    "./tests/features/visual-percy/redirects.feature",
    "./tests/features/visual-percy/report-problem.feature",
    "./tests/features/visual-percy/waste-guide.feature",
    "./tests/features/location-features/my-location-construction-work-android.feature",
    "./tests/features/location-features/my-location-waste-guide-android.feature"
]

export const config = sharedconfig;
