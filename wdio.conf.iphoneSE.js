import { config as sharedconfig } from "./wdio.conf.shared.js";

sharedconfig.exclude = [
    "./tests/features/functional/notifications.feature",
    "./tests/features/functional/notifications_simulator.feature",
    "./tests/features/functional/settings.feature",
    "./tests/features/functional/mijnprofiel.feature",
    "./tests/features/functional/construction-work.feature",
    // "./tests/features/functional/contact.feature",
    "./tests/features/functional/waste-guide.feature",
    "./tests/features/visual-eyes/about.feature",
    "./tests/features/visual-eyes/construction-work.feature",
    "./tests/features/visual-eyes/contact.feature",
    "./tests/features/visual-eyes/open-waste-container.feature",
    "./tests/features/visual-eyes/redirects.feature",
    "./tests/features/visual-eyes/report-problem.feature",
    "./tests/features/visual-eyes/waste-guide.feature",
    "./tests/features/visual-percy/construction-work.feature",
    "./tests/features/visual-percy/contact.feature",
    "./tests/features/visual-percy/about.feature",
    "./tests/features/visual-percy/contact.feature",
    "./tests/features/visual-percy/open-waste-container.feature",
    "./tests/features/visual-percy/redirects.feature",
    "./tests/features/visual-percy/report-problem.feature",
    "./tests/features/visual-percy/waste-guide.feature",
    "./tests/features/functional/launchapp.feature",
    "./tests/features/location-features/my-location-waste-guide-android.feature",
    "./tests/features/location-features/my-location-construction-work-android.feature"
]

//
sharedconfig.capabilities = [
    {
        'appium:platformName': 'iOS',
        'appium:platformVersion': '17.0',
        'appium:deviceName': 'iPhone SE (3rd generation)',
        'appium:automationName': 'XCUITest',
        'appium:app': 'app/iOS/Amsterdam test.app',
        'appium:autoAcceptAlerts': false,
    },
]

sharedconfig.services = ['appium']

export const config = sharedconfig;