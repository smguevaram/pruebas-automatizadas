const fs = require("fs");

let rawdata = fs.readFileSync("mocks/USERS_MOCK.json");
let datapool = JSON.parse(rawdata);


function generarNumeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }

function generateScenerios() {

    let userInfo = generarNumeroAleatorio(0, datapool.length-1);
    let user = datapool[userInfo];
    let datapoolUser = `Feature: Administracion de usuarios
    @user1 @web
    Scenario:Invitar a un nuevo usuario con un correo válido
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
      And I wait for 2 seconds
      When I click in buttonName 'staff' 
      And I wait for 2 seconds
      And I click in button 'invite people'
      And I wait for 2 seconds
      And I click in inputLabel 'empty' and type '${user.user_email}'
      And I wait for 2 seconds
      And I click in button 'send invitation now'
      And I wait for 2 seconds
      And I click in buttonName 'tags'
      And I wait for 2 seconds
      And I click in buttonName 'staff' 
      Then I check that exist '${user.user_email}' in email's invitations
      
`;
      fs.writeFileSync("../poolApriori/datapool-inviteUser.feature", datapoolUser);
  

    tagInfo = generarNumeroAleatorio(0, datapool.length-1);
    tag = datapool[tagInfo];
    datapoolUser = `Feature: Administracion de usuarios
    @user2 @web
    Scenario:Invitar a un nuevo usuario con un correo inválido
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
      And I wait for 2 seconds
      When I click in buttonName 'staff' 
      And I wait for 2 seconds
      And I click in button 'invite people'
      And I wait for 2 seconds
      And I click in inputLabel 'empty' and type '${user.user_name}'
      And I wait for 2 seconds
      And I click in button 'send invitation now'
      And I wait for 2 seconds
      Then I check that the email is invalid
      
`;
    fs.writeFileSync("../poolApriori/datapool-inviteUserinv.feature", datapoolUser);

    tagInfo = generarNumeroAleatorio(0, datapool.length-1);
    tag = datapool[tagInfo];
    datapoolUser = `Feature: 
    @user3 @web
    Scenario:Invitar a un nuevo usuario con el campo de correo vacío
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
      And I wait for 2 seconds
      When I click in buttonName 'staff' 
      And I wait for 2 seconds
      And I click in button 'invite people'
      And I wait for 2 seconds
      And I click in inputLabel 'empty' and type '${user.user_empty}'
      And I wait for 2 seconds
      And I click in button 'send invitation now'
      And I wait for 2 seconds
      Then I check that the field is empty
`;
    fs.writeFileSync("../poolApriori/datapool-inviteUserEmpty.feature", datapoolUser);

      tagInfo = generarNumeroAleatorio(0, datapool.length-1);
      tag = datapool[tagInfo];
      datapoolUser = `Feature: Administracion de usuarios
    @user4 @web
    Scenario: Cambiar nombre de usuario por un nombre válido
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
      And I wait for 2 seconds
      When I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      And I wait for 2 seconds
      And I type in input '${user.user_name}' and type 'full name'
      And I click in button 'save'
      And I wait for 2 seconds
      And I click in buttonName 'staff'
      And I wait for 2 seconds
      And I check for user name '${user.user_name}'
      And I wait for 2 seconds
      And I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user '${user.user_name}'
      And I wait for 2 seconds
      And I type in input 'ghost' and type 'full name'
      And I click in button 'save'
      And I wait for 2 seconds
      And I click in buttonName 'staff'
      And I wait for 2 seconds
      Then I check for user name 'ghost'
        
  `;
      fs.writeFileSync("../poolApriori/datapool-editValidUserName.feature", datapoolUser);

      tagInfo = generarNumeroAleatorio(0, datapool.length-1);
      tag = datapool[tagInfo];
      datapoolUser = `Feature: Administracion de usuarios
    @user5 @web
    Scenario: Editando un correo valido
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
      And I wait for 2 seconds
      When I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      And I wait for 2 seconds
      And I change the email to '${user.user_email}'
      And I click anywhere on the page
      And I wait for 2 seconds
      And I click in button 'save'
      And I wait for 2 seconds
      And I click in buttonName 'staff'
      And I click on user 'ghost'
      And I wait for 2 seconds
      Then I check that the email is '${user.user_email}'
        
  `;
      fs.writeFileSync("../poolApriori/datapool-editValidEmail.feature", datapoolUser);

      tagInfo = generarNumeroAleatorio(0, datapool.length-1);
      tag = datapool[tagInfo];
      datapoolUser = `Feature: Administracion de usuarios
    @user6 @web
    Scenario: Editando correo por un correo invalido
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
      And I wait for 2 seconds
      When I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      And I wait for 2 seconds
      And I change the email to '${user.user_name}'
      And I click anywhere on the page
      And I wait for 2 seconds
      And I click in buttonName 'save'
      And I wait for 2 seconds
      Then I check that the email is invalid 2
        
  `;
      fs.writeFileSync("../poolApriori/datapool-editInvalidEmail.feature", datapoolUser);

      tagInfo = generarNumeroAleatorio(0, datapool.length-1);
      tag = datapool[tagInfo];
      datapoolUser = `Feature: Administracion de usuarios
    @user7 @web
    Scenario: Editando correo por un correo vacío
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
      And I wait for 2 seconds
      When I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      And I wait for 2 seconds
      And I clear the email field
      And I click anywhere on the page
      And I wait for 2 seconds
      And I click in button 'save'
      And I wait for 2 seconds
      Then I check that the email is invalid 2
        
  `;
      fs.writeFileSync("../poolApriori/datapool-editEmptyEmail.feature", datapoolUser);

      tagInfo = generarNumeroAleatorio(0, datapool.length-1);
      tag = datapool[tagInfo];
      datapoolUser = `Feature: Administracion de usuarios
    @user8 @web
    Scenario: Cambiar slug
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
      And I wait for 2 seconds
      When I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      And I wait for 2 seconds
      And I type in input '${user.user_name}' and type 'slug'
      And I click in button 'save'
      And I wait for 2 seconds
      And I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      Then I check that the slug is '${user.user_name}'
      
        
  `;
      fs.writeFileSync("../poolApriori/datapool-changeSlug.feature", datapoolUser);

      tagInfo = generarNumeroAleatorio(0, datapool.length-1);
      tag = datapool[tagInfo];
      datapoolUser = `Feature: Administracion de usuarios
    @user9 @web
    Scenario: Crear una bio con menos de 200 caracteres
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
      And I wait for 2 seconds
      When I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      And I wait for 2 seconds
      And I enter bio '${user.bio_UnderUL}'
      And I click in button 'save'
      And I wait for 2 seconds
      And I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      Then I check that the bio is '${user.bio_UnderUL}'
      
        
  `;
      fs.writeFileSync("../poolApriori/datapool-createBioUnderUL.feature", datapoolUser);

      tagInfo = generarNumeroAleatorio(0, datapool.length-1);
      tag = datapool[tagInfo];
      datapoolUser = `Feature: Administracion de usuarios
    @user10 @web
    Scenario: Crear una bio con 200 caracteres
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
      And I wait for 2 seconds
      When I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      And I wait for 2 seconds
      And I enter bio '${user.bio_UL}'
      And I click in button 'save'
      And I wait for 2 seconds
      And I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      Then I check that the bio is '${user.bio_UL}'
      
        
  `;
      fs.writeFileSync("../poolApriori/datapool-createBioUL.feature", datapoolUser);

      tagInfo = generarNumeroAleatorio(0, datapool.length-1);
      tag = datapool[tagInfo];
      datapoolUser = `Feature: Administracion de usuarios
    @user11 @web
    Scenario: Crear una bio con mas de 200 caracteres
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
      And I wait for 2 seconds
      When I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      And I wait for 2 seconds
      And I enter bio '${user.bio_OverUL}'
      And I click in button 'save'
      And I wait for 2 seconds
      Then I check bio is longer
      
        
  `;
      fs.writeFileSync("../poolApriori/datapool-createBioOverUL.feature", datapoolUser);

      tagInfo = generarNumeroAleatorio(0, datapool.length-1);
      tag = datapool[tagInfo];
      datapoolUser = `Feature: Administracion de usuarios
    @user12 @web
    Scenario: Agregar una locación valida
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
      And I wait for 2 seconds
      When I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      And I wait for 2 seconds
      And I enter location '${user.valid_Location}'
      And I click in button 'save'
      And I wait for 2 seconds
      And I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      Then I check that the location is '${user.valid_Location}'
      
        
  `;
      fs.writeFileSync("../poolApriori/datapool-createValidLocation.feature", datapoolUser);

      tagInfo = generarNumeroAleatorio(0, datapool.length-1);
      tag = datapool[tagInfo];
      datapoolUser = `Feature: Administracion de usuarios
    @user13 @web
    Scenario: Agregar una locación considerada invalida
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
      And I wait for 2 seconds
      When I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      And I wait for 2 seconds
      And I enter location '${user.invalid_Location}'
      And I click in button 'save'
      And I wait for 2 seconds
      And I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      Then I check that the location is '${user.invalid_Location}'
      
        
  `;
      fs.writeFileSync("../poolApriori/datapool-createInvalidLocation.feature", datapoolUser);

      tagInfo = generarNumeroAleatorio(0, datapool.length-1);
      tag = datapool[tagInfo];
      datapoolUser = `Feature: Administracion de usuarios
    @user14 @web
    Scenario: Agregar un website valido
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
      And I wait for 2 seconds
      When I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      And I wait for 2 seconds
      And I enter website '${user.valid_website}'
      And I click in button 'save'
      And I wait for 2 seconds
      And I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      Then I check that the website is '${user.valid_website}'
      
        
  `;
      fs.writeFileSync("../poolApriori/datapool-createValidWebsite.feature", datapoolUser);

      tagInfo = generarNumeroAleatorio(0, datapool.length-1);
      tag = datapool[tagInfo];
      datapoolUser = `Feature: Administracion de usuarios
    @user15 @web
    Scenario: Agregar un website inválido
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
      And I wait for 2 seconds
      When I click in buttonName 'staff'
      And I wait for 2 seconds
      And I click on user 'ghost'
      And I wait for 2 seconds
      And I enter website '${user.invalid_website}'
      And I click in button 'save'
      And I wait for 2 seconds
      Then I check that the website is invalid
      And I wait for 2 seconds
      `;
      fs.writeFileSync("../poolApriori/datapool-createInvalidWebsite.feature", datapoolUser);

      console.log('Scenerios created');
  }
  
  generateScenerios();