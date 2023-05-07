class SitePage {
    navigate() {
        cy.get('.gh-nav-settings li:nth-child(2)').click()
        cy.wait(1000)
    }
    
    enterTitle(title) {
        cy.get(".gh-setting-first:nth-child(1) .gh-setting-action button").first().click()
        cy.wait(1000)
        cy.get('.gh-setting-content-extended .ember-text-field:nth-child(1)').first()
            .clear()
            .type(title, {force: true});
        return this;
    }

    save() {
        cy.get('.view-actions .gh-btn').click()
    }

    editTitleAssert() {
        cy.fixture('Site').then( site => {
            cy.contains(site.newTitle).should('be.visible');
        });
    }
}

export default sitePage = new SitePage();