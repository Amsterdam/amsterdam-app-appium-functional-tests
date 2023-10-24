/**
 * Create a cross-platform solution for opening a deep link. https://github.com/webdriverio/appium-boilerplate/blob/main/tests/helpers/Utils.ts
 */
export async function openDeepLinkUrl(url) {
    const prefix = 'wdio://';

    if (driver.isAndroid) {
        // Life is so much easier
        return driver.execute('mobile:deepLink', {
            url: `${prefix}${url}`,
            package: 'com.wdiodemoapp',
        });
    }

    // We can use `driver.url` on iOS simulators, but not on iOS real devices. The reason is that iOS real devices
    // open Siri when you call `driver.url('')` to use a deep link. This means that real devices need to have a different implementation
    // than iOS sims
    // iOS sims and real devices can be distinguished by their UDID. Based on these sources there is a diff in the UDIDS
    // - https://blog.diawi.com/2018/10/15/2018-apple-devices-and-their-new-udid-format/
    // - https://www.theiphonewiki.com/wiki/UDID
    // iOS sims have more than 1 `-` in the UDID and the UDID is being
    const simulatorRegex = new RegExp('(.*-.*){2,}');

    // Check if we are a simulator
    if ('udid' in driver.capabilities && simulatorRegex.test(driver.capabilities.udid)) {
        await driver.url(`${url}`);
    } else {
        // Else we are a real device and we need to take some extra steps
        // Launch Safari to open the deep link
        await driver.execute('mobile: launchApp', { bundleId: 'com.apple.mobilesafari' });

        // Add the deep link url in Safari in the `URL`-field
        // This can be 2 different elements, or the button, or the text field
        // Use the predicate string because the accessibility label will return 2 different types
        // of elements making it flaky to use. With the predicate string, we can be more precise
        const addressBarSelector = 'label == "Address" OR name == "URL"';
        const urlFieldSelector = 'type == "XCUIElementTypeTextField" && name CONTAINS "URL"';
        const addressBar = $(`-ios predicate string:${addressBarSelector}`);
        const urlField = $(`-ios predicate string:${urlFieldSelector}`);

        // Wait for the URL button to appear and click on it so the text field will appear
        // iOS 13 now has the keyboard open by default because the URL field has focus when opening the Safari browser
        if (!(await driver.isKeyboardShown())) {
            await addressBar.waitForDisplayed();
            await addressBar.click();
        }

        // Submit the URL and add a break
        if ((await urlField.isDisplayed())) {
            await urlField.setValue(`${url}\uE007`);
        } else {
            await addressBar.setValue(`${url}\uE007`);
        }
        //await addressBar.setValue(`${url}\uE007`);
        //Bij ipad mini 2021 OS 15 werkt onderstaande niet, bovenstaande wel
        //await urlField.setValue(`${url}\uE007`);
    }
}
