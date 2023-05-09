class PagePage {
    navigate() {
        cy.get('li > a[href="#/pages/"]').click()
    }

    goToCreatePage() {
        cy.get('[href="#/editor/page/"]').first().click()
    }
    
    enterPageTitle(title) {
        cy.get('.gh-editor-title')
        .clear()
        .type(title);
    }

    enterPageContent(content) {
        cy.get('.koenig-editor__editor')
            .type(content);
    }

    publish() {
        cy.get('.gh-publishmenu-trigger').click();
        cy.wait(1000)
        cy.get('.gh-publishmenu-button').click();
        cy.wait(2000)
    }

    goToPageList() {
        cy.get('[href="#/pages/"]').first().click({ multiple: true })
        cy.wait(1000)
    }

    deletePage() {
        cy.get(".post-settings").click()
        cy.wait(1000)
        cy.get('.settings-menu-delete-button').click()
        cy.wait(1000)
        cy.get('.modal-footer button').last().click()
        cy.wait(2000)
    }

    assertDraftTitle(title) {
        cy.get(".gh-content-status-draft").first().parent().parent('.gh-post-list-status').siblings('a.gh-post-list-title').contains(title);
    }

    assertDelete(title){
        cy.contains(title).should('not.exist');
    }

    assertTitle(title){
        cy.contains(title);
    }
}

export default pagePage = new PagePage();

