//get screensize
const scrollViewRect = await driver.getWindowRect()

//get starting points for scrolling    
const centerX = scrollViewRect.x + (scrollViewRect.width / 2)
const startY = scrollViewRect.y + (scrollViewRect.height * 0.9)
const startZ = scrollViewRect.y + (scrollViewRect.height * 0.6)
const endY = scrollViewRect.y
const topY = scrollViewRect.y + (scrollViewRect.height * 0.2)

class Gestures {
    /**
     * Check if an element is visible and if not scroll down a portion of the screen to
     * check if it visible after a x amount of scrolls and then click
     *
     * @param {element} element
     * @param {number} maxScrolls
     * @param {number} amount
     */
    // async checkProjectDisplayedWithScrollDown(element, maxScrolls) {
    //     for (let i = 0; i < maxScrolls; i++) {


    //         if ((!await element.isDisplayed())) {
    //             this.swipeUp();
    //         } else if (await element.isDisplayed()) {
    //             await driver.pause(1000)
    //             break
    //         } else if (i > maxScrolls) {
    //             throw new Error(`The element '${element}' could not be found or is not visible.`);
    //         }
    //     }
    // }

    async checkProjectDisplayedWithScrollDown(element, maxScrolls) {
        for (let i = 0; i < maxScrolls; i++) {
            if ((!await element.isDisplayed() && i < maxScrolls)) {
                await this.swipeUpSlow();
            } else if (await element.isDisplayed()) {
                break
            }
            expect(await element).toBeDisplayed()
            // this.swipeDown()
        }
    }

    async checkProjectDisplayedWithScrollDownSlow(element, maxScrolls) {
        for (let i = 0; i < maxScrolls; i++) {
            if ((!await element.isDisplayed() && i < maxScrolls)) {
                await this.swipeUpSlow();
            } else {
                break
            }
        }
    }

    async checkProjectDisplayedWithScrollDownShortScreen(element, maxScrolls) {
        for (let i = 0; i < maxScrolls; i++) {
            if ((!await element.isDisplayed() && i < maxScrolls)) {
                await this.swipeUpSlowShortScreen();
            } else {
                break
            }
        }
    }
    //     for (let i = 0; i < maxScrolls; i++) {
    //         if ((!await element1.isDisplayed() && i < maxScrolls)) {
    //             await this.swipeUpSlow();
    //             for (let i = 0; i < maxScrolls; i++) {
    //                 if (!await element2.isDisplayed() && i < maxScrolls) {
    //                     await this.swipeUpSlow();
    //                 } else if (await element2.isDisplayed()) {
    //                     break
    //                 }
    //             }
    //         } else if (await element1.isDisplayed()) {
    //             break
    //         }
    //         expect(await element1).toBeDisplayed()
    //         // this.swipeDown()
    //     }
    // }

    async checkProjectDisplayedWithScrollUp(element, maxScrolls) {
        for (let i = 0; i < maxScrolls; i++) {
            if ((!await element.isDisplayed() && i < maxScrolls)) {
                await this.swipeDown();
            } else if (await element.isDisplayed()) {
                expect(await element).toBeDisplayed()
                break
            }
        }
    }

    async checkProjectDisplayedWithScrollDownAndClick(element, maxScrolls) {
        for (let i = 0; i < maxScrolls; i++) {
            if (!await element.isDisplayed()) {
                await this.swipeUpSlow();
                await driver.pause(1000)
            } else if (await element.isDisplayed()) {
                await driver.pause(2000)
                await element.click()
                break
            } else if (i > maxScrolls) {
                throw new Error(`The element '${element}' could not be found or is not visible.`);
            }
        }
    }


    //swipe down
    async swipeDown() {
        await driver.performActions([{
            type: 'pointer',
            id: 'finger',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: centerX, y: topY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', duration: 200, x: centerX, y: startY },
                { type: 'pointerUp', button: 0 },
                { type: 'pause', duration: 500 },
            ]
        }])
    }

    async swipeDownSlow() {
        await driver.performActions([{
            type: 'pointer',
            id: 'finger',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: centerX, y: topY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', duration: 500, x: centerX, y: startY },
                { type: 'pointerUp', button: 0 },
                { type: 'pause', duration: 500 },
            ]
        }])
    }
    //swipeUp  
    async swipeUp() {
        await driver.performActions([{
            type: 'pointer',
            id: 'finger',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: centerX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', duration: 700, x: centerX, y: endY },
                { type: 'pointerUp', button: 0 },
                { type: 'pause', duration: 500 },
            ]
        }])
    }

    async swipeUpSlow() {
        await driver.performActions([{
            type: 'pointer',
            id: 'finger',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: centerX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', duration: 1000, x: centerX, y: endY },
                { type: 'pointerUp', button: 0 },
                { type: 'pause', duration: 500 },
            ]
        }])
    }

    async swipeUpSlowShortScreen() {
        await driver.performActions([{
            type: 'pointer',
            id: 'finger',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: centerX, y: startZ },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', duration: 1000, x: centerX, y: endY },
                { type: 'pointerUp', button: 0 },
                { type: 'pause', duration: 500 },
            ]
        }])
    }

    async hitEnter() {
        if (await driver.isAndroid) {
            await driver.pressKeyCode(66)
        } else {
            await $("~Return").click()
        }
    }

}

export default new Gestures;