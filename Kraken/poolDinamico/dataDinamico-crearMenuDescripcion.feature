Feature: Administracion de configuracion
    @user1 @web
Scenario:Modificar descripcion de la pagina
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  When I click in buttonName 'general' 
  And I wait for 1 seconds
  And I change web attribute 'title' for newTitle "$name_1" faker
  And I wait for 1 seconds
  And I change web attribute 'title' for newDescription "$string_1" faker
  And I click in button 'save settings'
  And I wait for 2 seconds
  Then I check title page is newTitle "$$name_1" faker