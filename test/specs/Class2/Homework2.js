//run this using npx wdio run ./wdio.conf.js --spec ./test/specs/Class2/Homework.js
/*
Due date: aug 16th end of the day

Testcase-1 
https://www.darksky.net
verify feelsLikeTempValue is between lowTempValue and highTempValue

Testcase-2 
https://www.darksky.net
Verify user can get temperature based on zipcode 
in the search bar field, enter anything in the field, click on magnifying glass button

Testcase-3 
https://www.facebook.com
verify that user gets error message after submitting an empty login form
expected error message -> The email address or mobile number you entered isn't connected to an account.
/*
Testcase- 4 
https://www.facebook.com
1. Click Messenger link
2. Verify keep me signed in is not selected 
3. Click on log in button 
4. Verify link ->"Find your account and log in" in error message is displayed
5. Verify 'Continue' button is enabled
6. Verify 'Keep me signed in' is not selected
7. Click 'Keep me signed in 
8. Verify 'Keep me signed in' is selected
*/
const {expect} = require("chai");
describe('Verify darksky and facebook', () =>{
    it('verify feelsLikeTempValue is between lowTempValue and highTempValue', async() =>{
        await browser.url('https://www.darksky.net/')
        const feelsLikeTempValue = await $('span[class="feels-like-text"]').getText()
        const feelsLikeNumber = parseInt(feelsLikeTempValue.substring(0,2));
        const lowTempValue = await $('span[class="low-temp-text"]').getText();
        const lowTempNumber = parseInt(lowTempValue.substring(0,2));
        const highTempValue = await $('span[class="high-temp-text"]').getText();
        const highTempNumber = parseInt(highTempValue.substring(0,2));
        expect(feelsLikeNumber,'feelsLikeTemp is not between lowTempValue and highTempValue').to.be.gt(lowTempNumber).and.to.be.lt(highTempNumber)
    })
    it('Verify feelsLikeTemValue is between lowTemValue and highTempValue', async() => {
        await browser.url('https://www.darksky.net');
        await browser.pause(3000);
        const feelsLikeValue = await $('.feels-like-text').getText();
        const lowTempValue = await $('.low-temp-text').getText();
        const highTempValue = await $('.high-temp-text').getText();
        expect((feelsLikeValue < highTempValue && feelsLikeValue > lowTempValue), 'Feels Like is Not in between Low and High Temperature').to.be.true;
    });
    it('Verify user can get temperature based on zipcode',async() => {
        await browser.url('https://www.darksky.net/')
        const inputBox = await $('input[type="text"]');
        await inputBox.setValue('12222')
        await browser.pause(4000)
        await $('a[class="searchButton"').click();
        await browser.pause(4000)
    })
    it('Verify that user gets error message after submitting an empty login form', async() =>{
        await browser.url('https://facebook.com/')
        await $('button[data-testid="royal_login_button"]').click()
        await browser.pause(3000)
        const errorMessage = await $('div[class="_9ay7"]').isDisplayed();
        expect(errorMessage, "error message unavailable").to.be.true;
        await browser.pause(3000)
    })
    it('Verify multiple Steps', async() => {
        //1. Click Messenger link
        await browser.url('https://facebook.com')
        await $('=Messenger').click();
        await browser.pause(3000)
        //2. Verify keep me signed in is not selected 
        const checkBox = await $('input[type="checkbox"]').isSelected()
        expect(checkBox, 'login button is not enabled').to.be.false
        //3. Click on log in button
        await $('#loginbutton').click();
        await browser.pause(3000);
        //4. Verify link ->"Find your account and log in" in error message is displayed
        const findYourAccErrorMsg = await $('=Find your account and log in.').isDisplayed()
        expect(findYourAccErrorMsg, "error msg not displayed").to.be.true;
        //5. Verify 'Continue' button is enabled
        const continueButton = await $('button[id="loginbutton"]').isEnabled()
        expect(continueButton, 'continue button is not enabled').to.be.true;
        //6. Verify 'Keep me signed in' is not selected
        let checkBox2 = await $('input[type="checkbox"]').isSelected()
        //7. Click 'Keep me signed in 
        if(!checkBox2){
            await $('label[class="uiInputLabelLabel"]').click();
        }
        //8. Verify 'Keep me signed in' is selected
        checkBox2 = await $('input[type="checkbox"]').isSelected()
        expect(checkBox2, 'login button is not enabled').to.be.true
        await browser.pause(3000)

    })
})