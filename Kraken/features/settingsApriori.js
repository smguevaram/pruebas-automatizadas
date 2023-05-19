const fs = require("fs");

let rawdata = fs.readFileSync("mocks/SETTINGS_MOCK.json");
let datapool = JSON.parse(rawdata);

function generarNumeroAleatorio(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function generateScenerios() {
  let settingsInfo = generarNumeroAleatorio(0, datapool.length - 1);
  let settings = datapool[settingsInfo];
  let datapoolSettings = `Feature: Administracion de configuracion
    @user1 @web
Scenario:Modificar titulo de la pagina
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  When I click in buttonName 'general' 
  And I wait for 1 seconds
  And I change web attribute 'title' for newTitle '${settings.title}'
  And I wait for 1 seconds
  And I click in button 'save settings'
  And I wait for 2 seconds
  Then I check title page is newTitle '${settings.title}'
`;
  fs.writeFileSync(
    "../poolApriori/datapool-cambiarTitulo.feature",
    datapoolSettings
  );

  settingsInfo = generarNumeroAleatorio(0, datapool.length - 1);
  settings = datapool[settingsInfo];
  datapoolSettings = `Feature: Administracion de configuracion
    @user1 @web
Scenario:Modificar titulo de la pagina con un titulo largo
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  When I click in buttonName 'general' 
  And I wait for 1 seconds
  And I change web attribute 'title' for newTitle '${settings.titleLong}'
  And I wait for 1 seconds
  And I click in button 'save settings'
  And I wait for 2 seconds
  Then I check title page is newTitle '${settings.titleLong}'
`;
  fs.writeFileSync(
    "../poolApriori/datapool-cambiarTituloLong.feature",
    datapoolSettings
  );

  settingsInfo = generarNumeroAleatorio(0, datapool.length - 1);
  settings = datapool[settingsInfo];
  datapoolSettings = `Feature: Administracion de configuracion
    @user1 @web
Scenario:Modificar titulo de la pagina a un titulo vacio
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  When I click in buttonName 'general' 
  And I wait for 1 seconds
  And I change web attribute 'title' for newTitle ''
  And I wait for 1 seconds
  And I click in button 'save settings'
  And I wait for 2 seconds
  Then I check title page is newTitle ''
`;
  fs.writeFileSync(
    "../poolApriori/datapool-cambiarTituloEmpty.feature",
    datapoolSettings
  );

  settingsInfo = generarNumeroAleatorio(0, datapool.length - 1);
  settings = datapool[settingsInfo];
  datapoolSettings = `Feature: Administracion de configuracion
    @user1 @web
Scenario:Modificar descripcion de la pagina
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  When I click in buttonName 'general' 
  And I wait for 1 seconds
  And I change web attribute 'title' for newTitle '${settings.title}'
  And I wait for 1 seconds
  And I change web attribute 'title' for newDescription '${settings.descriptionShort}'
  And I click in button 'save settings'
  And I wait for 2 seconds
  Then I check title page is newTitle '${settings.title}'
`;
  fs.writeFileSync(
    "../poolApriori/datapool-cambiarDescription.feature",
    datapoolSettings
  );

  settingsInfo = generarNumeroAleatorio(0, datapool.length - 1);
  settings = datapool[settingsInfo];
  datapoolSettings = `Feature: Administracion de configuracion
    @user1 @web
Scenario:Modificar descripcion de la pagina con una descripcion larga
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  When I click in buttonName 'general' 
  And I wait for 1 seconds
  And I change web attribute 'title' for newTitle '${settings.title}'
  And I wait for 1 seconds
  And I change web attribute 'title' for newDescription '${settings.descriptionLong}'
  And I click in button 'save settings'
  And I wait for 2 seconds
  Then I check title page is newTitle '${settings.title}'
`;
  fs.writeFileSync(
    "../poolApriori/datapool-cambiarDescriptionLong.feature",
    datapoolSettings
  );

  settingsInfo = generarNumeroAleatorio(0, datapool.length - 1);
  settings = datapool[settingsInfo];
  datapoolSettings = `Feature: Administracion de configuracion
    @user1 @web
Scenario:Modificar descripcion de la pagina incluyendo caracteres especiales
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  When I click in buttonName 'general' 
  And I wait for 1 seconds
  And I change web attribute 'title' for newTitle '${settings.title}'
  And I wait for 1 seconds
  And I change web attribute 'title' for newDescription '${settings.random_string}'
  And I click in button 'save settings'
  And I wait for 2 seconds
  Then I check title page is newTitle '${settings.title}'
`;
  fs.writeFileSync(
    "../poolApriori/datapool-cambiarDescriptionSpecial.feature",
    datapoolSettings
  );

  console.log("Scenerios created");
}

generateScenerios();
