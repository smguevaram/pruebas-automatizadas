const fs = require("fs");

function generateScenerios() {
  if (!fs.existsSync(`../poolDinamico/`)) {
    fs.mkdirSync(`../poolDinamico/`, { recursive: true });
  }

  let datapoolMenu = `Feature: Administracion de configuracion
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
Then I check title page is newTitle "$$name_1" faker`;
  fs.writeFileSync(
    "../poolDinamico/dataDinamico-cambiarDescription.feature",
    datapoolMenu
  );

  datapoolMenu = `Feature: Administracion de configuracion
  @user1 @web
Scenario:Modificar titulo de la pagina
Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
And I wait for 1 seconds
When I click in buttonName 'general' 
And I wait for 1 seconds
And I change web attribute 'title' for newTitle "$name_1" faker
And I wait for 1 seconds
And I click in button 'save settings'
And I wait for 2 seconds
Then I check title page is newTitle "$$name_1" faker`;
  fs.writeFileSync(
    "../poolDinamico/dataDinamico-cambiarTitulo.feature",
    datapoolMenu
  );

  datapoolMenu = `Feature: Administracion menu
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
    Then I check that exist "$$name_1" in menu's list faker`;
  fs.writeFileSync(
    "../poolDinamico/dataDinamico-crearMenu.feature",
    datapoolMenu
  );

  datapoolMenu = `Feature: Administracion menu
  @user10 @web
  Scenario:Crear nuevo boton de menu con url completa
    Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
    And I wait for 1 seconds
    When I click in buttonName 'design' 
    And I wait for 1 seconds
    And I click in inputLabel 'empty' and type "$name_1" faker 
    And I wait for 1 seconds
    And I search for label "$$name_1" and url type "$url_1" faker
    And I click in button 'save'
    And I wait for 1 seconds
    And I click in buttonName 'design'
    And I wait for 1 seconds
    Then I check that exist "$$name_1" in menu's list faker`;
  fs.writeFileSync(
    "../poolDinamico/dataDinamico-crearMenuUrl.feature",
    datapoolMenu
  );

  datapoolMenu = `Feature: Administracion de tag
  @user1 @web
  Scenario:Crear nuevo tag
    Given I authenticate email "<USERNAME>" and password "<PASSWORD>"
    And I wait for 2 seconds
    When I click in buttonName 'tags'
    And I wait for 2 seconds
    And I click in buttonName 'new tag'
    And I wait for 2 seconds
    And I enter contentInput "$name_1" faker
    And I click in buttonName 'save'
    And I wait for 2 seconds
    And I click in buttonName 'tags'
    Then I check that exist "$$name_1" in tag's list faker`;
  fs.writeFileSync(
    "../poolDinamico/dataDinamico-crearTag.feature",
    datapoolMenu
  );

  datapoolMenu = `Feature: Administracion de tag
  @user1 @web
  Scenario:Crear nuevo tag con descripcion
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
    Then I check that exist "$$name_1" in tag's list faker`;
  fs.writeFileSync(
    "../poolDinamico/dataDinamico-crearTagDescription.feature",
    datapoolMenu
  );

  datapoolMenu = `Feature: Administracion de tag
  @user1 @web
  Scenario:Crear nuevo tag con slug diferente al nombre
    Given I authenticate email "<USERNAME>" and password "<PASSWORD>"
    And I wait for 2 seconds
    When I click in buttonName 'tags'
    And I wait for 2 seconds
    And I click in buttonName 'new tag'
    And I wait for 2 seconds
    And I enter contentInput "$name_1" faker
    And I enter slug "$name_2"
    And I click in buttonName 'save'
    And I wait for 2 seconds
    And I click in buttonName 'tags' 
    Then I check that exist "$$name_1" in tag's list faker`;
  fs.writeFileSync(
    "../poolDinamico/dataDinamico-crearTagSlug.feature",
    datapoolMenu
  );


}

generateScenerios();
