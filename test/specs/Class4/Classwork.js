/*
Verify the temp value changes correct when user changes the temp unit
*/
const {expect} = require("chai");
/*
1. launch darksky 
2. Store the current temp in a variable(fT)
3. using tempConversion formula to convert fT into celsius (cT)
4. change temp unit to "˚C, mph"
3. Verify the current on web is equal to cT
cT = (fT - 32) * (5/9)

*/
describe('Verify darksky', () =>{
    it('Verify we can change temp unit in darksky ', async() =>{
        await browser.url('https://www.darksky.net')
        await browser.pause(2000);
        await $('//div[@id="header"]//div[contains(@class, "selectric-units")]//div[@class="selectric"]//b').click();
        let fText = await $('//div[@id = "title"]//span[@class="desc swap"]//span[@class="summary swap"]').getText();
        let fT = parseInt(fText.substring(0, fText.indexOf('˚')))
        await browser.pause(2000);
        await $('//div[contains(@class, "selectric-open")]//li[contains(text(), "˚C") and contains(text(), "mph")]').click();
        await browser.pause(2000);
        let cText = await $('//div[@id = "title"]//span[@class="desc swap"]//span[@class="summary swap"]').getText();
        let cT = parseInt(cText.substring(0, cText.indexOf('˚')))
        expect((cT = (fT - 32) * (5/9)), "cT does not match fT").to.be.equal(cT) 
        browser.pause(2000);
    })
})