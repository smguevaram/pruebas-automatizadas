Feature: administracion de configuraciones

@user19 @web
Scenario:Modificar titulo de la pagina
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 2.0 
  And I wait for 1 seconds
  And I click on page settings
  When I click in buttonName settings 'general' 
  And I wait for 1 seconds
  And I take screenshot name 'GeneralSettings'
  And I wait for 1 seconds
  And I click in expand for title 'title'
  And I wait for 1 seconds
  And I change web attribute 'opionion' for newTitle 'test' 2.0
  And I wait for 1 seconds
  And I take screenshot name 'ChangeTitle'
  And I click in button 'save'
  And I wait for 1 seconds
  Then I check title page is newTitle 'test' 2.0

@user20 @web
Scenario:Modificar nombre de usuario
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 2.0
  And I wait for 1 seconds
  When I click in buttonName 'members'
  And I wait for 1 seconds
  And I look for a user created
  And I wait for 1 seconds
  And I type in input 'test' and id 'member-name'
  And I click in button 'save'
  And I wait for 1 seconds
  And I click in buttonName 'tags'
  And I click in buttonName 'members'
  And I wait for 1 seconds
  Then I check for user name 'test'

@user21 @web
Scenario: Login usuario
  Given I navigate to page "http://localhost:2368/ghost" 
  And I wait for 1 seconds
  When I enter email "<USERNAME>" 2.0
  And I wait for 1 seconds
  And I enter password "<PASSWORD>" 2.0
  And I wait for 1 seconds
  And I take screenshot name 'Login'
  And I click in button 'sign in'
  And I wait for 2 seconds
  Then I check logged 2.0