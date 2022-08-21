const Basepage = require("../Basepage.js")
class Homepage{

    base = new Basepage();

    searchDropdown = 'select.nav-search-dropdown'
    navSearchLabel = '#nav-search-label-id'

    clickOnSearchDropdown(){
        this.base.clickOn(this.searchDropdown)
    }

    selectAmazonExplore(){
        this.base.selectElementByVisibleText(this.searchDropdown, "Amazon Explore")
    }

    getSelectedDropdownLabel(){
        return this.base.getElementText(this.navSearchLabel) //Return function because it is returning text
    }

}
module.exports = Homepage;