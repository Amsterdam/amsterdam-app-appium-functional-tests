import gestures from '../Shared/helpers/gestures.ts'
import helpers from '../Shared/helpers/helpers.ts'
import Screen from './screen.ts'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ConstructionWorkScreen extends Screen {
  /**
   * define selectors using getter methods
   */

  get constructionWorkCardProjectDijksgrachtOost() {
    return helpers.createSelector('ConstructionWork1089175ProjectCard')
    //return $('//android.widget.Button[contains(@resource-id, "ConstructionWorkCardProject1089175")]')
  }

  get constructionWorkCardProjectOsdorpplein() {
    return helpers.createSelector('ConstructionWorkCardProject670053')
    //return $('//android.widget.Button[contains(@resource-id, "ConstructionWorkCardProject670053")]')
  }

  get constructionWorkCardProjectBullebakBullesluis() {
    return helpers.createSelector('ConstructionWorkCardProject1055386')
    //return $('//android.widget.Button[contains(@resource-id, "ConstructionWorkCardProject1055386")]')
  }

  get constructionWorkFoodCenterAmsterdamProjectCard() {
    return helpers.createSelector('ConstructionWork17ProjectCard')
  }

  get constructionWorkCentrumgebiedAmsterdamNoordProjectCard() {
    return helpers.createSelector('ConstructionWork5ProjectCard')
  }

  get constructionWorkHaarlemmermeerProjectCard() {
    return helpers.createSelector('ConstructionWork314ProjectCard')
  }

  get constructionWorkAmsterdamseBosProjectCard() {
    return helpers.createSelector('ConstructionWork13ProjectCard')
  }

  get constructionWorkDeEntreeProjectCard() {
    return helpers.createSelector('ConstructionWork947553ProjectCard')
  }

  get constructionWorkCorantijnstraatProjectCard() {
    return helpers.createSelector('ConstructionWork1200494ProjectCard')
  }

  get constructionWorkCardProjectAmsterdamSciencePark() {
    return helpers.createSelector('ConstructionWork56ProjectCard')
  }

  get constructionWorkStedelijkNoordProjectCard() {
    return helpers.createSelector('ConstructionWork201ProjectCard')
  }

  get constructionWorkCardProjectCentrumeiland() {
    return helpers.createSelector('ConstructionWork13ProjectCard')
  }

  get constructionWorkSluisbuurtOpZeeburgereilandProjectCard() {
    return helpers.createSelector('ConstructionWork47ProjectCard')
  }

  get constructionWorkAmstelIIIProjectCard() {
    return helpers.createSelector('ConstructionWork33ProjectCard')
  }

  get constructionWorkProjectFollowButton() {
    return helpers.createSelector('ConstructionWorkProjectFollowButton')
    //return $('//android.widget.Button[contains(@resource-id, "ConstructionWorkProjectFollowButton")]')
  }

  get constructionWorkProjectFollowButtonLabel() {
    return helpers.createSelector('ConstructionWorkProjectFollowButtonLabel')
    //return $('//android.widget.Button[contains(@resource-id, "ConstructionWorkProjectFollowButtonLabel")]')
  }

  get constructionWorkProjectFollowingTraitLabel() {
    return helpers.createSelector('ConstructionWorkProjectFollowingTraitLabel')
  }

  get constructionWorkSearchFieldButton() {
    return helpers.createSelector('ConstructionWorkSearchFieldButton')
    //constructionWorkProjectsNavigatorSearchField
  }

  get constructionWorkProjectsTextSearchField() {
    return helpers.createSelector('ConstructionWorkProjectsTextSearchField')
  }

  get constructionWorkProjectCardSubtitleAmsterdamSciencePark() {
    return $$(
      `android=new UiSelector().resourceId("ConstructionWork1046740ProjectCard")`,
    ).$$(
      `android=new UiSelector().resourceId("ConstructionWorkProjectCardSubtitle")`,
    )
  }

  get constructionWorkListEmptyMessage() {
    return helpers.createSelector('ConstructionWorkListEmptyMessage')
  }

  get constructionWorkProjectTitle() {
    return helpers.createSelector('ConstructionWorkProjectTitle')
  }

  get constructionWorkProjectSubtitle() {
    return helpers.createSelector('ConstructionWorkProjectSubtitle')
  }

  async tapSubPage(subpagina) {
    switch (subpagina) {
      case 'Over dit project':
        await this.constructionWorkProjectAboutButton.click()
        break
      case 'Planning':
        await this.constructionWorkProjectPlanningButton.click()
        break
      case 'Contact':
        await this.constructionWorkProjectContactButton.click()
        break
      default:
        assert.fail(`Subpagina ‘${subpagina}’ bestaan niet`)
    }
  }

  get constructionWorkProjectAboutButton() {
    return helpers.createSelector('ConstructionWorkProjectAboutButton')
  }

  get constructionWorkProjectPlanningButton() {
    return helpers.createSelector('ConstructionWorkProjectPlanningButton')
  }

  get constructionWorkProjectContactButton() {
    return helpers.createSelector('ConstructionWorkProjectContactButton')
  }

  get constructionWorkChangeLocationButton() {
    return helpers.createSelector('ConstructionWorkChangeLocationButton')
  }

  get constructionWorkChangeLocationButtonText() {
    return helpers.createSelector('ConstructionWorkChangeLocationButtonText')
  }

  get constructionWorkRequestLocationButton() {
    return helpers.createSelector('ConstructionWorkRequestLocationButton')
  }

  get constructionWorkRequestLocationButtonText() {
    return helpers.createSelector('ConstructionWorkRequestLocationButtonText')
  }

  get constructionWorkRequestLocationButtonTitle() {
    return helpers.createSelector('ConstructionWorkRequestLocationButtonTitle')
  }

  get constructionWorkChangeLocationButtonTitle() {
    return helpers.createSelector('ConstructionWorkChangeLocationButtonTitle')
  }

  get androidAllowNotificationsButton() {
    const androidSelector =
      'new UiSelector().text("Allow").className("android.widget.Button")'
    const selector = $(`android=${androidSelector}`)
    return selector
  }

  get constructionWorkProjectArticlePreviewButton() {
    return helpers.createSelector('ConstructionWorkProjectArticlePreviewButton')
  }

  async ConstructionWorkProjectArticlePreviewTitle(title) {
    if (this.OS === 'iOS') {
      const date = new Date()
      const day = date.getDate()
      const months = [
        'januari',
        'februari',
        'maart',
        'april',
        'mei',
        'juni',
        'juli',
        'augustus',
        'september',
        'oktober',
        'november',
        'december',
      ]
      const month = months[date.getMonth()]
      const label = `Nieuw ${day} ${month} ${title}`
      return label
    } else {
      const date = new Date()
      const day = date.getDate()
      const months = [
        'januari',
        'februari',
        'maart',
        'april',
        'mei',
        'juni',
        'juli',
        'augustus',
        'september',
        'oktober',
        'november',
        'december',
      ]
      const month = months[date.getMonth()]
      const label = `Nieuw, ${day} ${month}, ${title}`
      return label
    }
  }

  async searchProject(project) {
    await this.constructionWorkSearchFieldButton.click()
    await expect(this.headerTitle).toHaveText('Zoek in werkzaamheden')
    await this.constructionWorkProjectsTextSearchField.addValue(project)
    await gestures.hitEnter()
  }
}

export default new ConstructionWorkScreen()
