const MainPage = require('../pages/main.page');


describe("Open News", async function () {
    it("Open Main page", async function () {
        await browser.url('');
        // MainPage.mainPageTitle.waitForExist();
    });
    it("Open news", async function () {
        await MainPage.clickNews();
        await browser.debug();
    });
});