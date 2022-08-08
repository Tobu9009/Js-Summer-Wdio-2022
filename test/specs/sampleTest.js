const {expect} = require("chai");

describe('Login',() => {
    it.only('Verify login contains log in in title', async() =>{
        const launchUrl = 'https://www.facebook.com'
        await browser.url(launchUrl);
        expectedPageTitle = 'LoG In'.toLowerCase();
        const pageTitle = await browser.getTitle();
        expect(pageTitle.toLowerCase(), 'Facebook title is not as expected').to.contains(expectedPageTitle);
    })
})
