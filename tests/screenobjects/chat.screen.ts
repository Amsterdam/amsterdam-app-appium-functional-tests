import helpers from '../Shared/helpers/helpers.ts'
import Screen from './screen.ts'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ChatScreen extends Screen {
  /**
   * define selectors using getter methods
   */

  get ChatHeader() {
    return helpers.createSelector('ChatHeader')
  }
  get ChatWaitToStartTitle() {
    return helpers.createSelector('ChatWaitToStartTitle')
  }
  get ChatHistoryScrollView() {
    return helpers.createSelector('ChatHistoryScrollView')
  }
  get ChatMessageWithE2ETestText() {
    return helpers.createTextBasedSelector(
      'E2E test',
      'android.widget.TextView',
    )
  }
  get ChatTextInput() {
    return helpers.createSelector('ChatTextInput')
  }
  get ChatTextInputSendButton() {
    return helpers.createSelector('ChatTextInputSendButton')
  }
  get ChatEntryText() {
    return helpers.createSelector('ChatEntryText')
  }
  get ChatHeaderToggleVisibilityButton() {
    return helpers.createSelector('ChatHeaderToggleVisibilityButton')
  }
  get ChatHeaderMeatballsMenuButton() {
    return helpers.createSelector('ChatHeaderMeatballsMenuButton')
  }
  get ChatMenuPressableDownloadChat() {
    return helpers.createSelector('ChatMenuPressableDownloadChat')
  }
  get ChatDownloadedInlineMessage() {
    return helpers.createSelector('ChatDownloadedInlineMessage')
  }
  get ChatNewMessageIndicatorBadge() {
    return helpers.createSelector('ChatNewMessageIndicatorBadge')
  }
}

export default new ChatScreen()
