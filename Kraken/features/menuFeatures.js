const fs = require("fs");

let rawdata = fs.readFileSync("mocks/MENU_MOCK.json");
let datapool = JSON.parse(rawdata);

function generarNumeroAleatorio(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function generateScenerios() {
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
}

generateScenerios();
