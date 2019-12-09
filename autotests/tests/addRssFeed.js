const SignUpPage = require('../pages/signup.page');
const MainPage = require('../pages/main.page');
const User =  require('../source/user');

describe("Add RSS Feed", function () {
    it("Open Sign up page", async function () {
        browser.url('authorization/signin');
    });

    it("Assert Sign up page is opened", function () {
        SignUpPage.assertSignUpPageIsOpened();
    });

    it("User sign up login", function () {
        SignUpPage.login(User.email, User.password);
    });

    it("Assert Main page is opened", function () {
        MainPage.assertMAinPageIsOpened()
    });


    it("Open Add RSS feed", function () {
        MainPage.clickAddRssLink();
    });

    it("Assert Add RSS feed is opened", function () {
        MainPage.assertAddFeedIsOpened();
    });

    it("User add RSS feed", function () {
        MainPage.addRssFeed('http://feeds.bbci.co.uk/news/world/rss.xml');
    });

    it("Assert RSS feed on the pop-up", function () {
        MainPage.assertAddedFeedPopUp('BBC News');
    });

    it("Assert added feeds ", function () {
        MainPage.assertRssItems("BBC News","www.bbc.co.uk");
    });
});