const {expect} = require('chai')
const pom = require('./hotelsPOM')
/*
tc-1
hotels.com
verify past dates of the current month is not enabled

tc-2

Verify destination and check in and check out dates are as user selected
1. launch hotels
2. type man in destination
3 select manila from auto suggestion 
4. select tomorrow's date as check-in date Aug31 
5. select 5 days from check-in as check-out Sep5
6. click search button 
7.Verify destination has manila
8.Verify check-in date as tomorrow's date
9. Verify check-out date in 5 days from tomorrow's date 

*/
const page = new pom();
describe("verify hotels functions", () => {
    it('Verify past dates of the current month is not enabled', async() =>{
        await browser.url('https://www.hotels.com')
        await browser.pause(2000)
        page.clickDateFormField();
        await browser.pause(4000)
        expect(await page.checkYesterdayIsEnabled(), "yesterday is enabled").to.be.false;
    })
    it('Verify destination and check in and check out dates are as user selected', async() =>{
        await browser.url('https://www.hotels.com')
        page.clickGoingTo()
        page.typeInSearchBar('man')
        await browser.pause(2000)
        page.selectManila();
        await browser.pause(2000)
        page.clickDateFormField();
        await browser.pause(2000)
        page.clickTomorrowsDate();
        await browser.pause(2000)
        page.clickDate5Days();
        await browser.pause(2000)
        page.clickDoneButton();
        page.clickSubmitButton();
        await browser.pause(2000)
        expect(await page.isTargetCountryDisplayed(), 'target country is not displayed').to.be.true
        expect(await page.getCheckInDate(), 'check in date does not match').to.be.equal(await page.getTomorrowDate())
        expect(await page.getCheckOutDate(), 'check out date does not match').to.be.equal(await page.getFiveDaysFromTomorrowDate())
    })
})