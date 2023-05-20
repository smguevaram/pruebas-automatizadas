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

  let datapoolUser = `Feature: Administracion de usuarios
  @user1 @web
  Scenario:Invitar a un nuevo usuario con un correo válido
    Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
    And I wait for 2 seconds
    When I click in buttonName 'staff' 
    And I wait for 2 seconds
    And I click in button 'invite people'
    And I wait for 2 seconds
    And I click in inputLabel 'empty' and type "$email_1" faker
    And I wait for 2 seconds
    And I click in button 'send invitation now'
    And I wait for 2 seconds
    And I click in buttonName 'tags'
    And I wait for 2 seconds
    And I click in buttonName 'staff' 
    Then I check that exist "$$email_1" in email's invitations faker`;
  fs.writeFileSync("../poolDinamico/dataDinamico-inviteUser.feature",datapoolUser);

  datapoolUser = `Feature: Administracion de usuarios
  @user2 @web
  Scenario:Invitar a un nuevo usuario con un correo inválido
    Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
    And I wait for 2 seconds
    When I click in buttonName 'staff' 
    And I wait for 2 seconds
    And I click in button 'invite people'
    And I wait for 2 seconds
    And I click in inputLabel 'empty' and type "$name_1" faker
    And I wait for 2 seconds
    And I click in button 'send invitation now'
    And I wait for 2 seconds
    Then I check that the email is invalid`;
  fs.writeFileSync("../poolDinamico/dataDinamico-inviteUserinv.feature",datapoolUser);

  datapoolUser = `Feature: Administracion de usuarios
  @user4 @web
  Scenario:Cambiar nombre de usuario por un nombre válido
    Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
    And I wait for 2 seconds
    When I click in buttonName 'staff'
    And I wait for 2 seconds
    And I click on user 'ghost'
    And I wait for 2 seconds
    And I type in input "$name_2" and type 'full name' faker
    And I click in button 'save'
    And I wait for 2 seconds
    And I click in buttonName 'staff'
    And I wait for 2 seconds
    And I check for user name "$$name_2" faker
    And I wait for 2 seconds
    And I click in buttonName 'staff'
    And I wait for 2 seconds
    And I click on user "$$name_2" faker
    And I wait for 2 seconds
    And I type in input 'ghost' and type 'full name'
    And I click in button 'save'
    And I wait for 2 seconds
    And I click in buttonName 'staff'
    And I wait for 2 seconds
    Then I check for user name 'ghost'`;
  fs.writeFileSync("../poolDinamico/dataDinamico-editValidUserName.feature",datapoolUser);

  datapoolUser = `Feature: Administracion de usuarios
  @user5 @web
  Scenario: Editando un correo valido
    Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
    And I wait for 2 seconds
    When I click in buttonName 'staff'
    And I wait for 2 seconds
    And I click on user 'ghost'
    And I wait for 2 seconds
    And I change the email to "$email_3" faker
    And I click anywhere on the page
    And I wait for 2 seconds
    And I click in button 'save'
    And I wait for 3 seconds
    And I click in buttonName 'staff'
    And I click on user 'ghost'
    And I wait for 2 seconds
    Then I check that the email is "$$email_3" faker`;
  fs.writeFileSync("../poolDinamico/dataDinamico-editValidEmail.feature",datapoolUser);

  datapoolUser = `Feature: Administracion de usuarios
  @user6 @web
  Scenario: Editando correo por un correo invalido
    Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
    And I wait for 2 seconds
    When I click in buttonName 'staff'
    And I wait for 2 seconds
    And I click on user 'ghost'
    And I wait for 2 seconds
    And I change the email to "$name_2" faker
    And I click anywhere on the page
    And I wait for 2 seconds
    And I click in buttonName 'save'
    And I wait for 2 seconds
    Then I check that the email is invalid 2`;
  fs.writeFileSync("../poolDinamico/dataDinamico-editInvalidEmail.feature",datapoolUser);

  datapoolUser = `Feature: Administracion de usuarios
  @user8 @web
  Scenario: Cambiar slug
    Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
    And I wait for 2 seconds
    When I click in buttonName 'staff'
    And I wait for 2 seconds
    And I click on user 'ghost'
    And I wait for 2 seconds
    And I type in input "$name_5" and type 'slug' faker
    And I click in button 'save'
    And I wait for 2 seconds
    And I click in buttonName 'staff'
    And I wait for 2 seconds
    And I click on user 'ghost'
    Then I check that the slug is "$$name_5" faker`;
  fs.writeFileSync("../poolDinamico/dataDinamico-changeSlug.feature",datapoolUser);

  datapoolUser = `Feature: Administracion de usuarios
  @user14 @web
  Scenario: Agregar un website valido
    Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
    And I wait for 2 seconds
    When I click in buttonName 'staff'
    And I wait for 2 seconds
    And I click on user 'ghost'
    And I wait for 2 seconds
    And I enter website "$url_1" faker
    And I click in button 'save'
    And I wait for 2 seconds
    And I click in buttonName 'staff'
    And I wait for 2 seconds
    And I click on user 'ghost'
    Then I check that the website is "$$url_1" faker`;
  fs.writeFileSync("../poolDinamico/dataDinamico-createValidWebsite.feature",datapoolUser);

  datapoolUser = `Feature: Administracion de usuarios
  @user15 @web
  Scenario: Agregar un website inválido
    Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
    And I wait for 2 seconds
    When I click in buttonName 'staff'
    And I wait for 2 seconds
    And I click on user 'ghost'
    And I wait for 2 seconds
    And I enter website "$number_1" faker
    And I click in button 'save'
    And I wait for 2 seconds
    Then I check that the website is invalid
    And I wait for 2 seconds`;
  fs.writeFileSync("../poolDinamico/dataDinamico-createInvalidWebsite.feature",datapoolUser);


}

generateScenerios();
