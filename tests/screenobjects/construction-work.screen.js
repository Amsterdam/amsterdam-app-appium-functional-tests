import helpers from '../Shared/helpers/helpers.js';
import Screen from './screen.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ConstructionWorkScreen extends Screen {
  /**
   * define selectors using getter methods
   */


  get constructionWorkCardProjectDijksgrachtOost() {
    return helpers.createSelector("ConstructionWork1089175ProjectCard")
    //return $('//android.widget.Button[contains(@resource-id, "ConstructionWorkCardProject1089175")]')
  }

  get constructionWorkCardProjectOsdorpplein() {
    return helpers.createSelector("ConstructionWorkCardProject670053")
    //return $('//android.widget.Button[contains(@resource-id, "ConstructionWorkCardProject670053")]')
  }

  get constructionWorkCardProjectBullebakBullesluis() {
    return helpers.createSelector("ConstructionWorkCardProject1055386")
    //return $('//android.widget.Button[contains(@resource-id, "ConstructionWorkCardProject1055386")]')
  }

  get constructionWorkAmsterdamZuidoostProjectCard() {
    return helpers.createSelector("ConstructionWork1177659ProjectCard")
  }

  get constructionWorkFoodCenterAmsterdamProjectCard() {
    return helpers.createSelector("ConstructionWork744089ProjectCard")
  }

  get constructionWorkCentrumgebiedAmsterdamNoordProjectCard() {
    return helpers.createSelector("ConstructionWork584340ProjectCard")
  }

  get constructionWorkAmsterdamseBosProjectCard() {
    return helpers.createSelector("ConstructionWork1142882ProjectCard")
  }

  get constructionWorkDeEntreeProjectCard() {
    return helpers.createSelector("ConstructionWork947553ProjectCard")
  }

  get constructionWorkCorantijnstraatProjectCard() {
    return helpers.createSelector("ConstructionWork1200494ProjectCard")
  }

  get constructionWorkCardProjectAmsterdamSciencePark() {
    return helpers.createSelector("ConstructionWork1046740ProjectCard")
  }

  get constructionWorkHouthavenProjectCard() {
    return helpers.createSelector("ConstructionWork872911ProjectCard")
  }

  get constructionWorkCardProjectCentrumeiland() {
    return helpers.createSelector("ConstructionWork694239ProjectCard")
  }

  get constructionWorkSluisbuurtOpZeeburgereilandProjectCard() {
    return helpers.createSelector("ConstructionWork1010139ProjectCard")
  }

  get constructionWorkAmstelIIIProjectCard() {
    return helpers.createSelector("ConstructionWork976821ProjectCard")
  }

  get constructionWorkProjectFollowButton() {
    return helpers.createSelector("ConstructionWorkProjectFollowButton")
    //return $('//android.widget.Button[contains(@resource-id, "ConstructionWorkProjectFollowButton")]')
  }

  get constructionWorkProjectFollowButtonLabel() {
    return helpers.createSelector("ConstructionWorkProjectFollowButtonLabel")
    //return $('//android.widget.Button[contains(@resource-id, "ConstructionWorkProjectFollowButtonLabel")]')
  }

  get constructionWorkProjectFollowingTraitLabel() {
    return helpers.createSelector("ConstructionWorkProjectFollowingTraitLabel")
  }

  get constructionWorkProjectsNavigatorSearchField() {
    return helpers.createSelector("ConstructionWorkProjectsNavigatorSearchField")
  }

  get constructionWorkProjectsTextSearchField() {
    return helpers.createSelector("ConstructionWorkProjectsTextSearchField")
  }

  get constructionWorkProjectCardSubtitleAmsterdamSciencePark() {
    return $$(`android=new UiSelector().resourceId("ConstructionWork1046740ProjectCard")`).$$(`android=new UiSelector().resourceId("ConstructionWorkProjectCardSubtitle")`)
  }

  get constructionWorkListEmptyMessage() {
    return helpers.createSelector("ConstructionWorkListEmptyMessage")
  }

  get constructionWorkProjectTitle() {
    return helpers.createSelector("ConstructionWorkProjectTitle")
  }

  get constructionWorkProjectSubtitle() {
    return helpers.createSelector("ConstructionWorkProjectSubtitle")
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
    return helpers.createSelector("ConstructionWorkProjectAboutButton")
  }

  get constructionWorkProjectPlanningButton() {
    return helpers.createSelector("ConstructionWorkProjectPlanningButton")
  }

  get constructionWorkProjectContactButton() {
    return helpers.createSelector("ConstructionWorkProjectContactButton")
  }

  get constructionWorkChangeLocationButton() {
    return helpers.createSelector("ConstructionWorkChangeLocationButton");
  }

  get constructionWorkChangeLocationButtonText() {
    return helpers.createSelector("ConstructionWorkChangeLocationButtonText");
  }

  get constructionWorkRequestLocationButton() {
    return helpers.createSelector("ConstructionWorkRequestLocationButton");
  }
  get constructionWorkChangeLocationButtonText() {
    return helpers.createSelector("ConstructionWorkChangeLocationButtonText");
  }

  async ConstructionWorkProjectArticlePreviewTitle(title) {
    const date = new Date();
    const day = date.getDate();
    const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']
    const month = months[date.getMonth()]
    const currentOS = driver.capabilities.platformName
    if (currentOS === 'Android') {
      return helpers.createContentSelector(`Nieuw, ${day} ${month}, ${title}`)
    } else {
      return helpers.createContentSelector(`Nieuw ${day} ${month} ${title}`)
    }

  }
}


export default new ConstructionWorkScreen();