class PostPage {
    navigate() {
        cy.get('div > a[href="#/posts/"]').click()
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

    publish() {
        cy.get('.gh-publishmenu-trigger').click();
        cy.wait(1000)
        cy.get('.gh-publishmenu-button').click();
        cy.wait(2000)
    }

    goToPostList() {
        cy.get('[href="#/posts/"]').first().click({ multiple: true })
        cy.wait(1000)
    }

    deletePost() {
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

export default postPage = new PostPage();

