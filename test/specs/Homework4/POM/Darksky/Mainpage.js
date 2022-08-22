/**
 * Complete the automation using POM design
 */

const CommandsHw = require("../CommandsHw");

/**
 * Tc-1:
 * https://www.darsky.net
 * Verify feelsLikeTempValue is between lowTempValue and highTempValue
 */

/**
 * Tc-2:
 * https://www.darsky.net
 * Verify user can get temperature based on zipcode
 * 
 */

class Mainpage{
    commands = new CommandsHw()
    feelsLikeLocator = 'span[class="feels-like-text"]';
    lowTempValueLocator = 'span[class="low-temp-text"]';
    highTempValueLocator = 'span[class="high-temp-text"]';
    searchBar = 'input[type="text"]'
    searchButton = 'a[class="searchButton"]'
    temp = '//span[@class = "summary swap"]'

    async getFeelsLikeTemp(){
        let feelsLikeText = await this.commands.getElementText(this.feelsLikeLocator);
        return parseInt(feelsLikeText);
    }
    async getLowTemp(){
        let lowTempText = await this.commands.getElementText(this.lowTempValueLocator);
        return parseInt(lowTempText)
    }
    async getHighTemp(){
        let highTempText = await this.commands.getElementText(this.highTempValueLocator);
        return parseInt(highTempText);
    }
    async clickSearchButton(){
        await this.commands.clickWebElement(this.searchButton)
    }
    async isTempDisplayed(){
        return await this.commands.isElementDisplayed(this.temp)
    }
    /*
    async typeInWebElement(locator, data) {
        const element = await this.findWebElement(locator);
        await element.setValue(data);
    }
    */
    async typeInSearchBar(data){
        await this.commands.typeInWebElement(this.searchBar, data)
    }

} 
module.exports = Mainpage;