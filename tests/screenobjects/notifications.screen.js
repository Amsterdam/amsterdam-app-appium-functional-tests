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

  get constructionWorkEditorCreateMessageTakeImageButton() {
    return helpers.createSelector("ConstructionWorkEditorCreateMessageTakeImageButton")
  }

  get hamburgerMenuIcon() {
    return helpers.createContentSelector("Show roots")
  }
  get imageSelector() {
    return $('android=new UiSelector().descriptionContains("image.jpg")')
  }

  get downloadButton() {
    const selector = 'new UiSelector().text("Downloads").className("android.widget.Textview")'
    const button = $(`android=${selector}`)
    return button
  }

  get photoEditorCropButton() {
    return helpers.createContentSelector("Crop")
  }

  get photoEditorNavigateUpButton() {
    return helpers.createContentSelector("Navigate Up")
  }

  get constructionWorkEditorCreateMessageImageDescriptionInput() {
    return helpers.createSelector("ConstructionWorkEditorCreateMessageImageDescriptionInput")
  }

  get addPhotoTitle() {
    const selector = 'new UiSelector().text("Foto toevoegen").className("android.view.View")'
    const title = $(`android=${selector}`)
    return title
  }

  get constructionWorkEditorAddImageToMessageNextButton() {
    return helpers.createSelector("ConstructionWorkEditorAddImageToMessageNextButton")
  }

  get emulatorAllowAccessPhotos() {
    return helpers.createSelector("com.android.permissioncontroller:id/permission_allow_button")
  }

  async createMessageNoPhoto(titel, tekst) {
    await this.constructionWorkEditorCreateMessageTitleInput.waitForDisplayed(2000)
    await this.constructionWorkEditorCreateMessageTitleInput.addValue(titel)
    await this.constructionWorkEditorCreateMessageBodyInput.addValue(tekst)
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(this.constructionWorkEditorCreateMessageNextButton, 4)
    await this.constructionWorkEditorCreateMessageNextButton.click()
  }

  async createMessagePhoto(titel, tekst) {
    await this.constructionWorkEditorCreateMessageTitleInput.waitForDisplayed(2000)
    await this.constructionWorkEditorCreateMessageTitleInput.addValue(titel)
    await this.constructionWorkEditorCreateMessageBodyInput.addValue(tekst)
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(this.constructionWorkEditorCreateMessageNextButton, 4)
  }

  async addPhotoAndroid() {
    await this.constructionWorkEditorCreateMessageAddImageButton.click()
    if (this.emulatorAllowAccessPhotos.isDisplayed == true) {
      await this.emulatorAllowAccessPhotos.click()
    }
    if (this.downloadButton.isDisplayed() == true) {
      await this.downloadButton.click()
    }
    await this.imageSelector.click()
    await this.photoEditorCropButton.click()
    await expect(this.addPhotoTitle).toBeDisplayed()
    await expect(this.constructionWorkEditorCreateMessageImageDescriptionInput).toBeDisplayed()
    await this.constructionWorkEditorCreateMessageImageDescriptionInput.addValue("Aan de Amstel")
    await this.constructionWorkEditorAddImageToMessageNextButton.click()
  }

}

export default new NotificationsScreen();
