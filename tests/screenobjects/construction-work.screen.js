import createSelector from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ConstructionWorkScreen extends Screen {
  /**
   * define selectors using getter methods
   */


  get constructionWorkCardProjectDijksgrachtOost() {
    return createSelector("ConstructionWork1089175ProjectCard")
    //return $('//android.widget.Button[contains(@resource-id, "ConstructionWorkCardProject1089175")]')
  }

  get constructionWorkCardProjectOsdorpplein() {
    return createSelector("ConstructionWorkCardProject670053")
    //return $('//android.widget.Button[contains(@resource-id, "ConstructionWorkCardProject670053")]')
  }

  get constructionWorkCardProjectBullebakBullesluis() {
    return createSelector("ConstructionWorkCardProject1055386")
    //return $('//android.widget.Button[contains(@resource-id, "ConstructionWorkCardProject1055386")]')
  }

  get constructionWorkAmsterdamZuidoostProjectCard() {
    return createSelector("ConstructionWork1177659ProjectCard")
  }

  get constructionWorkFoodCenterAmsterdamProjectCard() {
    return createSelector("ConstructionWork744089ProjectCard")
  }

  get constructionWorkCentrumgebiedAmsterdamNoordProjectCard() {
    return createSelector("ConstructionWork584340ProjectCard")
  }

  get constructionWorkAmsterdamseBosProjectCard() {
    return createSelector("ConstructionWork1142882ProjectCard")
  }

  get constructionWorkDeEntreeProjectCard() {
    return createSelector("ConstructionWork947553ProjectCard")
  }

  get constructionWorkCorantijnstraatProjectCard() {
    return createSelector("ConstructionWork1200494ProjectCard")
  }

  get constructionWorkCardProjectAmsterdamSciencePark() {
    return createSelector("ConstructionWork1046740ProjectCard")
  }

  get constructionWorkCardProjectCentrumeiland() {
    return createSelector("ConstructionWork694239ProjectCard")
  }

  get constructionWorkProjectFollowButton() {
    return createSelector("ConstructionWorkProjectFollowButton")
    //return $('//android.widget.Button[contains(@resource-id, "ConstructionWorkProjectFollowButton")]')
  }

  get constructionWorkProjectFollowButtonLabel() {
    return createSelector("ConstructionWorkProjectFollowButtonLabel")
    //return $('//android.widget.Button[contains(@resource-id, "ConstructionWorkProjectFollowButtonLabel")]')
  }

  get constructionWorkProjectFollowingTraitLabel() {
    return createSelector("ConstructionWorkProjectFollowingTraitLabel")
  }

  get constructionWorkProjectsNavigatorSearchField() {
    return createSelector("ConstructionWorkProjectsNavigatorSearchField")
  }

  get constructionWorkProjectsTextSearchField() {
    return createSelector("ConstructionWorkProjectsTextSearchField")
  }

  get constructionWorkProjectCardSubtitleAmsterdamSciencePark() {
    return $$(`android=new UiSelector().resourceId("ConstructionWork1046740ProjectCard")`).$$(`android=new UiSelector().resourceId("ConstructionWorkProjectCardSubtitle")`)
  }

  get constructionWorkListEmptyMessage() {
    return createSelector("ConstructionWorkListEmptyMessage")
  }

  get constructionWorkProjectTitle() {
    return createSelector("ConstructionWorkProjectTitle")
  }

  get constructionWorkProjectSubtitle() {
    return createSelector("ConstructionWorkProjectSubtitle")
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
    return createSelector("ConstructionWorkProjectAboutButton")
  }

  get constructionWorkProjectPlanningButton() {
    return createSelector("ConstructionWorkProjectPlanningButton")
  }

  get constructionWorkProjectContactButton() {
    return createSelector("ConstructionWorkProjectContactButton")
  }
}


export default new ConstructionWorkScreen();