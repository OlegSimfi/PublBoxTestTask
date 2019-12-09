class MainPage {
   get sideBarMenu() {return $('div[class^="SideBarMenu"]')}
   get addRssLink()  {return $('[href="/main/feed"]')}
   get feedsHeader() {return $('div[class^="FeedsHeader"]')}
   get addFeedButton() {return $('button[class^="MainButton"]')}
   get appIFrame() {return $('iframe[title="pb-web-app"]')}
   get rssIFrame() {return $('.rssFrame')}
   get rssInput()  {return $('input[name="rssLink"]')}
   get addRssLinkButton()  {return $('button[class^="FieldButton"]')}
   get addedItemOnPopUp()  {return $('span[class^="FeedItem__ItemTitle"]')}
   get popUpCloseButton()  {return $('button[class^="BigCloseButton"]')}
   get feedsPostItemHeader()  {return $('div[class^="FeedPostsList"]')}
   get feedPostList()  {return $('div[class^="FeedPostsList__ItemsWrapper"]')}

   addLink(link) {
      if (link) {
         this.rssInput.setValue(link);
      }
      this.addRssLinkButton.click();
   }

   closePopUp() {
    this.popUpCloseButton.click()
   }

   assertRssItems(header, link) {
   this.feedsPostItemHeader.waitForExist();
   let addedFeedsHeader = this.feedsPostItemHeader.getText();
   expect(addedFeedsHeader).to.contain(header);
   this.feedPostList.waitForExist();
   let itemArray = $$('div[class^="FeedPostItem__FeedLink"]');
      itemArray.forEach((element, index) => {
      const text = element.getText();
      if (!text.includes(link)) {
         throw(new Error(`Element with index ${index} does not contain the link`));
      }
   });
   }

   assertMAinPageIsOpened() {
      this.sideBarMenu.waitForExist();
      let currentUrl = browser.getUrl();
      expect(currentUrl).to.contain('/main/create-post');
   }

   clickAddRssLink() {
      this.addRssLink.click();
   }

   addRssFeed(rssLink) {
      this.addFeedButton.waitForExist();
      this.addFeedButton.click();
      this.rssInput.waitForExist();
      this.addLink(rssLink);
   }

   assertAddedFeedPopUp(name) {
      this.addedItemOnPopUp.waitForExist();
      let addedItemValue = this.addedItemOnPopUp.getText();
      expect(addedItemValue).to.contain(name);
      this.closePopUp();
   }

   assertAddFeedIsOpened() {
      this.appIFrame.waitForExist();
      const appFrame = this.appIFrame.value;
      browser.frame(appFrame);
      this.rssIFrame.waitForExist();
      const rssFrame = this.rssIFrame.value;
      browser.frame(rssFrame);
      this.feedsHeader.waitForExist();
      let currentUrl = browser.getUrl();
      expect(currentUrl).to.contain('main/feed');
   }
}

module.exports = new MainPage();