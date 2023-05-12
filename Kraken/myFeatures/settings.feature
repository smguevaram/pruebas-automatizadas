Feature: administracion de configuraciones

@user19 @web
Scenario:Modificar titulo de la pagina
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  When I click in buttonName 'general' 
  And I wait for 1 seconds
  And I take screenshot name 'GeneralSettings'
  And I change web attribute 'title' for newTitle 'test'
  And I wait for 1 seconds
  And I take screenshot name 'ChangeTitle'
  And I click in button 'save settings'
  And I wait for 1 seconds
  Then I check title page is newTitle 'test'

@user20 @web
Scenario:Modificar nombre de usuario
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  When I click in buttonName 'staff' 
  And I wait for 2 seconds
  And I look for a user with status 'owner'
  And I wait for 10 seconds
  And I type in input 'test' and type 'full name'
  And I click in button 'save'
  And I wait for 1 seconds
  And I click in buttonName 'tags'
  And I click in buttonName 'staff'
  And I wait for 1 seconds
  Then I check state 'owner' for user 'test'

@user21 @web
Scenario: Login usuario
  Given I navigate to page "http://localhost:2368/ghost" 
  And I wait for 1 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I take screenshot name 'Login'
  And I click in button 'sign in'
  And I wait for 2 seconds
  Then I check logged