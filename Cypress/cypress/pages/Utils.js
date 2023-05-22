class Utils {
    publish(isUpdate) {
        
        let tipo = 'Publish'; // Valor predeterminado

        if (isUpdate) {
            tipo = 'Update';
        }

        cy.contains(tipo).click();
        cy.wait(1000)
        cy.contains('button', tipo).click();

    }

    goToCreatePost() {
        cy.get('[href="#/editor/post/"]').first().click()
    }

    enterPostTitle(title) {
        cy.get('.gh-editor-title')
        .clear()
        .type(title);
    }

    enterPostContent(content) {
        cy.get('.koenig-editor__editor')
            .type(content);
    }

    click_settings(){
        cy.get('button.post-settings').click();
    }

    enterMetaTitle(title) {
        cy.get('input.post-setting-meta-title')
        .clear()
        .type(title);
    }

    enterMetaDescription(title) {
        
        cy.get('#meta-description')
        .clear()
        .type(title);
    }

    enterMetaUrl(title) {
        cy.get('input.post-setting-canonicalUrl')
        .clear()
        .type(title);
    }


    enterTwitterTitle(title) {
        cy.get('input.post-setting-twitter-title')
        .clear()
        .type(title);
    }

    enterTwitterDescription(title) {
        cy.get('#twitter-description')
        .clear()
        .type(title);
    }






    eliminar(){
    cy.get('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click();
    cy.get('button.gh-btn-red').contains('Delete').click();
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

const utils = new Utils();
export default utils;
