class TagPage {
    navigate() {
        this.goListTags()
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
        cy.get('.view-actions .gh-btn').click()
    }

    goListTags() {
        cy.get('li [href="#/tags/"]').click({force: true})
        cy.wait(1000)
    }

    goTagDetail() {
        cy.get('.gh-tags-list-item').then($elements => {cy.wrap($elements[1]).click();});
        cy.wait(1000)
    }

    deleteTag () {
        cy.contains('Delete tag').click();
        cy.wait(1000)
        cy.get('.modal-footer button:nth-child(2)').click();
        cy.wait(1000)
    }

    createAssert(slug) {
        cy.get('[href="#/tags/"]').click()
        cy.wait(1000)
        cy.contains(slug)
    }
}

export default tagPage = new TagPage();