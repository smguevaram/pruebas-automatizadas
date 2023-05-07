class PostPage {
    navigate() {
        cy.get('li [href="#/posts/"]').click()
        this.newPost()
    }

    newPost() {
        cy.contains('New post').click()
        cy.wait(1000)
    }
    
    enterPost(title) {
        cy.get('.gh-editor-title.ember-text-area[tabindex="1"]')
            .type(title);
        
    }

    publish(){
    cy.contains('Publish').click();
    this.publishNow()
    }
    
    publishNow(){
        cy.get('button.gh-publishmenu-button').click();
    }

    returnPost(){
        cy.contains('Posts').click();
        cy.wait(1000);
    }


    createAssert(title){
        cy.contains(title);
    }
/*    
    enterDetail(detail) {
        cy.get('[data-kg="editor"]')
            .type(detail);
        
    }   
*/

}


export default postPage = new PostPage();

