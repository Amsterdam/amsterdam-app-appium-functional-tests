/**
 * To make a Gesture methods more robust for multiple devices and also
 * multiple screen sizes the advice is to work with percentages instead of
 * actual coordinates. The percentages will calculate the position on the
 * screen based on the SCREEN_SIZE which will be determined once if needed
 * multiple times.
 */

let SCREEN_SIZE: ScreenSize

/**
 * The values in the below object are percentages of the screen
 */
const SWIPE_DIRECTION = {
  down: {
    start: {x: 50, y: 15},
    end: {x: 50, y: 85},
  },
  left: {
    start: {x: 95, y: 50},
    end: {x: 5, y: 50},
  },
  right: {
    start: {x: 5, y: 50},
    end: {x: 95, y: 50},
  },
  up: {
    start: {x: 50, y: 85},
    end: {x: 50, y: 15},
  },
}

type Coordinate = {x: number; y: number}
type ScreenSize = {width: number; height: number}

class GesturesScreen {
  /**
   * Check if an element is visible and if not swipe up a portion of the screen to
   * check if it is visible after x amount of scrolls
   */
  static async checkIfDisplayedWithSwipeUp(
    element: ChainablePromiseElement,
    maxScrolls: number,
    amount = 0,
  ) {
    // If the element is not displayed and we haven't scrolled the max amount of scrolls
    // then scroll and execute the method again
    for (let i = amount; i < maxScrolls; i++) {
      if (!(await element.isDisplayed())) {
        await this.swipeUp(0.85)
        amount++
      }
    }
    if (amount >= maxScrolls) {
      // If the element is still not visible after the max amount of scroll let it fail
      throw new Error(
        `The element '${await element}' could not be found or is not visible.`,
      )
    }
  }

  /**
   * Check if an element is visible and if not swipe down a portion of the screen to
   * check if it is visible after x amount of scrolls
   */
  static async checkIfDisplayedWithSwipeDown(
    element: ChainablePromiseElement,
    maxScrolls: number,
    amount = 0,
  ) {
    // If the element is not displayed and we haven't scrolled the max amount of scrolls
    // then scroll and execute the method again
    for (let i = amount; i < maxScrolls; i++) {
      if (!(await element.isDisplayed())) {
        await this.swipeDown(0.85)
      }
    }
    if (amount > maxScrolls) {
      // If the element is still not visible after the max amount of scroll let it fail
      throw new Error(
        `The element '${element}' could not be found or is not visible.`,
      )
    }
  }

  /**
   * Swipe down based on a percentage
   */
  static async swipeDown(percentage = 1) {
    await this.swipeOnPercentage(
      this.calculateXY(SWIPE_DIRECTION.down.start, percentage),
      this.calculateXY(SWIPE_DIRECTION.down.end, percentage),
    )
  }

  /**
   * Swipe Up based on a percentage
   */
  static async swipeUp(percentage = 1) {
    await this.swipeOnPercentage(
      this.calculateXY(SWIPE_DIRECTION.up.start, percentage),
      this.calculateXY(SWIPE_DIRECTION.up.end, percentage),
    )
  }

  /**
   * Swipe left based on a percentage
   */
  static async swipeLeft(percentage = 1) {
    await this.swipeOnPercentage(
      this.calculateXY(SWIPE_DIRECTION.left.start, percentage),
      this.calculateXY(SWIPE_DIRECTION.left.end, percentage),
    )
  }

  /**
   * Swipe right based on a percentage
   */
  static async swipeRight(percentage = 1) {
    await this.swipeOnPercentage(
      this.calculateXY(SWIPE_DIRECTION.right.start, percentage),
      this.calculateXY(SWIPE_DIRECTION.right.end, percentage),
    )
  }

  /**
   * Swipe right based on a selector
   */
  static async swipeRightSelector(selector: ChainablePromiseElement) {
    const elementId = await selector.elementId
    const swipeItem = await driver.getElementRect(elementId)
    const y = Math.round((swipeItem.y + swipeItem.height) / 2)
    this.swipe(
      {x: Math.round(swipeItem.x + swipeItem.width * 0.2), y},
      {x: Math.round(swipeItem.width - swipeItem.width * 0.2), y},
    )
  }

  /**
   * Swipe left based on a selector
   */
  static async swipeLeftSelector(selector: ChainablePromiseElement) {
    const elementId = await selector.elementId
    const swipeItem = await driver.getElementRect(elementId)
    const y = Math.round((swipeItem.y + swipeItem.height) / 2)
    this.swipe(
      {x: Math.round(swipeItem.width - swipeItem.width * 0.2), y},
      {x: Math.round(swipeItem.x + swipeItem.width * 0.2), y},
    )
  }

  /**
   * Swipe from coordinates (from) to the new coordinates (to). The given coordinates are
   * percentages of the screen.
   */
  static async swipeOnPercentage(from: Coordinate, to: Coordinate) {
    // Get the screen size and store it so it can be re-used.
    // This will save a lot of webdriver calls if this method is used multiple times.
    SCREEN_SIZE = SCREEN_SIZE || (await driver.getWindowRect())
    // Get the start position on the screen for the swipe
    const pressOptions = this.getDeviceScreenCoordinates(SCREEN_SIZE, from)
    // Get the move to position on the screen for the swipe
    const moveToScreenCoordinates = this.getDeviceScreenCoordinates(
      SCREEN_SIZE,
      to,
    )

    await this.swipe(pressOptions, moveToScreenCoordinates)
  }

  static async swipeOnPercentageScrollView(
    selector: ChainablePromiseElement,
    from: Coordinate,
    to: Coordinate,
  ) {
    // Get the screen size and store it so it can be re-used.
    // This will save a lot of webdriver calls if this method is used multiple times.
    const elementId = await selector.elementId
    SCREEN_SIZE =
      (await driver.getElementRect(elementId)) ||
      SCREEN_SIZE ||
      (await driver.getWindowRect())
    // Get the start position on the screen for the swipe
    // @ts-ignore dit klopt niet
    const pressOptions = this.getElementCoordinates(SCREEN_SIZE, from)
    // Get the move to position on the screen for the swipe
    // @ts-ignore dit klopt niet
    const moveToScreenCoordinates = this.getElementCoordinates(SCREEN_SIZE, to)
    await this.swipe(pressOptions, moveToScreenCoordinates)
  }

  /**
   * Swipe from coordinates (from) to the new coordinates (to). The given coordinates are in pixels.
   */
  static async swipe(from: Coordinate, to: Coordinate) {
    await driver.performActions([
      {
        // a. Create the event
        type: 'pointer',
        id: 'finger1',
        parameters: {pointerType: 'touch'},
        actions: [
          // b. Move finger into start position
          {type: 'pointerMove', duration: 0, x: from.x, y: from.y},
          // c. Finger comes down into contact with screen
          {type: 'pointerDown', button: 0},
          // d. Pause for a little bit
          {type: 'pause', duration: 100},
          // e. Finger moves to end position
          //    We move our finger from the center of the element to the
          //    starting position of the element.
          //    Play with the duration to make the swipe go slower / faster
          {type: 'pointerMove', duration: 1000, x: to.x, y: to.y},
          // f. Finger gets up, off the screen
          {type: 'pointerUp', button: 0},
        ],
      },
    ])
    // Add a pause, just to make sure the swipe is done
    await driver.pause(1000)
  }

  /**
   * Get the screen coordinates based on a device's screen size
   */
  static getElementCoordinates(screenSize: ScreenSize, percentage: number) {
    return {
      x: Math.round(screenSize.width * 0.5),
      y: Math.round(screenSize.height * percentage),
    }
  }
  static getDeviceScreenCoordinates(
    screenSize: ScreenSize,
    coordinates: Coordinate,
  ) {
    return {
      x: Math.round((screenSize.width * coordinates.x) / 100),
      y: Math.round((screenSize.height * coordinates.y) / 100),
    }
  }

  /**
   * Calculate the x y coordinates based on a percentage
   */
  static calculateXY({x, y}: Coordinate, percentage: number) {
    return {
      x: x * percentage,
      y: y * percentage,
    }
  }
}

export default GesturesScreen
