const { expect } = require("chai");
describe("Find elements scenarios", () => {
    it("Getting multiple webElements", async () => {
        await browser.url("https://www.darksky.net");
        await browser.pause(2000);
        const allTempElements = await $$('//span[contains(@class, "-text")]');

        for (const tempElement of allTempElements) {
            console.log(await tempElement.getText());
        }
    });

    it("Verify the number of links in facebook homepage is 46", async () => {
    /*
        launch facebook.com
        find all link-elements using a-tag 
        array-length should be 46
        */
        await browser.url("https://www.facebook.com");
        await browser.pause(2000);
        const allLinks = await $$("<a>");
        expect(allLinks.length, "not equal to 46").to.be.equal(46);
    });
    it("Pick value from auto-suggestion", async() => {
    /*
        launch hotels.com
        type "new" in going to 
        select 'Manhattan' from auto suggestion
        */
        await browser.url('https://www.hotels.com')
        
        await $('//button[@aria-label="Going to"]').click();
        await $('#destination_form_field').setValue('New')

        /**
         * 1. analyze if the auto-suggestions data are present as text-value or some attribute's value in dom
         * 2. create locactor to get all auto-suggestion-elements
         * 3.use $$(findElements) to get all auto-suggestion-elements in an array
         * 4. use loop(for-of)
         *      pick an auto-suggestions-element from array 
         *      apply getText or getAttribute (depending on step-1)
         *      if(above value is equal to the value-user-wants-to-click)
         *          click autosuggestion element 
         *          break;
         */
        const autoSuggestionElements = await $$("//div[@class='truncate']//strong")
        for(const autoSuggestionElement of autoSuggestionElements){
            const suggestionText = await autoSuggestionElement.getText();
            if(suggestionText.toLowerCase().localeCompare('manhattan'.toLowerCase()) === 0){
                await autoSuggestionElement.click()
                break;
            }
        }
    });
    it.only('Select Aug 20 as checking date and sep-4 as checkout date', async() =>{
        await browser.url('https://www.hotels.com')
        await browser.pause(2000)
        /**
         * 1. analyze if the auto-suggestions data are present as text-value or some attribute's value in dom
         * 2. create locactor to get all dates-elements of interested month
         * 3.use $$(findElements) to get all auto-suggestion-elements in an array
         * 4. use loop(for-of)
         *      pick an auto-suggestions-element from array 
         *      apply getText or getAttribute (depending on step-1)
         *      if(above value is equal to the value-user-wants-to-click)
         *          click autosuggestion element 
         *          break;
         */
    
        const allDateElements = await $$('//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]')

        for(const dateElement of allDateElements){
            const date = await dateElement.getAttribute('data-day');
            if(date === "4"){
                await dateElement.click();
                break
            }
        }
        await $('//button[@data-stid="apply-date-picker"]').click();
    })
});
