const { expect } = require("chai");
describe('Multiple Windows', ()=>{

    /*
    To get the window handle of aALL windows opened due to autmation 
    function: getWindowHandles();
    */
    //const windowHandle = await browser.getWindowHandle();
    //console.log(windowHandle);

    it('Verify instagram launches in newWindow', async()=>{
        /*
        launch facebook
        click on instagram 
        verify instagram opened in a new window
        */
       const launchUrl = 'https://www.facebook.com'
       await browser.url(launchUrl);

       await $('=Instagram').click();

       const allHandles = await browser.getWindowHandles();
       //console.log(`\n\nAll handles -> ${allHandles}\n\n`)
       expect(allHandles.length, 'Instagram should have opened a new window').to.equal(2)

       const fbTitle = await browser.getTitle();
       const expFbTitle = 'Facebook - log in or sign up';
       expect(fbTitle, 'facebook page is not seen').to.equal(expFbTitle);

       const fbHandle = await browser.getWindowHandle();
       for(handle of allHandles){
            if(handle != fbHandle){
                await browser.switchToWindow(handle)
            }
        }
        const instagramTitle = await browser.getTitle();
        const expInstagramTitle = 'Instagram'
        expect(instagramTitle, 'instagram page is not seen').to.equal(expInstagramTitle);


    })
})