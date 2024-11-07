import {Then, When} from '@wdio/cucumber-framework'
import {default as ContactScreen} from '../screenobjects/contact.screen.ts'
import ChatScreen from '../screenobjects/chat.screen.ts'

When(/ik klik op chat/, async () => {
  await ContactScreen.ContactButtonChat.click()
  await expect(ChatScreen.ChatHeader).toBeDisplayed()
})

Then(/zie ik de chat/, async () => {
  await expect(ChatScreen.ChatHeader).toBeDisplayed()
  await expect(ChatScreen.ChatWaitToStartTitle).not.toBeDisplayed()
  await expect(ChatScreen.ChatHistoryScrollView).toBeDisplayed()
})

Then(/zie ik een bericht binnenkomen/, async () => {
  await expect(ChatScreen.ChatMessageTextText).toBeDisplayed()
})

When(/ik stuur een bericht/, async () => {
  await ChatScreen.ChatTextInput.addValue('E2E test')
  await ChatScreen.ChatTextInputSendButton.click()
})

Then(/zie ik het bericht verschijnen/, async () => {
  await expect(ChatScreen.ChatMessageWithE2ETestText).toBeDisplayed()
})

When(/ik minimaliseer de chat/, async () => {
  await ChatScreen.ChatHeaderToggleVisibilityButton.click()
  await expect(ChatScreen.ChatHistoryScrollView).not.toBeDisplayed()
})

When(/ik maximaliseer de chat/, async () => {
  await ChatScreen.ChatHeader.click()
  await expect(ChatScreen.ChatHistoryScrollView).toBeDisplayed()
})

Then(/is de chat geminimaliseerd/, async () => {
  await expect(ChatScreen.ChatHeader).toBeDisplayed()
  await expect(ChatScreen.ChatHistoryScrollView).not.toBeDisplayed()
})

Then(/zie ik een nieuw bericht melding/, async () => {
  await expect(ChatScreen.ChatHeader).not.toHaveText('Chat')
})

Then(/zie ik geen nieuw bericht melding/, async () => {
  await expect(ChatScreen.ChatNewMessageIndicatorBadge).not.toBeDisplayed()
  await expect(ChatScreen.ChatHeader).toHaveText('Chat')
})
