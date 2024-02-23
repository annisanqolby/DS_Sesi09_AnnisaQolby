const { $ } = require('@wdio/globals')
const Page = require('./page');


class homePage extends Page {
    get iconCart () {return $('.shopping_cart_link');}

    async validateHomePage() {
        expect(browser).toHaveUrlContaining('/inventory.html')
        expect(this.iconCart).toBeDisplayed()
    }

    async open() {
        return super.open('/inventory.html'); 
    }
}

module.exports = new homePage();
