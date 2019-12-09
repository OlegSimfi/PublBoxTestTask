class SignUpPage {
    get pageTitle() {return $('h1'); }
    get emailInput() {return $ ('[name="email"]')}
    get passwordInput() {return $ ('[name="password"]')}
    get submitButton () {return $ ('.semantic-button.template--primary')}


     login(email, password) {
        if (email) {
            this.emailInput.setValue(email);
        }

        if (password) {
            this.passwordInput.setValue(password);
        }

        this.submitButton.submitForm();
    }

    assertSignUpPageIsOpened(){
        this.pageTitle.waitForExist();
        const isOpened = this.pageTitle.isExisting();
        expect(isOpened, "header exists").to.be.true;
        let currentUrl = browser.getUrl();
        expect(currentUrl).to.contain('authorization/signin');
    }
}

module.exports = new SignUpPage();

