Feature: administracion de configuraciones

@user19 @web
Scenario:Modificar titulo de la pagina
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  When I click in buttonName 'general' 
  And I wait for 1 seconds
  And I change web attribute 'title' for newTitle 'test'
  And I wait for 1 seconds
  And I click in button 'save settings'
  And I wait for 1 seconds
  Then I check title page is newTitle 'test'