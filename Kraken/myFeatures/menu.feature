Feature: Administracion menu

@user10 @web
Scenario:Crear nuevo boton de menu
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  When I click in buttonName 'design' 
  And I wait for 1 seconds
  And I click in inputLabel 'empty' and type 'test Menu' 
  And I wait for 1 seconds
  And I click in button 'save'
  And I wait for 1 seconds
  And I click in buttonName 'design'
  And I wait for 1 seconds
  Then I check that exist 'test Menu' in menu's list
  And I send a signal to user 11 containing "done"

@user11 @web
Scenario: editar boton de menu
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  And I wait for a signal containing "done" for 15 seconds
  When I click in buttonName 'design'
  And I wait for 1 seconds
  And I click in inputLabel 'test Menu' and type 'test edit'
  And I wait for 1 seconds
  And I click in button 'save'
  And I wait for 1 seconds
  And I click in buttonName 'design'
  And I wait for 1 seconds
  Then I check that exist 'test edit' in menu's list
  And I send a signal to user 12 containing "done"

@user12 @web
Scenario: eliminar boton de menu
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  And I wait for a signal containing "done" for 25 seconds
  When I click in buttonName 'design'
  And I wait for 3 seconds
  And I check that exist 'test edit' in menu's list to delete
  And I wait for 1 seconds
  And I click in button 'save'
  And I wait for 1 seconds
  And I click in buttonName 'design'
  And I wait for 1 seconds
  Then I check that not exist 'test edit' in menu's list
