const { $ } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {
    //elements collection
    get fieldUsername () {return $('#user-name');}
    get fieldPassword () {return $('#password');}
    get buttonLogin () {return $('#login-button');}
    get errorLockedOutUser () {return $('//h3[text()="Epic sadface: Sorry, this user has been locked out."]')}
    get errornoUser () {return $('//h3[text()="Epic sadface: Username and password do not match any user in this service"]')}
    get errornopassword () {return $('//h3[text()="Epic sadface: Password is required"]')}
    get errorempty () {return $('//h3[text()="Epic sadface: Username is required"]')}
    
    async login (username, password) {
        await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(password);
        await this.buttonLogin.click();
    }

    async validateLockedOutUserError () {
        await this.errorLockedOutUser.waitForDisplayed({ timeout: 2500 });
        await expect(this.errorLockedOutUser).toBeDisplayed()
    }

    async validatenoUserError () {
        await this.errornoUser.waitForDisplayed({ timeout: 2500 });
        await expect(this.errornoUser).toBeDisplayed()
    }
    
    async validatenopasswordError () {
        await this.errornopassword.waitForDisplayed({ timeout: 2500 });
        await expect(this.errornopassword).toBeDisplayed()
    }

    async validateemptyError () {
        await this.errorempty.waitForDisplayed({ timeout: 2500 });
        await expect(this.errorempty).toBeDisplayed()
    }

    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();
