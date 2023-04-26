import { After, Before } from "@wdio/cucumber-framework";

Before(async function () {
    await driver.launchApp();
})

After(async () => {
    await driver.deleteSession();
})

// AfterAll (async () => {
// driver.terminateApp()
// })
