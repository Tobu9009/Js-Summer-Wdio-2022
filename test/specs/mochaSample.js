const sampleTest = require('./sampleTest');
const { expect, assert } = require('chai');

describe('Login',() => {
    /*it('Verify user can login with valid credentials',() => {
        const res = sampleTest.addNumbers(2,5);
        expect(res, "addFunction doesn not work as expected").to.equal(7)

        assert.equal(res, 7, "assert - add function does not work as expected");
        
    })*/
    it('Open Url', async() => {
        await browser.url('https://www.facebook.com') //  <=========== url function opens the website

        /*
        to pause the execution
        function: pause
        */

        //browser.pause(60000);

        /*
        to get the page title 
        function: getTitle()
        */

        //browser.getTitle();

        const pageTitle = await browser.getTitle();
        console.log('\nPage Title');
        console.log(pageTitle);
        console.log('Page title\n');
        
        expectedPageTitle = 'Facebook - log in or sign up'
        //expectedPageTitle = 'Facebook - log in or sign up!' //uncomment to make it not pass
        expect(pageTitle, 'Facebook title is not as expected').to.equal(expectedPageTitle);
    })
    it('Verify the correct url launches when we open a webpage', async() =>{    //<===== it.only makes it so only that one test case runs

        /*
        steps: 
        1: open webpage
        2: launch webpage 
        3: verify opened url is equal to url we launched
        */
        const launchUrl = 'https://www.facebook.com'
        await browser.url(launchUrl);

        /*
        to get the current url from webpage
        function: get url()
        */
       const launchedUrl = await browser.getUrl();
       expect(launchedUrl, 'Correct url is not launched when we open a webpage').to.equal(launchUrl)
    })
    it.only('Misc functions from browser', async() => {
        const launchUrl = 'https://www.facebook.com'
        await browser.url(launchUrl);

        /*
        to get the windowHandle stored in browser-object
        function: getWindowHandle()
        */

        const windowHandle = await browser.getWindowHandle();
        console.log('\nWindow handle')
        console.log(windowHandle);
        console.log('Window handle\n')
        await browser.pause(700)

        /*
        to go back in browser 
        function: back()
        */

        await browser.back();
        await browser.pause(700)

        /*
        to go forward in browser
        function: forward();
        */

        await browser.forward();
        await browser.pause(700)

        /*
        to refresh a webpage
        function: refresh()
        */

        await browser.refresh();

        /*
        other ways to refresh a webpage
        1. re launch the url
        2. back() then forward()
        */
       
        await browser.pause(700)
    })

})

