const SignUpPage = require('../pages/signup.page');
const User =  require('../source/user');

describe("Add RSS Feed", function () {
    it("Open Sign up page", function () {
        browser.url('authorization/signin');
    });

    it("Assert Sign up page is opened", function () {
        SignUpPage.assertSignUpPAgeIsOpened();
    });

    it("User sign up login", function () {
        SignUpPage.login(User.email, User.password);
    });

    it("DEBUG", function () {
        browser.debug();
    });
});