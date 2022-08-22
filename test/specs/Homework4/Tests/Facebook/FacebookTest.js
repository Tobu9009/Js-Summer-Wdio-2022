const {expect} = require('chai')
const Mainpage = require('../../POM/Facebook/Login');
describe('POM demo', () => {
    const mPage = new Mainpage();
    it('Verify that user gets error message after submitting an empty login form', async() =>{
        await browser.url('https://www.facebook.com')
        await browser.pause(2000)
        mPage.clickLoginButton();
        await browser.pause(2000)
        expect(await mPage.isErrorMessageDisplayed(), "error message is not displayed").to.be.true;
    })
    it.only('Verify multiple facebook steps', async() => {
        await browser.url('https://www.facebook.com')
        //1. Click Messenger link
        mPage.clickOnMessengerButton();
        await browser.pause(2000);
        //2. Verify keep me signed in is not selected 
        expect(await mPage.isKmsiSelected(), "keep me signed in is selected").to.be.false;
        //3. Click on log in button 
        mPage.clickOnMessengerLogin();
        await browser.pause(2000)
        //4. Verify link ->"Find your account and log in" in error message is displayed
        expect(await mPage.isFindYourAccountAndLoginDisplayed(), "error message is not displayed").to.be.true
        //5. Verify 'Continue' button is enabled
        mPage.isContinueButtonEnabled();
        //6. Verify 'Keep me signed in' is not selected
        expect(await mPage.isKmsiSelected(), "keep me signed in is selected").to.be.false;
        //7. Click 'Keep me signed in 
        mPage.clickKeepMeSignedIn();
        await browser.pause(2000)
        //8. Verify 'Keep me signed in' is selected
        expect(await mPage.isKmsiSelected(), "keep me signed in is selected").to.be.true;
    })  
})
