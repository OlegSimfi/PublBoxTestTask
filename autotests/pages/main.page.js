class MainPage {

   get pageHeader() {return $('.header')}
   get sideBarMenu() {return $('div[class^="SideBarMenu"]')}
   get addRssLink()  {return $('[href="/main/feed"]')}
   get feedsHeader() {return $('div[class^="FeedsHeader"]')}
   get addFeedButton() {return $('button[class^="MainButton"]')}

}

module.exports = new MainPage();