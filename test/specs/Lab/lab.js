//npx wdio run ./wdio.conf.js --spec ./test/specs/Lab/lab1.js
const {expect} = require("chai")
describe('Test Amazon Homepage', () =>{
    it('Verify search icon displayed', async()=>{
        await browser.url('https://www.amazon.com')
        const isSearchIconDisplayed = await $('#nav-search-submit-button').isDisplayed();
        expect(isSearchIconDisplayed).to.be.true;
    })
    it.only('Verify select amazon explore', async()=>{
        await browser.url('https://www.amazon.com')
        await $('select.nav-search-dropdown').click();
        await $('select.nav-search-dropdown').selectByVisibleText("Amazon Explore");
        await browser.pause(2000)
    })
})