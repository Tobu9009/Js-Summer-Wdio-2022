//npx wdio run ./wdio.conf.js --spec ./test/specs/Class3/WebElements3.js
const {expect} = require("chai")
describe('locator strategies part 3', () => {
    it('verify user can log in  ', async() => {
        await browser.url('https://www.facebook.com')
        const loginEmail = await $('//input[@name="email"]')
        await loginEmail.setValue("abcd@1234.com")
        await browser.pause(2000)

        const loginPwd = await $('//input[@data-testid="royal_pass"]')
        await loginPwd.setValue("abcd1234")
        const loginButton = await $('//button[text()="Log In"]')
        await loginButton.click();
        await browser.pause(2000)


    })
    it.only("print all weather data point in console. - darksky", async() =>{
        await browser.url('https://www.darksky.net')
        const windSpeed = await $('//span[contains(@class, "wind__speed")]').getText();
        console.log(`wind speed: ${windSpeed}`);
        await browser.pause(2000)
    })
})