Feature: administracion de paginas

@user4 @web
Scenario:Crear una nueva pagina
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  When I click in buttonName 'pages' 
  And I wait for 1 seconds
  And I click in buttonName 'new page' 
  And I wait for 1 seconds
  And I click in inputTitle 'My first page1'
  And I wait for 1 seconds 
  And I click anywhere on the page
  And I wait for 2 seconds
  And I click on menu publish
  And I wait for 2 seconds
  And I click in button 'publish'
  And I wait for 1 seconds
  And I click in buttonName 'pages'
  And I wait for 2 seconds
  Then I check that exist 'My first page1' with state 'published' in post's or page's list 
  And I send a signal to user 5 containing "done"

@user5 @web
Scenario: editar pagina
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for a signal containing "done" for 30 seconds
  When I click in buttonName 'pages'
  And I click on title 'My first page1'
  And I wait for 1 seconds
  And I click in inputTitle 'edicion de pagina'
  And I click on menu publish
  And I wait for 2 seconds
  And I click in button 'update'
  And I wait for 1 seconds
  And I click in buttonName 'pages'
  And I wait for 1 seconds
  Then I check that exist 'edicion de pagina' with state 'published' in post's or page's list 
  And I send a signal to user 6 containing "done"

@user6 @web
Scenario: eliminar pagina
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 10 seconds
  And I wait for a signal containing "done" for 20 seconds
  When I click in buttonName 'pages'
  And I wait for 3 seconds
  And I click on title 'edicion de pagina'
  And I wait for 1 seconds
  And I click in button 'delete page'
  And I wait for 1 seconds
  And I click in button 'delete'
  And I wait for 2 seconds
  Then I check that not exist 'edicion de post' in post's or page's list

@user7 @web
Scenario:Crear una nueva pagina como borrador
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  When I click in buttonName 'pages' 
  And I wait for 1 seconds
  And I click in buttonName 'new page' 
  And I wait for 1 seconds
  And I click in inputTitle 'My first page1 draft'
  And I wait for 1 seconds 
  And I click anywhere on the page
  And I wait for 2 seconds
  And I click in buttonName 'pages'
  And I wait for 2 seconds
  Then I check that exist 'My first page1 draft' with state 'published' in post's or page's list 