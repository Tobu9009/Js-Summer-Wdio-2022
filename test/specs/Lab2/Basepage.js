class Basepage{
    async clickOn(locator){
        await $(locator).click()
    }

    async selectElementByVisibleText(loc, text){
        await $(loc).selectElementByVisibleText(text)
    }

    async getElementText(locator){
        return await $(locator).getText();
    }
}
module.exports = Basepage;