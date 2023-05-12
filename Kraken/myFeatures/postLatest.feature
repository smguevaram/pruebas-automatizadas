Feature: Administracion de post

@user7 @web
Scenario:Crear un nuevo post
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 2.0
  And I wait for 1 seconds
  When I click in buttonName 'posts' 
  And I wait for 1 seconds
  And I take screenshot name 'Posts'
  And I click in buttonName 'new post' 
  And I wait for 1 seconds
  And I take screenshot name 'NewPost'
  And I click in inputTitle 'My first post'
  And I wait for 1 seconds 
  And I click anywhere on the page
  And I wait for 2 seconds
  And I click on menu publish 2.0
  And I wait for 2 seconds
  And I click in button 'continue'
  And I take screenshot name 'PublishPost'
  And I wait for 1 seconds
  And I click in button 'publish post'
  And I wait for 1 seconds
  And I click in button 'editor'
  And I wait for 1 seconds
  And I click in span 'posts'
  And I wait for 1 seconds
  And I click in span 'published'
  And I wait for 1 seconds
  Then I check that exist 'My first post' post's or page's list  
  And I send a signal to user 8 containing "done"

@user8 @web
Scenario: editar post
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 2.0
  And I wait for 2 seconds
  And I wait for a signal containing "done" for 20 seconds
  When I click in buttonName 'posts'
  And I click on title 'My first post'
  And I wait for 1 seconds
  And I click in inputTitle 'edicion de post'
  And I wait for 2 seconds
  And I click in button 'update'
  And I wait for 1 seconds
  And I take screenshot name 'UpdatePost'
  And I wait for 1 seconds
  And I click in span 'posts'
  And I wait for 1 seconds
  And I click in span 'published'
  And I wait for 1 seconds
  Then I check that exist 'edicion de post' post's or page's list  
  And I send a signal to user 9 containing "done"

@user9 @web
Scenario: eliminar post
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 2.0
  And I wait for 10 seconds
  And I wait for a signal containing "done" for 25 seconds
  When I click in buttonName 'posts'
  And I wait for 1 seconds
  And I click on title 'edicion de post'
  And I wait for 1 seconds
  And I click on page settings 2.0
  And I wait for 1 seconds
  And I click in button 'delete post'
  And I wait for 2 seconds
  And I click on delete item
  And I take screenshot name 'DeletePost'
  And I wait for 2 seconds
  Then I check that not exist 'edicion de post' in post's or page's list

@user18 @web
Scenario:Crear una un post como borrador
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 2.0
  And I wait for 1 seconds
  When I click in buttonName 'posts' 
  And I wait for 1 seconds
  And I click in buttonName 'new post' 
  And I wait for 1 seconds
  And I click in inputTitle 'My first post1 draft'
  And I wait for 1 seconds 
  And I click anywhere on the page
  And I wait for 2 seconds
  And I click in span 'posts'
  And I wait for 1 seconds
  And I click in span 'drafts'
  And I wait for 1 seconds
  And I take screenshot name 'PostsTable'
  Then I check that exist 'My first post1 draft' post's or page's list 