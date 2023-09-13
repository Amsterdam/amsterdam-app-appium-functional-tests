import { join } from "path";
import { config as sharedconfig } from "./wdio.conf.shared.js";


// Patterns to exclude.
sharedconfig.exclude = [
    "./tests/features/functional/notifications.feature",
    "./tests/features/functional/notifications_simulator.feature",
    "./tests/features/functional/settings.feature",
    "./tests/features/functional/mijnprofiel.feature",
    "./tests/features/functional/construction-work.feature",
    "./tests/features/functional/contact.feature",
    //"./tests/features/functional/my-location.feature",
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
    "./tests/features/visual-percy/construction-work.feature",
    "./tests/features/visual-percy/contact.feature",
    "./tests/features/visual-percy/open-waste-container.feature",
    "./tests/features/visual-percy/redirects.feature",
    "./tests/features/visual-percy/report-problem.feature",
    "./tests/features/visual-percy/waste-guide.feature",
    "./tests/features/visual-percy/my-location-construction-work-android.feature",
    //"./tests/features/visual-percy/my-location-waste-guide-android copy.feature"


]

sharedconfig.capabilities = [{
    'appium:platformName': 'Android',
    'appium:platformVersion': '12.0',
    'appium:deviceName': 'Pixel3atest',
    'appium:noReset': 'false',
    //This should be the exact same name from the device you use in the Android Emulator
    'appium:automationName': 'UiAutomator2',
    'appium:app': join(process.cwd(), 'app/Android/amsterdam-app.apk')
}]

sharedconfig.services = ['appium']

export const config = sharedconfig;

