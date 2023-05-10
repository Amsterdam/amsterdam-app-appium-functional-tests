import { After, Before } from "@wdio/cucumber-framework";

Before(async function () {
    //await driver.activateApp('nl.amsterdam.app.dev')
    console.log('app has started!')
})

After(async () => {
    //await driver.terminateApp('nl.amsterdam.app.dev')
    console.log('app has closed!')
})

//export { Before, After };
// AfterAll (async () => {
// driver.terminateApp()
// })
