//Due Aug 19th 
/**
 * 
 * launch darksky.net
 * Print all the timeline data in an array
 * then print array in the console (time, not temperature) 
 * 
 */

/**
 * verify destination and check-in/ and check-out dates are as user selected
 * 
 * 1. Launch hotels.com
 * 2. Type "man" in destination 
 * 3. Select "Manila" from auto-suggestion 
 * 4. Select Aug20 to sep-5 as check-in and check-out respectively 
 * 5. Click search button 
 * 6. verify destination has manila 
 * 7. Verify check-in date in Aug-20 
 * 8. Verify check-out date in sep 5
 * 
 */


 const {expect} = require("chai");
 
 describe('Homework_3', () => {
    it('Print all the timeline data in an array', async () => {
        await browser.url('https://www.darksky.net/');
        await browser.pause(2000)
        let timelineArray = []
        let count=0;
        let timeline =  await $$('//div[@class="hours"]//span[contains(text(), "am") or contains(text(), "pm")]')
        for (const time of timeline){
            timelineArray[count] = await time.getText()
            count++;
        }
        console.log(`\n\n\nARRAY HERE:\n\n${timelineArray}\n\n\n`);
    });
    it.only('Verify destination and check-in/check-out dates are as user selected', async () => {
        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/');
        // 2. Type "man" in destination
        await $("//button[@aria-label='Going to']").click();
        await $('#destination_form_field').setValue('man');
        await browser.pause(1000); //THIS PAUSE IS NECESSARY 
        // 3. Select "Manila" from auto-suggestion
        const autoSuggestionElements = await $$("//div[@class='truncate']//strong");
        for (const autoSuggestionElement of autoSuggestionElements) {
            const suggestionText = await autoSuggestionElement.getText();
            if (suggestionText.toLowerCase().localeCompare('manila'.toLowerCase()) === 0) {
                await autoSuggestionElement.click();
                break;
            }
        }
        // 4. Select Aug 20 to Sep-5 as check-in and check-out respectively
        await $('#date_form_field-btn').click();
        const allAugDateElements = await $$('//h2[text()="August 2022"]/following-sibling::table//button[not(@disabled)]');
        for (const dateElement of allAugDateElements) {
            const date = await dateElement.getAttribute('data-day');
            if (date === "20") {
                await dateElement.click();
                break;
            }
        }
        const allSepDateElements = await $$('//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]');
        for (const dateElement of allSepDateElements) {
            const date = await dateElement.getAttribute('data-day');
            if (date === "5") {
                await dateElement.click();
                break;
            }
        }
        await browser.pause(1000);
        // 5. Click Search Button
        await $('//button[@data-stid = "apply-date-picker"]').click()
        await browser.pause(1000)
        await $('//button[@id="submit_button"]').click()
        await browser.pause(1000);
        //  6. Verify destination has Manila
        //let targetCountry = await $('//section[@class = "toolbar-region pwa-toolbar__row search-results-toolbar"]').getText() && "aug".toLowerCase() && "20" && "sep".toLowerCase() && "5")
        let targetCountry = await $('//button[contains(@aria-label, "Going to")]').getText()
        let targetCountryDisplayed = await $('//button[contains(@aria-label, "Going to")]').isDisplayed();
        expect(targetCountry.toLowerCase(), "Does not contain Manila").to.contain("maNILA".toLowerCase())
        expect(targetCountryDisplayed, "target country is not displayed").to.be.true;
        //* 7. Verify check-in date in Aug-20 
        let targetCheckIn = await $('//button[contains(@aria-label, "Check-in")]').getText()
        let checkInDisplayed = await $('//button[contains(@aria-label, "Check-in")]').isDisplayed();
        expect(targetCheckIn.toLowerCase(), "Is not Aug 20").to.be.equal("aug 20".toLowerCase())
        expect(checkInDisplayed, "target check in  is not displayed").to.be.true;
        //* 8. Verify check-out date in sep 5
        let targetCheckOut = await $('//button[contains(@aria-label, "Check-out")]').getText()
        let checkOutDisplayed = await $('//button[contains(@aria-label, "Check-out")]').isDisplayed()
        expect(targetCheckOut.toLowerCase(), "Is not Sep 5").to.be.equal("sep 5".toLowerCase())
        expect(checkOutDisplayed, "target check out is not displated").to.be.true;
    });
});