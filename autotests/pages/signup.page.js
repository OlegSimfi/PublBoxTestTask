class SignUpPage {
    get pageTitle() {return $('h1'); }
    get emailInput() {return $ ('[name="email"]')}
    get passwordInput() {return $ ('[name="password"]')}
    get submitButton () {return $ ('.semantic-button.template--primary')}


    async assertSignUpPAgeIsOpened() {
        await this.pageTitle.waitForExist();
        await this.emailInput.waitForExist();
        await this.passwordInput.waitForExist();
        await this.submitButton.waitForExist();
    }

    login(email, password) {
        if (email) {
            this.emailInput.setValue(email);
        }

        if (password) {
            this.passwordInput.setValue(password);
        }

        this.submitButton.submitForm();
    }


}

module.exports = new SignUpPage();