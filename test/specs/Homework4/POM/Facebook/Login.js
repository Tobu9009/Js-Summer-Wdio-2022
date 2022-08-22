const CommandsHw = require("../CommandsHw");

class Login{
    //You are currently working on making a commands test file for Facebook login functions 
    //Refer to Mainpage.js 
    commands = new CommandsHw
    logIn = 'button[data-testid="royal_login_button"]'
    errorMessage = 'div[class="_9ay7"]'
    messengerButton = '=Messenger'
    kmsi = 'input[type="checkbox"]'
    messengerLogIn = '#loginbutton'
    findYourAccountAndLoginMessage = '=Find your account and log in.'
    continueButton = 'button[id="loginbutton"]'
    keepMeSignedIn = 'label[class="uiInputLabelLabel"]'

    async clickLoginButton(){
        await this.commands.clickWebElement(this.logIn)
    }
    async isErrorMessageDisplayed(){
       return await this.commands.isElementDisplayed(this.errorMessage);
    }
    async clickOnMessengerButton(){
        await this.commands.clickWebElement(this.messengerButton)
    }
                 
    /*
    2. Verify keep me signed in is not selected 
    3. Click on log in button 
    4. Verify link ->"Find your account and log in" in error message is displayed
    5. Verify 'Continue' button is enabled
    6. Verify 'Keep me signed in' is not selected
    7. Click 'Keep me signed in 
    8. Verify 'Keep me signed in' is selected
    */
    async isKmsiSelected(){
        return await this.commands.isElementSelected(this.kmsi);
    }
    async clickOnMessengerLogin(){
        await this.commands.clickWebElement(this.messengerLogIn)
    }
    async isFindYourAccountAndLoginDisplayed(){
        return await this.commands.isElementDisplayed(this.findYourAccountAndLoginMessage)
    }
    async isContinueButtonEnabled(){
        return await this.commands.isElementEnabled(this.continueButton)
    }
    async clickKeepMeSignedIn(){
        await this.commands.clickWebElement(this.keepMeSignedIn)
    }
}
module.exports = Login;