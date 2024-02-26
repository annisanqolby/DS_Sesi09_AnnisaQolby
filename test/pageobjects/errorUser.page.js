const { $ } = require('@wdio/globals')
const Page = require('./page');

class errorUserPage extends Page {
    get errorimage () {return $('.shopping_cart_container visual_failure');}

    async validateerrorUserPage() {
        expect(browser).toHaveUrlContaining('/inventory.html')
        expect(this.errorimage).toBeDisplayed()
    }

    async open() {
        return super.open('/inventory.html'); 
    }
}

module.exports = new errorUserPage();




//<div id="shopping_cart_container" class="shopping_cart_container visual_failure"><a class="shopping_cart_link"></a></div> */}