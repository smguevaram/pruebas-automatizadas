Feature: Administracion de tag
    @user1 @web
    Scenario:Crear nuevo tag con descripcion menor a 500 caracteres
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>"
      And I wait for 2 seconds
      When I click in buttonName 'tags'
      And I wait for 2 seconds
      And I click in buttonName 'new tag'
      And I wait for 2 seconds
      And I enter contentInput "$name_1" faker
      And I enter description "$string_1" faker
      And I click in buttonName 'save'
      And I wait for 2 seconds
      And I click in buttonName 'tags' 
      Then I check that exist "$$name_1" in tag's list faker