const {expect} = require('chai')
const Mainpage = require('../../POM/Darksky/Mainpage');

describe('POM demo', () => {
    it('verify feelsLikeTempValue is between lowTempValue and highTempValue', async() =>{
        const mPage = new Mainpage();
        //1. launch facebook
        await browser.url('https://www.darksky.net/')
        //2. Get feelsLike
        let feelsLikeTemp = await mPage.getFeelsLikeTemp();
        //3. Get lowTemp
        let lowTemp = await mPage.getLowTemp();
        //4. Get highTemp 
        let highTemp = await mPage.getHighTemp();
        //5. Expect
        //console.log(feelsLikeTemp, lowTemp, highTemp); 
        expect(lowTemp <= feelsLikeTemp && feelsLikeTemp <= highTemp, 'Feels like is not between low and high').to.be.true

    })
    it('Verify user can get temperature based on zipcode', async() => {
        const mPage = new Mainpage();
        //1 launch darksky
        await browser.url('https://www.darksky.net')
        await browser.pause(2000)
        //2 typeInSearchBar
        mPage.typeInSearchBar("12222")
        await browser.pause(2000)
        //3 clickSearchButton
        mPage.clickSearchButton();
        await browser.pause(2000)
        //4 Verify if temperature is displayed
        let isTempDisplayed = await mPage.isTempDisplayed();
        expect(isTempDisplayed, "temperature is not displayed").to.be.true;
    })
})