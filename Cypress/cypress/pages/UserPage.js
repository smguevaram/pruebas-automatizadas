class UserPage {
    enterName(name) {
        cy.get('.first-form-group .user-name.gh-input')
            .clear()
            .type(name, {force: true});
        return this;
    }

    save() {
        cy.get('.view-actions .gh-btn').click()
    }

    goListUsers() {
        cy.get('li [href="#/staff/"]').click({force: true})
        cy.wait(2000)
    }

    goUserDetail() {
        cy.get('.gh-active-users .apps-grid-cell').then($elements => {cy.wrap($elements[0]).click();});
        cy.wait(1000)
    }

    editAssert(editedName) {
        this.goListUsers()
        cy.wait(1000)
        cy.contains(editedName)
    }

    suspendUser() {
        cy.get(".view-actions .dropdown button.user-actions-cog").click()
        cy.get(".view-actions .dropdown ul li:nth-child(2)").click()
        cy.wait(1000)
        cy.get(".modal-content .modal-footer button:nth-child(2)").click()
    }

    assertSuspendUser() {
        cy.get("h2.gh-canvas-title").contains("Suspended")
    }

    sendInvitation(email) {
        cy.get(".view-actions button.gh-btn-green").click();
        cy.wait(1000);
        cy.get('.modal-body input[name="email"]')
            .clear()
            .type(email);
        cy.get('.modal-footer button').click()
    }

    deleteInvitation () {
        cy.fixture('Users').then( user => {
            cy.contains(user.newUserEmail).get(".apps-grid-cell:nth-child(1) a.apps-configured-action:nth-child(1)").click()
            cy.wait(1000)
            cy.get('.gh-notification-close').click()
        });
    }

    invitationAssert() {
        cy.fixture('Users').then( user => {
            cy.contains(user.newUserEmail).should('not.exist')
        });
    }
}

export default tagPage = new UserPage();