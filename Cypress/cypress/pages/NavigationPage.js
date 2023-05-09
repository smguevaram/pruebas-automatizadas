class NavigationPage {
    navigate() {
        cy.get('[href="#/settings/design/"]').click()
        cy.wait(1000)
    }

    enterLabel(label) {
        cy.get('#settings-navigation > div:nth-child(2) .gh-blognav-label input:nth-child(1)')
            .clear()
            .type(label, {force: true});
        return this;
    }

    editLabel(label) {
        cy.get('#settings-navigation > div:nth-child(1) .gh-blognav-label input:nth-child(1)')
        .first()
        .clear()
        .type(label, {force: true});
    }

    enterUrl(url) {
        cy.get('#settings-navigation > div:nth-child(2) .gh-blognav-url input:nth-child(1)')
            .clear()
            .type(url, {force: true});
        return this;
    }

    deleteButton() {
        cy.get("#settings-navigation > div:nth-child(1) .gh-blognav-delete").last().click()
        cy.wait(1000)
    }

    save() {
        cy.get('.view-actions .gh-btn').click()
    }

    createButtonAssert(slug) {
        cy.get('[href="#/tags/"]').click()
        cy.wait(1000)
        cy.contains(slug)
    }
}

export default navigationPage = new NavigationPage();