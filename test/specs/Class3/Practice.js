/*
change the temp-unit in darksky.net 

1.launch darksky 
2.change temp unit to "C, m/s"

*/
const {expect} = require("chai");
describe('Verify darksky', () =>{
    it('Verify we can change temp unit in darksky ', async() =>{
        await browser.url('https://www.darksky.net')
        await browser.pause(2000);
        await $('//div[@id="header"]//div[contains(@class, "selectric-units")]//div[@class="selectric"]//b').click();
        await browser.pause(2000);
        await $('//div[contains(@class, "selectric-open")]//li[contains(text(), "˚C") and contains(text(), "mph")]').click();
        await browser.pause(2000);
        const newCelsiusTemp = await $('//div[@id="header"]//div[contains(@class,"selectric-units")]//div[@class="selectric"]//span').getText();
        expect(`\n\ntempUnit -> ${tempUnit}`);
        browser.pause(2000);
    })
})