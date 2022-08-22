class CommandsHw {


    
    async findWebElement(locator) {
        return await $(locator);
    }

    /**
     * Generic function to find a webElement
     * Input: locator
     */

    async getElementText(locator){
        return await $(locator).getText();
    }
    async getElementAttribute(locator, attributeName){
        return await $(locator).getAttribute(attributeName)
    }
    /**
     * Generic function to click a webElement
     * Input: locator
     */
    async clickWebElement(locator) {
        const element = await this.findWebElement(locator);
        await element.click();
    }

    async isElementDisplayed(locator){
        const element = await this.findWebElement(locator)
        return await element.isDisplayed();
        
    }
    async isElementSelected(locator){
        const element = await this.findWebElement(locator)
        return await element.isSelected();
    }
    async isElementEnabled(locator){
        const element = await this.findWebElement(locator)
        return await element.isEnabled();
    }
    
    /**
     * Generic function to type a webElement
     * Input: locator, data
     */
    
    async typeInWebElement(locator, data) {
        const element = await this.findWebElement(locator);
        await element.setValue(data);
    }

}
module.exports = CommandsHw;