import { Then, When } from "@wdio/cucumber-framework";
import productTourScreen from "../screenobjects/product-tour.screen.js";

Then(/(.*): ik zie een pop-up bij de knop/, async (scherm) => {
    await productTourScreen.checkPopUp(scherm)
})

When(/(.*): ik tik op de pop-up/, async (scherm) => {
    await productTourScreen.clickPopUp(scherm)
})

Then(/(.*): de pop-up verdwijnt/, async (scherm) => {
    await productTourScreen.checkPopUpDissapear(scherm)
})