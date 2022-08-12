const {expect} = require("chai");
/*
There are two kinds of dropdown

1. With <select> tag 
2. with any other tag

<select> tag dropdowns
    options in select-tag are present index-wise
    options has value-attribute
    options has text-value
Steps to select value from dropdown
    1. Find the dropdown webElement(or select-tag)
    2. using appropriate function in order to select specific data in dropdown
        selectByVisibleText
        selectByAttribute
        selectByIndex

*/

describe('Dropdown tests', () =>{
    it('Select data in dropdown', async () =>{
        /*
        1 launch facebook 
        2 click create new accouhnt button
        3 Select jan in month dorpdown 
        4 select 2 n day dropdown
        5 select 1990 in year dropdown
        */
        
        //launch fb
        await browser.url('https://facebook.com/')
        //click create new acc
        await $('=Create new account').click();
        await browser.pause(2000)
        //select jan in dropdown 
        await $('#month').selectByIndex(0);
        //select 2 in day dropdown
        await $('select[aria-label=Day').selectByAttribute('value', '2')
        await $('#year').selectByVisibleText('1990')
        await browser.pause(10000)
    })
})