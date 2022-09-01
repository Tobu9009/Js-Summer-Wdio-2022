const moment = require('moment');
const CommandsHw = require('../../../../Js-Summer-Cucumber-2022/Homework6/Pages/CommandsHw');
/*
tc-1
hotels.com
verify past dates of the current month is not enabled

tc-2

Verify destination and check in and check out dates are as user selected
1. launch hotels
2. type man in destination
3 select manila from auto suggestion 
4. select tomorrow's date as check-in date Aug23
5. select 5 days from check-in as check-out Aug 28
6. click search button 
7.Verify destination has manila
8.Verify check-in date as tomorrow's date
9. Verify check-out date in 5 days from tomorrow's date 
*/

const now = moment();
function getCurrentMonthInText(monthNumber){
    if(monthNumber == 12){
        const month = 'December'
        return month
    }
    else if(monthNumber == 1){
        const month = 'January'
        return month;
    }
    else if(monthNumber == 2){
        const month = 'February'
        return month;
    }
    else if(monthNumber == 3){
        const month = 'March'
        return month;
    }
    else if(monthNumber == 4){
        const month = 'April'
        return month;
    }
    else if(monthNumber == 5){
        const month = 'May'
        return month;
    }
    else if(monthNumber == 6){
        const month = 'June'
        return month;
    }
    else if(monthNumber == 7){
        const month = 'July'
        return month;
    }
    else if(monthNumber == 8){
        const month = 'August'
        return month;
    }
    else if(monthNumber == 9){
        const month = 'September'
        return month;
    }
    else if(monthNumber == 10){
        const month = 'October'
        return month;
    }
    else if(monthNumber == 11){
        const month = 'November'
        return month;
    }
}

class hotelsPOM{
    dateFormField = '#date_form_field-btn'
    goingTo = '//button[@aria-label="Going to"]'
    allAugDateElement = '//h2[text()="August 2022"]/following-sibling::table//button[not(@disabled)]'
    searchBar = '#destination_form_field'
    autoSuggestionElements = "//div[@class='truncate']//strong"
    doneButton = '//button[@data-stid = "apply-date-picker"]'
    submitButton = '//button[@id="submit_button"]'
    targetCountry = '//button[contains(@aria-label, "Going to")]'
    checkInDate = '//button[contains(@aria-label, "Check-in")]'
    checkOutDate = '//button[contains(@aria-label, "Check-out")]'
    commands = new CommandsHw
    async clickDateForm(){
        await this.commands.clickWebElement(dateFormField)
    }
    async checkYesterdayIsEnabled(){
        let yesterday = now.subtract(2, 'days').format('M/D/Y')
        console.log('THIS IS YESTERDAYS DATE:' + yesterday);
        let splitYesterday = yesterday.split('/')
        let month = splitYesterday[0]
        let yesterdayDateNumber = splitYesterday[1]
        let year = splitYesterday[2]
        let getMonthInText = getCurrentMonthInText(month);
        let yesterdayInHotels = await $('//h2[text()="'+getMonthInText+' '+year+'"]/following-sibling::table//button[@data-day ="'+yesterdayDateNumber+'"]')
        return await this.commands.isElementEnabled(yesterdayInHotels);
    }
    async clickGoingTo(){
        await this.commands.clickWebElement(this.goingTo)
    }
    async typeInSearchBar(data){
        await this.commands.typeInWebElement(this.searchBar, data)
    }
    async selectManila(){
        const autoSuggestionElements = await $$(this.autoSuggestionElements);
        for (const autoSuggestionElement of autoSuggestionElements) {
            const suggestionText = await this.commands.getElementText(autoSuggestionElement);
            if(suggestionText.toLowerCase().localeCompare('manila'.toLowerCase()) === 0){
                await this.commands.clickWebElement(autoSuggestionElement);
                break;
            }
        }
    }
    async clickDateFormField(){
        await this.commands.clickWebElement(this.dateFormField)
    }
    async clickTomorrowsDate(){
        let tomorrow = now.add(3, 'days').format('M/D/Y')
        let splitTomorrowsDate = tomorrow.split('/')
        let month = splitTomorrowsDate[0];
        let tomorrowDay = splitTomorrowsDate[1];
        let year = splitTomorrowsDate[2];
        let getMonthInText = getCurrentMonthInText(month);
        let tomorrowInHotels = await $('//h2[text()="'+getMonthInText+' '+year+'"]/following-sibling::table//button[@data-day ="'+tomorrowDay+'"]')
        await this.commands.clickWebElement(tomorrowInHotels);
    }
    async clickDate5Days(){
        let fiveDaysFromTomorrow = now.add(5, 'days').format('M/D/Y')
        let splitFiveDaysFromTomorrow = fiveDaysFromTomorrow.split('/')
        let monthFiveDaysFromTomorrow = splitFiveDaysFromTomorrow[0];
        let dayFiveDaysFromTomorrow = splitFiveDaysFromTomorrow[1];
        let yearFiveDaysFromTomorrow = splitFiveDaysFromTomorrow[2];
        let getMonthInText = getCurrentMonthInText(monthFiveDaysFromTomorrow)
        let dateFiveDaysFromTomorrow = await $('//h2[text()="'+getMonthInText+' '+yearFiveDaysFromTomorrow+'"]/following-sibling::table//button[@data-day ="'+dayFiveDaysFromTomorrow+'"]')
        await this.commands.clickWebElement(dateFiveDaysFromTomorrow);
    }
    async clickDoneButton(){
        await this.commands.clickWebElement(this.doneButton)
    }
    async clickSubmitButton(){
        await this.commands.clickWebElement(this.submitButton);
    }
    async isTargetCountryDisplayed(){
        return await this.commands.isElementDisplayed(this.targetCountry)
    }
    async getCheckInDate(){
        return await this.commands.getElementText(this.checkInDate)
    }
    async getCheckOutDate(){
        return await this.commands.getElementText(this.checkOutDate)
    }
    async getTomorrowDate(){
        let tomorrow = now.subtract(5, 'days').format('M/D/Y')
        let splitTomorrowsDate = tomorrow.split('/')
        let month = splitTomorrowsDate[0];
        let getMonthInText = getCurrentMonthInText(month);
        let shortMonthText = getMonthInText.substring(0,3)
        let tomorrowDay = splitTomorrowsDate[1];
        let tomorrowDate = shortMonthText + ' ' + tomorrowDay;
        return tomorrowDate;
    }
    async getFiveDaysFromTomorrowDate(){
        let fiveDaysFromTomorrow = now.add(5, 'days').format('M/D/Y')
        let split5DaysFromTomorrow = fiveDaysFromTomorrow.split('/')
        let month = split5DaysFromTomorrow[0];
        let getMonthInText = getCurrentMonthInText(month);
        let shortMonthText = getMonthInText.substring(0,3)
        let tomorrowDay = split5DaysFromTomorrow[1];
        let tomorrowDate = shortMonthText + ' ' + tomorrowDay;
        return tomorrowDate;
    }
}
module.exports = hotelsPOM