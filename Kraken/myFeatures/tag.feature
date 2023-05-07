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



