Feature: Administracion menu
  @user10 @web
  Scenario:Crear nuevo boton de menu
    Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
    And I wait for 1 seconds
    When I click in buttonName 'design' 
    And I wait for 1 seconds
    And I click in inputLabel 'empty' and type "$name_1" faker
    And I wait for 1 seconds
    And I click in button 'save'
    And I wait for 1 seconds
    And I click in buttonName 'design'
    And I wait for 1 seconds
    Then I check that exist "$$name_1" in menu's list faker