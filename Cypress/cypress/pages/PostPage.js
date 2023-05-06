class PostPage {
    navigate() {
        this.goListPost()
        cy.get('[href="#/tags/new/"]').click()
        cy.wait(1000)
    }

    enterName(name) {
        cy.get('[name="name"]')
            .clear()
            .type(name, {force: true});
        return this;
    }

    enterSlug(slug) {
        cy.get('#tag-slug')
            .clear()
            .type(slug, {force: true});
        return this;
    }

    enterDescription(description) {
        cy.get('#tag-description')
            .clear()
            .type(description, {force: true});
        return this;
    }

    save() {
        cy.get('.view-actions .gh-btn.ember-view').click()
    }

    goListPost() {
        cy.get('li [href="#/tags/"]').click()
        cy.wait(1000)
    }

    createAssert(slug) {
        cy.get('[href="#/tags/"]').click()
        cy.wait(1000)
        cy.contains(slug)
    }
}

export default postPage = new PostPage();