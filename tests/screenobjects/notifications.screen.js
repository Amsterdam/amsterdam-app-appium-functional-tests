import gestures from "../Shared/helpers/gestures.js";
import helpers from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub screen containing specific selectors and methods for a specific screen
 */
class NotificationsScreen extends Screen {
  /**
   * define selectors using getter methods
   */

  get projectCardPlaatsBerichtenBullebakBullesluis() {
    return helpers.createContentSelector("Bullebak en Bullebakssluis, Vervangen bruggen")
  }

  get projectCardPlaatsBerichtenAmstelIII() {
    const OS = driver.capabilities.platformName
    if (OS === 'iOS') {
      const selector = '**/XCUIElementTypeButton[`label == "Amstel III, Ontwikkeling woongebied gemixt met werken"`]'
      return $(`-ios class chain:${selector}`)
    } else {
      return helpers.createContentSelector("Amstel III, Ontwikkeling woongebied gemixt met werken")
    }
  }

  get constructionWorkEditorCreateMessageTitleInput() {
    return helpers.createSelector("ConstructionWorkEditorCreateMessageTitleInput")
  }

  get constructionWorkEditorCreateMessageBodyInput() {
    return helpers.createSelector("ConstructionWorkEditorCreateMessageBodyInput")
  }

  get constructionWorkEditorCreateMessageNextButton() {
    return helpers.createSelector("ConstructionWorkEditorCreateMessageNextButton")
  }

  get constructionWorkEditorCreateMessageSendPushNotificationCheckbox() {
    return helpers.createSelector("ConstructionWorkEditorCreateMessageSendPushNotificationCheckbox")
  }

  get constructionWorkEditorCreateMessageSubmitButton() {
    return helpers.createSelector("ConstructionWorkEditorCreateMessageSubmitButton")
  }

  get successMessage() {
    return helpers.createContentSelector("Gelukt! De app herkent je nu als omgevingsmanager voor onderstaande projecten. Tik op het project waarvoor je een bericht wilt plaatsen.")
  }

  get constructionWorkEditorCreateMessageAddImageButton() {
    return helpers.createSelector("ConstructionWorkEditorCreateMessageAddImageButton")
  }

  get ConstructionWorkEditorCreateMessageTakeImageButton() {
    return helpers.createSelector("ConstructionWorkEditorCreateMessageTakeImageButton")
  }

  async createMessageNoPhoto(titel, tekst) {
    await this.constructionWorkEditorCreateMessageTitleInput.waitForDisplayed(2000)
    await this.constructionWorkEditorCreateMessageTitleInput.addValue(titel)
    await this.constructionWorkEditorCreateMessageBodyInput.addValue(tekst)
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(this.constructionWorkEditorCreateMessageNextButton, 4)
    await this.constructionWorkEditorCreateMessageNextButton.click()
  }

}

export default new NotificationsScreen();
