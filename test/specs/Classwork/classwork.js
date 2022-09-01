/**
 * 1. Launch facebook.com
 * 2. Click on Instagram
 * 3. Click on Portal
 * 4. Click on Oculus
 * 5. Click on Facebook Pay
 * 6. Close all pages except Facebook Pay page
 */
describe('classwork', ()=>{
    it('Verify instagram launched in new window', async() =>{
        await browser.url('https//www.facebook.com')

        await $('=Instagram').click();
        browser.pause(2000);
        await $('=Portal').click();
        browser.pause(2000);
        await $('=Oculus').click();
        browser.pause(2000);
        await $('=Facebook Pay').click();
        browser.pause(2000);
        

        const allHandles = await browser.getWindowHandles();

        titleContains = 'Meta Pay'
        for(handle of allHandles){
            await browser.switchToWindow(handle);
            const pageTitle = await browser.getTitle();
            if(!pageTitle.includes(titleContains)){
                await browser.closeWindow();
            }
        }
        await browser.pause(3000)
    })
})
