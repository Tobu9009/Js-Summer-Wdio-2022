const CommandsHw = require("../CommandsHw");

class Landing{
    /**
     * Tc-5:
     * 
     * Verify destination and check-in and check-out dates are as user selected
     * 
     * 1. Launch hotels.com
     * 2. Type "man" in destination
     * 3. Select "Manila" from auto-suggestion
     * 4. Select Sep10 to Sep-25 as check-in and check-out respectively
     * 5. Click Search button
     * 6. Verify destination has Manila
     * 7. Verify check-in date in Sep-10
     * 8. Verify check-out date in Sep-25
     * 
     */
    searchBar = '#destination_form_field'
    commands = new CommandsHw
    goingTo = '//button[@aria-label="Going to"]'
    autoSuggestionElements = "//div[@class='truncate']//strong"
    dateFormField = '#date_form_field-btn'
    allSepDateElements = '//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]'
    dataDayAttribute = 'data-day'
    doneButton = '//button[@data-stid = "apply-date-picker"]'
    submitButton = '//button[@id="submit_button"]'
    targetCountry = '//button[contains(@aria-label, "Going to")]'
    sep10 = '//button[contains(@aria-label, "Check-in")]'
    sep25 = '//button[contains(@aria-label, "Check-out")]'
    async clickGoingTo(){
        await this.commands.clickWebElement(this.goingTo)
    }
    async typeInSearchBar(data){
        await this.commands.typeInWebElement(this.searchBar, data)
    }
    async selectManila(){
        const autoSuggestionElements = await $$(this.autoSuggestionElements);
        for (const autoSuggestionElement of autoSuggestionElements) {
            const suggestionText = await this.commands.getElementText(autoSuggestionElement);
            if(suggestionText.toLowerCase().localeCompare('manila'.toLowerCase()) === 0){
                await this.commands.clickWebElement(autoSuggestionElement);
                break;
            }
        }
    }
    async selectSep10(){
        await this.commands.clickWebElement(this.dateFormField)
        const allSepDateElements = await $$(this.allSepDateElements);
        for(const dateElement of allSepDateElements){
            const date = await this.commands.getElementAttribute(dateElement, this.dataDayAttribute)
            if(date === "10"){
                await dateElement.click();
                break;
            }
        }
    }
    async selectSep25(){
        const allSepDateElements = await $$(this.allSepDateElements);
        for(const dateElement of allSepDateElements){
            const date = await this.commands.getElementAttribute(dateElement, this.dataDayAttribute)
            if(date === "25"){
                await dateElement.click();
                break;
            }
        }
    }
    async clickDoneButton(){
        await this.commands.clickWebElement(this.doneButton)
    }
    async clickSubmitButton(){
        await this.commands.clickWebElement(this.submitButton);
    }
    async isTargetCountryDisplayed(){
        return await this.commands.isElementDisplayed(this.targetCountry)
    }
    async isSep10Displayed(){
        return await this.commands.isElementDisplayed(this.sep10)
    }
    async isSep25Displayed(){
        return await this.commands.isElementDisplayed(this.sep25)
    }
}
module.exports = Landing