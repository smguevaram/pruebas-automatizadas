class LoginPage {

    credentials;

    navigate() {
        cy.visit('http://localhost:3001/ghost')
        cy.wait(1000)
    }

    enterUser(username) {
        cy.get('[name="identification"]')
            .clear()
            .type(username);
        return this;
    }

    enterPassword(password) {
        cy.get('[name="password"]')
            .clear()
            .type(password);
        return this;
    }

    submit() {
        cy.get('.login.gh-btn').click()
    }

    defaultLogin() {
        this.credentials = cy.fixture('Users').then( credentials => {
            cy.visit('http://localhost:3001/ghost')
            cy.wait(1000)
            this.enterUser(credentials.username);
            this.enterPassword(credentials.password)
            this.submit()
        });
    }

    loginAssert() {
        cy.get('.gh-nav-menu').should('be.visible');
    }
}

export default loginPage = new LoginPage();