const fs = require("fs");

let rawdata = fs.readFileSync("mocks/MENU_MOCK.json");
let datapool = JSON.parse(rawdata);

function generarNumeroAleatorio(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function generateScenerios() {
    if (!fs.existsSync(`../poolApriori/`)) {
        fs.mkdirSync(`../poolApriori/`, { recursive: true });
      }
  let menuInfo = generarNumeroAleatorio(0, datapool.length - 1);
  let menu = datapool[menuInfo];
  let datapoolMenu = `Feature: Administracion menu
  @user10 @web
  Scenario:Crear nuevo boton de menu
    Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
    And I wait for 1 seconds
    When I click in buttonName 'design' 
    And I wait for 1 seconds
    And I click in inputLabel 'empty' and type '${menu.label}' 
    And I wait for 1 seconds
    And I click in button 'save'
    And I wait for 1 seconds
    And I click in buttonName 'design'
    And I wait for 1 seconds
    Then I check that exist '${menu.label}' in menu's list
`;
  fs.writeFileSync(
    "../poolApriori/datapool-crearMenu.feature",
    datapoolMenu
  );

  menuInfo = generarNumeroAleatorio(0, datapool.length - 1);
  menu = datapool[menuInfo];
  datapoolMenu = `Feature: Administracion menu
  @user10 @web
  Scenario:Crear nuevo boton de menu con caracteres especiales
    Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
    And I wait for 1 seconds
    When I click in buttonName 'design' 
    And I wait for 1 seconds
    And I click in inputLabel 'empty' and type '${menu.random_String}' 
    And I wait for 1 seconds
    And I click in button 'save'
    And I wait for 1 seconds
    And I click in buttonName 'design'
    And I wait for 1 seconds
    Then I check that exist '${menu.random_string}' in menu's list
`;
  fs.writeFileSync(
    "../poolApriori/datapool-crearMenuSpecial.feature",
    datapoolMenu
  );


  menuInfo = generarNumeroAleatorio(0, datapool.length - 1);
  menu = datapool[menuInfo];
  datapoolMenu = `Feature: Administracion menu
  @user10 @web
  Scenario:Crear nuevo boton de menu con url completa
    Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
    And I wait for 1 seconds
    When I click in buttonName 'design' 
    And I wait for 1 seconds
    And I click in inputLabel 'empty' and type '${menu.label}' 
    And I wait for 1 seconds
    And I search for label '${menu.label}' and url type '${menu.url}'
    And I click in button 'save'
    And I wait for 1 seconds
    And I click in buttonName 'design'
    And I wait for 1 seconds
    Then I check that exist '${menu.label}' in menu's list
`;
  fs.writeFileSync(
    "../poolApriori/datapool-crearMenuUrl.feature",
    datapoolMenu
  );

  menuInfo = generarNumeroAleatorio(0, datapool.length - 1);
  menu = datapool[menuInfo];
  datapoolMenu = `Feature: Administracion menu
  @user10 @web
  Scenario:Crear nuevo boton de menu con url sin protocolo
    Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
    And I wait for 1 seconds
    When I click in buttonName 'design' 
    And I wait for 1 seconds
    And I click in inputLabel 'empty' and type '${menu.label}' 
    And I wait for 1 seconds
    And I search for label '${menu.label}' and url type '${menu.url_no_protocol}'
    And I click in button 'save'
    And I wait for 1 seconds
    And I click in buttonName 'design'
    And I wait for 1 seconds
    Then I check msg valid url
`;
  fs.writeFileSync(
    "../poolApriori/datapool-crearMenuUrlInvalid.feature",
    datapoolMenu
  );

  menuInfo = generarNumeroAleatorio(0, datapool.length - 1);
  menu = datapool[menuInfo];
  datapoolMenu = `Feature: Administracion menu
  @user10 @web
  Scenario:Crear nuevo boton de menu con url sin protocolo
    Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
    And I wait for 1 seconds
    When I click in buttonName 'design' 
    And I wait for 1 seconds
    And I click in inputLabel 'empty' and type '${menu.label}' 
    And I wait for 1 seconds
    And I search for label '${menu.label}' and url type '${menu.random_string}'
    And I click in button 'save'
    And I wait for 1 seconds
    And I click in buttonName 'design'
    And I wait for 1 seconds
    Then I check that exist '${menu.label}' in menu's list
`;
  fs.writeFileSync(
    "../poolApriori/datapool-crearMenuUrlSpecialCharacters.feature",
    datapoolMenu
  );

}

generateScenerios();
