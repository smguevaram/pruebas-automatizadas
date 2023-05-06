import LoginPage from "../integration/PageObject/Login/LoginPage";


/* describe("Cypres login", () => {
    const login = new LoginPage();
    let credentials;

    beforeEach(() => {
        cy.fixture('Users').then( credentialsReceived => {
            credentials = credentialsReceived;
        })
    })

    it('Usuario logueado', () => {
        login.navigate()
        login.enterUser(credentials.username)
        login.enterPassword(credentials.password)
        login.submit()
        login.loginAssert()
    })
}) */

Given