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

  get projectCardPlaatsBerichtenSluisbuurt() {
    const OS = driver.capabilities.platformName
    if (OS === 'iOS') {
      const selector = '**/XCUIElementTypeButton[`label == "Sluisbuurt op Zeeburgereiland, 5.500 nieuwe woningen"`]'
      return $(`-ios class chain:${selector}`)
    } else {
      return helpers.createContentSelector("Sluisbuurt op Zeeburgereiland, 5.500 nieuwe woningen")
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

  get photoEditorCropButton() {
    return helpers.createContentSelector("Crop")
  }

  get photoEditorNavigateUpButton() {
    return helpers.createContentSelector("Navigate Up")
  }

  get constructionWorkEditorCreateMessageImageDescriptionInput() {
    return helpers.createSelector("ConstructionWorkEditorCreateMessageImageDescriptionInput")
  }

  get constructionWorkEditorAddImageToMessageNextButton() {
    return helpers.createSelector("ConstructionWorkEditorAddImageToMessageNextButton")
  }

  get successMessageAlert() {
    return helpers.createContentSelector('Gelukt, Uw bericht is geplaatst.')
  }

  //specific ios selectors
  get recentPhotos() {
    const simulatorRegex = new RegExp('(.*-.*){2,}');
    // Check if we are a simulator
    if ('udid' in driver.capabilities && simulatorRegex.test(driver.capabilities.udid)) {
      const selector = 'label == "Recents"'
      return $(`-ios predicate string:${selector}`);
    } else {
      const selector = 'label == "Recent"'
      return $(`-ios predicate string:${selector}`);
    }
  }

  get accessPhotos() {
    //const selector = 'label == "Select Photos..."'
    //label == "Selecteer foto's…"
    //-ios predicate string:type == "XCUIElementTypeButton" AND label == "Allow"
    const platformVersion = parseInt(driver.capabilities.platformVersion)
    if (platformVersion > 16) {
      return $(`-ios predicate string:type == "XCUIElementTypeButton" AND label == "Allow Full Access"`);
    } else {
      return $(`-ios predicate string:type == "XCUIElementTypeButton" AND label == "Allow Access to All Photos"`);
    }
  }

  get allowSelector() {
    return $(`-ios predicate string:type == "XCUIElementTypeButton" AND label == "Allow"`)
  }

  get pickImage() {
    const selector = '**/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeCollectionView/XCUIElementTypeCell[1]/XCUIElementTypeOther/XCUIElementTypeImage'
    return $(`-ios class chain:${selector}`)
  }

  get kiezenButton() {
    return $('-ios predicate string:label == "Kiezen" AND name == "Kiezen" AND type == "XCUIElementTypeButton"');
  }

  get photo() {
    return $('-ios predicate string:type == "XCUIElementTypeImage"')
  }

  get accessCamera() {
    //const selector = 'label == "Select Photos..."'
    //label == "Selecteer foto's…"
    //-ios predicate string:type == "XCUIElementTypeButton" AND label == "Allow"
    return $(`-ios predicate string:type == "XCUIElementTypeButton" AND label == "OK"`);
  }

  get photoCaptureButton() {
    return $(`-ios predicate string:type == "XCUIElementTypeButton" AND name == "PhotoCapture"`);
  }

  get usePhotoButton() {
    return $(`-ios predicate string:type == "	XCUIElementTypeButton" AND name == "Done" AND label == "Gebruik foto"`);
  }

  //specific android selectors
  get emulatorAllowAccessPhotos() {
    return helpers.createSelector("com.android.permissioncontroller:id/permission_allow_button")
  }

  get addPhotoTitle() {
    const selector = 'new UiSelector().text("Foto toevoegen").className("android.view.View")'
    const title = $(`android=${selector}`)
    return title
  }

  get imageSelector() {
    return $('android=new UiSelector().descriptionContains("image.jpg")')
  }

  get downloadButton() {
    const selector = 'new UiSelector().text("Downloads").className("android.widget.Textview")'
    const button = $(`android=${selector}`)
    return button
  }

  get shutterButton() {
    return helpers.createSelector('com.android.camera2:id/shutter_button')
  }

  get doneButton() {
    return helpers.createSelector('com.android.camera2:id/done_button')
  }

  get cameraPermissionButton() {
    return helpers.createSelector("com.android.permissioncontroller:id/permission_allow_foreground_only_button")
  }

  get constructionWorkEditorCreateMessageTitleTitle() {
    const OS = driver.capabilities.platformName
    if (OS === 'iOS') {
      const selector = ''
      return $(`-ios class chain:${selector}`)
    } else {
      const selector = 'new UiSelector().text("Wat is de titel van je bericht?").className("android.view.View")'
      const button = $(`android=${selector}`)
      return button
    }
  }

  get constructionWorkEditorCreateMessageBodyTitle() {
    const OS = driver.capabilities.platformName
    if (OS === 'iOS') {
      const selector = ''
      return $(`-ios class chain:${selector}`)
    } else {
      const selector = 'new UiSelector().text("Wat is de tekst van je bericht?").className("android.view.View")'
      const button = $(`android=${selector}`)
      return button
    }
  }

  async createMessageNoPhoto(title, text) {
    const OS = driver.capabilities.platformName
    await this.constructionWorkEditorCreateMessageTitleInput.waitForDisplayed(2000)
    await this.constructionWorkEditorCreateMessageTitleInput.addValue(title)
    if (OS === 'Android') {
      await this.constructionWorkEditorCreateMessageTitleTitle.click()
    }
    //check if keyboard is shown
    if (!(await driver.isKeyboardShown())) {
      await this.constructionWorkEditorCreateMessageBodyInput.click()
    }
    await this.constructionWorkEditorCreateMessageBodyInput.addValue(text)
    if (OS === 'Android') {
      await this.constructionWorkEditorCreateMessageBodyTitle.click()
    }
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(this.constructionWorkEditorCreateMessageNextButton, 4)
    await this.constructionWorkEditorCreateMessageNextButton.click()
  }

  async createMessagePhoto(title, text) {
    const OS = driver.capabilities.platformName
    await this.constructionWorkEditorCreateMessageTitleInput.waitForDisplayed(2000)
    await this.constructionWorkEditorCreateMessageTitleInput.addValue(title)
    if (OS === 'Android') {
      await this.constructionWorkEditorCreateMessageTitleTitle.click()
    }
    await this.constructionWorkEditorCreateMessageBodyInput.addValue(text)
    if (OS === 'Android') {
      await this.constructionWorkEditorCreateMessageBodyTitle.click()
    }
    await gestures.checkProjectDisplayedWithScrollDownShortScreen(this.constructionWorkEditorCreateMessageNextButton, 4)
  }

  async addPhotoAndroid() {
    await this.constructionWorkEditorCreateMessageAddImageButton.click()
    await driver.pause(2000)
    const allowButton = helpers.createSelector('com.android.permissioncontroller:id/permission_allow_button')
    if (await allowButton.isDisplayed() == true) {
      await allowButton.click()
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

  async takePhotoAndroid() {
    await this.constructionWorkEditorCreateMessageTakeImageButton.click()
    await this.cameraPermissionButton.click()
    await this.shutterButton.click()
    await this.doneButton.click()
    await this.photoEditorCropButton.click()
    await this.photoEditorCropButton.click()
    await expect(this.addPhotoTitle).toBeDisplayed()
    await expect(this.constructionWorkEditorCreateMessageImageDescriptionInput).toBeDisplayed()
    await this.constructionWorkEditorCreateMessageImageDescriptionInput.addValue("Aan de Amstel")
    await this.constructionWorkEditorAddImageToMessageNextButton.click()
  }

  async addPhotoiOS() {
    await this.constructionWorkEditorCreateMessageAddImageButton.click()
    await this.accessPhotos.click()
    await this.recentPhotos.click()
    await this.pickImage.click()
    await this.kiezenButton.click()
    await expect(this.constructionWorkEditorCreateMessageImageDescriptionInput).toBeDisplayed()
    await this.constructionWorkEditorCreateMessageImageDescriptionInput.addValue("Aan de Amstel")
    await this.photo.click()
    await this.constructionWorkEditorAddImageToMessageNextButton.click()
  }

  async takePhotoiOS() {
    await this.constructionWorkEditorCreateMessageTakeImageButton.click()
    await this.accessCamera.waitForDisplayed()
    await this.accessCamera.click()
    await this.photoCaptureButton.waitForDisplayed()
    await this.photoCaptureButton.click()
    await this.usePhotoButton.waitForDisplayed()
    await this.usePhotoButton.click()
    await this.kiezenButton.waitForDisplayed()
    await this.kiezenButton.click()
    await expect(this.constructionWorkEditorCreateMessageImageDescriptionInput).toBeDisplayed()
    await this.constructionWorkEditorCreateMessageImageDescriptionInput.addValue("Aan de Amstel")
    await this.photo.click()
    await this.constructionWorkEditorAddImageToMessageNextButton.click()
  }
}



export default new NotificationsScreen();
