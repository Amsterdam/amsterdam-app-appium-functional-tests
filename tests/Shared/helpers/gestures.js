//get screensize
const scrollViewRect = await driver.getWindowRect()

//get starting points for scrolling    
const centerX = scrollViewRect.x + (scrollViewRect.width / 2)
const startY = scrollViewRect.y + (scrollViewRect.height * 0.9)
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
                this.swipeUp();
            } else if (await element.isDisplayed()) {
                break
            }
            expect(element).toBeDisplayed()
            // this.swipeDown()
        }
    }

    async checkProjectDisplayedWithScrollDownSlow(element, maxScrolls) {
        for (let i = 0; i < maxScrolls; i++) {
            if ((!await element.isDisplayed() && i < maxScrolls)) {
                this.swipeUpSlow();
            } else if (await element.isDisplayed()) {
                break
            }
            expect(element).toBeDisplayed()
            // this.swipeDown()
        }
    }

    async checkProjectDisplayedWithScrollUp(element, maxScrolls) {
        for (let i = 0; i < maxScrolls; i++) {
            if ((!await element.isDisplayed() && i < maxScrolls)) {
                this.swipeDown();
            } else if (await element.isDisplayed()) {
                break
            }
            expect(element).toBeDisplayed()
        }
    }

    async checkProjectDisplayedWithScrollDownAndClick(element, maxScrolls) {
        for (let i = 0; i < maxScrolls; i++) {
            if (!await element.isDisplayed()) {
                this.swipeUp();
            } else if (await element.isDisplayed()) {
                await driver.pause(2000)
                await element.click()
                break
            } else if (amount > maxScrolls) {
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
                { type: 'pointerMove', duration: 800, x: centerX, y: endY },
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