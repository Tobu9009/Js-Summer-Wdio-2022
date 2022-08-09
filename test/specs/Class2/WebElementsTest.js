//run this using npx wdio run ./wdio.conf.js --spec ./test/specs/Class2/WebElementsTest.js

const {expect} = require("chai");
describe('Verify login form', () =>{ 
    it('Verify email and password fields', async() =>{
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
    it.only('Verify create new account default state', async() => {
        //1 launch fb
        //2 verify create new account button is displayed
        //3 click create new account button 

        //launch fb
        await browser.url('https://www.facebook.com')

        //create new account button is displayed
        const createAccBtn = await $('=Create new account')

        //using partial link text 
        //const createAccBtn = await $('*=ccou')

        const createAccBtnDisplayed = await createAccBtn.isDisplayed();
        expect(createAccBtnDisplayed, 'button is not displayed').to.be.true;

        //click create new account button
        await createAccBtn.click();

        await browser.pause(10000)
    })
})