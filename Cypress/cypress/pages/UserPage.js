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

    deleteInvitation () {
        /* cy.contains('Delete tag').click();
        cy.wait(1000)
        cy.get('.modal-footer button:nth-child(2)').click();
        cy.wait(1000) */ 
    }

    invitationAssert(name) {
        /* cy.get('[href="#/staff/"]').click()
        cy.wait(1000)
        cy.contains(name) */
    }
}

export default tagPage = new UserPage();