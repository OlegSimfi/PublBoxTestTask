class MainPage {
    // url = 'tavriya.com.ua';
    get mainPageTitle() {return $('h1'); }
    get newsButton() {return $ ('a[href="/news/"]')}
    get champ() {return $ ('.champ')}


    async clickNews() {
        await this.newsButton.click();
    }


}

module.exports = new MainPage();