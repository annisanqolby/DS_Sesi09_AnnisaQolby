const { $ } = require('@wdio/globals')
const Page = require('./page');

class problemhomePage extends Page {
    get errorimage () {return $('.inventory_item_img');}

    async validateproblemhomePage() {
        expect(browser).toHaveUrlContaining('/inventory.html')
        expect(this.errorimage).toBeDisplayed()
    }

    async open() {
        return super.open('/inventory.html'); 
    }
}

module.exports = new problemhomePage();

// <img alt="Sauce Labs Backpack" class="inventory_item_img" src="/static/media/sl-404.168b1cce.jpg">