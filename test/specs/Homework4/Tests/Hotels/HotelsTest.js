const {expect} = require('chai')
const landing = require('../../POM/Hotels/Landing');
describe('POM demo', () => {
    const mPage = new landing();
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
     * 7. Verify check-in date in Sep-10
     * 7. Verify check-in date in Sep-10
     * 8. Verify check-out date in Sep-25
     * 
     */
    it('Verify destination and check-in check-out dates are as user selected', async() =>{
        await browser.url('https://www.hotels.com')
        //2. Type "man" in destination
        mPage.clickGoingTo()
        mPage.typeInSearchBar('man')
        await browser.pause(2000)
        //3. Select "Manila" from auto-suggestion
        mPage.selectManila();
        await browser.pause(2000);
        //4. Select Sep10 to Sep-25 as check-in and check-out respectively
        mPage.selectSep10();
        await browser.pause(2000) //THIS PAUSE IS NECESSARY
        mPage.selectSep25();
        await browser.pause(2000)
        // 5. Click Search button
        mPage.clickDoneButton();
        mPage.clickSubmitButton();
        await browser.pause(2000)
        //7. Verify check-in date in Sep-10
        expect(await mPage.isTargetCountryDisplayed(), 'target country is not displayed').to.be.true
        expect(await mPage.isSep10Displayed(), 'Sep 10 is not displayed').to.be.true;
        expect(await mPage.isSep25Displayed(), 'Sep 25 is not displayed').to.be.true;
        await browser.pause(2000)
    })
    
})