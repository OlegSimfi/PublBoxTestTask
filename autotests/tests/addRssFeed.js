const SignUpPage = require('../pages/signup.page');
const MainPage = require('../pages/main.page');
const User =  require('../source/user');

describe("Add RSS Feed", function () {
    it("Open Sign up page", async function () {
        browser.url('authorization/signin');
    });

    it("Assert Sign up page is opened", function () {
        SignUpPage.pageTitle.waitForExist();
        const isOpened = SignUpPage.pageTitle.isExisting();
        expect(isOpened, "header exists").to.be.true;
        let currentUrl = browser.getUrl();
        expect(currentUrl).to.contain('authorization/signin');
    });

    it("User sign up login", function () {
        SignUpPage.login(User.email, User.password);
    });

    it("Assert Main page is opened", function () {
        MainPage.sideBarMenu.waitForExist();
        let currentUrl = browser.getUrl();
        expect(currentUrl).to.contain('/main/create-post');
    });

    it("Open Add RSS feed", function () {
        MainPage.addRssLink.click();
    });

    it("Assert Add RSS feed is opened", function () {
        browser.debug();
        MainPage.addFeedButton.waitForExist();
        let currentUrl = browser.getUrl();
        expect(currentUrl).to.contain('main/feed');
    });

});