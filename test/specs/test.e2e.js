const LoginPage = require('../pageobjects/login.page')
const homePage = require('../pageobjects/home.page')
const loginPage = require('../pageobjects/login.page')
const problemhomePage = require('../pageobjects/problemhome.page')
const visualuserPage = require('../pageobjects/visualUser.page')


describe('Swag Labs', () => {
    it('should login with standard_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await homePage.validateHomePage()
    })
    it('should get login error with locked_out_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_LOCKED_OUT_USER, process.env.PASSWORD_SAUCEDEMO)
        await loginPage.validateLockedOutUserError()
    })
    it('should login with problem_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_PROBLEM_USER, process.env.PASSWORD_SAUCEDEMO)
        await problemhomePage.validateproblemhomePage()
    })
    it('should get login with visual_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_VISUAL_USER, process.env.PASSWORD_SAUCEDEMO)
        await visualuserPage.validatevisualuserPage()
    })
    it('should get login error with no_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_NO_USER, process.env.PASSWORD_SAUCEDEMO)
        await loginPage.validatenoUserError()
    })
    it('should get login error with no_password credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_NO_PASSWORD, process.env.PASSWORD_NO_PASSWORD)
        await loginPage.validatenopasswordError()
    })
    it('should get login error with empty credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_EMPTY, process.env.PASSWORD_NO_PASSWORD)
        await loginPage.validateemptyError()
    })
})

