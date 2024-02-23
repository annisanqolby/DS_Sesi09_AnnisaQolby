const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/home.page')
const homepagePage = require('../pageobjects/home.page')
const homePage = require('../pageobjects/home.page')

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })

describe('Swag Labs', () => {
    it('should login with standard_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login()
        await homePage.validateHomePage()
    })
    it('should get login error with locked_out_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login()
        await homePage.validateLockedOutUserError()
    })
    it('should get login error with problem_user credentials', async () => {
        //skenario negatif
    })
    it('should get login error with performance_glitch_user credentials', async () => {
        //skenario negatif
    })
})
