Feature: Administracion de tag

@user1 @web
Scenario:Crear nuevo tag
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  When I click in buttonName 'tags'
  And I wait for 2 seconds
  And I click in buttonName 'new tag'
  And I wait for 2 seconds
  And I enter contentInput 'tag test12'
  And I click in buttonName 'save'
  And I wait for 2 seconds
  And I click in buttonName 'tags' 
  Then I check that exist 'tag test12' in element's list
  And I send a signal to user 2 containing "done"

@user2 @web
Scenario: editar tag
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  And I wait for a signal containing "done" for 15 seconds
  When I click in buttonName 'tags'
  And I click in buttonName 'tag test12'
  And I wait for 2 seconds
  And I enter contentInput 'edicion de tag'
  And I click in buttonName 'save'
  And I wait for 2 seconds
  And I click in buttonName 'tags' 
  Then I check that exist 'edicion de tag' in element's list
  And I send a signal to user 3 containing "done"

@user3 @web
Scenario: eliminar tag
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  And I wait for a signal containing "done" for 25 seconds
  When I click in buttonName 'tags'
  And I wait for 2 seconds
  And I click in buttonName 'edicion de tag'
  And I wait for 2 seconds
  And I click in button 'delete tag'
  And I wait for 2 seconds
  And I click in button 'delete'
  And I wait for 2 seconds
  Then I check that not exist 'edicion de tag' in element's list

@user4 @web
Scenario:Crear una nueva pagina
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 2 seconds
  When I click in buttonName 'pages' 
  And I wait for 2 seconds
  And I click in buttonName 'new page' 
  And I wait for 2 seconds
  And I click in inputTitle 'My first page1'
  And I wait for 1 seconds 
  And I click anywhere on the page
  And I wait for 2 seconds
  And I click on menu publish
  And I wait for 3 seconds
  And I click in button 'publish'
  And I wait for 1 seconds
  And I click in buttonName 'pages'
  And I wait for 2 seconds
  Then I check that exist 'My first page1' in post's or page's list 
  And I send a signal to user 5 containing "done"

@user5 @web
Scenario: editar pagina
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 2 seconds
  And I wait for a signal containing "done" for 20 seconds
  When I click in buttonName 'pages'
  And I click on title 'My first page1'
  And I wait for 2 seconds
  And I click in inputTitle 'edicion de pagina'
  And I click on menu publish
  And I wait for 3 seconds
  And I click in button 'update'
  And I wait for 1 seconds
  And I click in buttonName 'pages'
  And I wait for 2 seconds
  Then I check that exist 'edicion de pagina' in post's or page's list
  And I send a signal to user 6 containing "done"

  
 


