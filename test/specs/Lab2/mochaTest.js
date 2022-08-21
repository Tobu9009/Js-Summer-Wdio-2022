const Homepage = require('./Amazon/Homepage.js');
describe('amazon webpage', () =>{
    home = new Homepage;
    it.only('Verify select amazon explore', async() => {
        await browser.url("https://www.amazon.com")
        home.clickOnSearchDropdown();
        home.selectAmazonExplore();
        await browser.pause(1000)
        let actualLabel = await home.getSelectedDropdownLabel()
        expect(actualLabel).to.equal("Amazon Explore")

    })
})