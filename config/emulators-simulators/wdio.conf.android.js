import { join } from "path";
import { config as sharedconfig } from "../shared/wdio.conf.shared.js";


// Patterns to exclude.
sharedconfig.exclude = [
    "./../../tests/features/functional/settings.feature",
    "./../../tests/features/functional/mijnprofiel.feature",
    //"./../../tests/features/functional/notifications.feature",
    "./../../tests/features/functional/launchapp.feature",
    "./../../tests/features/functional/construction-work.feature",
    "./../../tests/features/functional/contact.feature",
    "./../../tests/features/functional/waste-guide.feature",
    "./../../tests/features/visual-eyes/about.feature",
    "./../../tests/features/visual-eyes/construction-work.feature",
    "./../../tests/features/visual-eyes/contact.feature",
    "./../../tests/features/visual-eyes/open-waste-container.feature",
    "./../../tests/features/visual-eyes/redirects.feature",
    "./../../tests/features/visual-eyes/report-problem.feature",
    "./../../tests/features/visual-eyes/waste-guide.feature",
    "./../../tests/features/visual-percy/about.feature",
    "./../../tests/features/visual-percy/construction-work.feature",
    "./../../tests/features/visual-percy/contact.feature",
    "./../../tests/features/visual-percy/redirects.feature",
    "./../../tests/features/visual-percy/report-problem.feature",
    "./../../tests/features/visual-percy/waste-guide.feature",
    "./../../tests/features/location-features/my-location-construction-work-android.feature",
    "./../../tests/features/location-features/my-location-waste-guide-android.feature"


]

sharedconfig.capabilities = [{
    'appium:platformName': 'Android',
    'appium:platformVersion': '13.0',
    'appium:deviceName': 'Pixel_5',
    'appium:noReset': 'false',
    //This should be the exact same name from the device you use in the Android Emulator
    'appium:automationName': 'UiAutomator2',
    'appium:app': join(process.cwd(), 'app/Android/amsterdam-app.apk')
}]

sharedconfig.services = ['appium']

export const config = sharedconfig;

