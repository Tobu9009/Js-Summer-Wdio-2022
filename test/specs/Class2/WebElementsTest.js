//run this using npx wdio run ./wdio.conf.js --spec ./test/specs/Class2/WebElementsTest.js

const {expect} = require("chai");
describe('Verify login form', () =>{ 
    it.only('Verify email and password fields', async() =>{
        /*
        1. launch fb
        2. verify email text box is enabled
        3. verify pw text box is enabled
        4. enter 'deepak@abcd.com in email
        5. verify "abcd@1234" as password
        */
        //1 launch fb
        await browser.url('https://www.facebook.com/');

        //2 verify email text box is enabled
        const emailInputBox = await $('#email')

        const isEmailInputEnabled = await emailInputBox.isEnabled();
        expect(isEmailInputEnabled, 'email input box is not enabled').to.be.true;
        
        //3 verify passowrd text box is enabled
        const pwdInputBox = await $('#pass');
        const isPwdInputEnabled = await pwdInputBox.isEnabled();
        expect(isPwdInputEnabled, 'Password input box is not enabled;').to.be.true;

        //input
        await emailInputBox.setValue('deepak@abcd.com')
        //input
        await pwdInputBox.setValue('abcd1234')

        browser.pause(9000)

    })

    it('Verify login button default state ', async() => {
        //1 launch fb
        //2 verify log in button is enalged
        //3 click on log in button

        await browser.url('https://www.facebook.com')
        const loginBtn = await $('button[data-testid=royal_login_button]')
        const isLoginBtnEnabled = await loginBtn.isEnabled();

        expect(isLoginBtnEnabled, 'login button is disabled').to.be.true

        await loginBtn.click();

        await browser.pause(3000)
    })
    it('Verify create new account default state', async() => {
        //1 launch fb
        //2 verify create new account button is displayed
        //3 click create new account button 

        //launch fb
        await browser.url('https://www.facebook.com')

        //create new account button is displayed
        //using link text
        const createAccBtn = await $('=Create new account')

        //using partial link text 
        //const createAccBtn = await $('*=ccou')

        const createAccBtnDisplayed = await createAccBtn.isDisplayed();
        expect(createAccBtnDisplayed, 'button is not displayed').to.be.true;

        //click create new account button
        await createAccBtn.click();

        await browser.pause(10000)
    })
    it('verify copy on login button is "login"', async() => {
        await browser.url('https://www.facebook.com/')

        //verify login button has text "log in"
        /*
            find the webElement
            the text of webElement should be "login"
        */
        const loginButton = await $('button[data-testid*=l_l]')
        const loginBtnTxt = loginButton.getText();
        expect(loginBtnTxt, 'Log in button text is not as expected').to.equal('Log In');
    })
    it('Verify text on empty emailInput box is "Email address or phone number"', async() =>{
        await browser.url('https://facebook.com/')
        const emailInputBox = await $('input[aria-label*=Email]')
        const copyInEmptyEmailInputBox = await emailInputBox.getAttribute('placeholder')
        expect(copyInEmptyEmailInputBox, 'Text in empty email input box is NOT as expected').to.equal('Email or phone number')
    })
    it('Verify no gender button is selected', async() => {
        /*
        1.  launch facebook.com
        2. Click 'Create new account'
        3. Verify female radio button is selected
        4. Verify female radio button is not selected
        5. verify custon radio button is not selected
        6. verify male radio button is not selected
        7. verify  cuson radio button is not selected

        
        1. launch facebook
        await browser.url('https://facebook.com/')
        */        
        //1. launch facebook
        await browser.url('https://facebook.com/')
        //2 click create new account button
        //const createNewAccountBtn = await $('=Create New Account');
        //await createNewAccountBtn.click();

        await $('=Create new account').click();
        await browser.pause(2000)
        //3 Verify famela radio button is not selected
        const fRadioButton = await $('input[value="1"]');
        const isFGenderSelected = await fRadioButton.isSelected()
        expect(isFGenderSelected, 'Female Radio button is selected').to.be.false;

        //4 If female button is not selected, click female radio button
        if(!isFGenderSelected){
            await fRadioButton.click();
        }
        const isFGenderSelected_afterClick = await $('input[value="1"]').isSelected();
        expect(isFGenderSelected_afterClick, 'Female radio button is not selected').to.be.true;
    })


})