const fs = require("fs");

let rawdata = fs.readFileSync("mocks/NAUGHTY_MOCK.json");
let datapool = JSON.parse(rawdata);


function generarNumeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }

function generateScenerios() {

    let tagInfo = generarNumeroAleatorio(0, datapool.length-1);
    let tag = datapool[tagInfo];
    let datapoolTag = `Feature: Administracion de tag
    @user1 @web
    Scenario:Crear nuevo tag
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>"
      And I wait for 2 seconds
      When I click in buttonName 'tags'
      And I wait for 2 seconds
      And I click in buttonName 'new tag'
      And I wait for 2 seconds
      And I enter contentInput '${tag.random_string}'
      And I click in buttonName 'save'
      And I wait for 2 seconds
      And I click in buttonName 'tags' 
      Then I check that exist '${tag.random_string}' in tag's list
      And I send a signal to user 2 containing "done"
`;
    fs.writeFileSync("../poolApriori/datapool-crearTagSpecial.feature", datapoolTag);

    tagInfo = generarNumeroAleatorio(0, datapool.length-1);
    tag = datapool[tagInfo];
    datapoolTag = `Feature: Administracion de tag
    @user1 @web
    Scenario:Crear nuevo tag con slug diferente al nombre
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>"
      And I wait for 2 seconds
      When I click in buttonName 'tags'
      And I wait for 2 seconds
      And I click in buttonName 'new tag'
      And I wait for 2 seconds
      And I enter contentInput '${tag.random_string}'
      And I enter slug '${tag.random_string}'
      And I click in buttonName 'save'
      And I wait for 2 seconds
      And I click in buttonName 'tags' 
      Then I check that exist '${tag.random_string}' in tag's list
      And I send a signal to user 2 containing "done"
`;
    fs.writeFileSync("../poolApriori/datapool-crearTagSlugSpecial.feature", datapoolTag);

    tagInfo = generarNumeroAleatorio(0, datapool.length-1);
    tag = datapool[tagInfo];
    datapoolTag = `Feature: Administracion de tag
    @user1 @web
    Scenario:Crear nuevo tag con descripcion menor a 500 caracteres
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>"
      And I wait for 2 seconds
      When I click in buttonName 'tags'
      And I wait for 2 seconds
      And I click in buttonName 'new tag'
      And I wait for 2 seconds
      And I enter contentInput '${tag.random_string}'
      And I enter description '${tag.random_string}'
      And I click in buttonName 'save'
      And I wait for 2 seconds
      And I click in buttonName 'tags' 
      Then I check that exist '${tag.random_string}' in tag's list
      And I send a signal to user 2 containing "done"
`;
    fs.writeFileSync("../poolApriori/datapool-crearTagDescriptionScSpecial.feature", datapoolTag);

    tagInfo = generarNumeroAleatorio(0, datapool.length-1);
    tag = datapool[tagInfo];
    datapoolTag = `Feature: Administracion de tag
    @user1 @web
    Scenario:Crear nuevo tag con descripcion menor igual a 500 caracteres
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>"
      And I wait for 2 seconds
      When I click in buttonName 'tags'
      And I wait for 2 seconds
      And I click in buttonName 'new tag'
      And I wait for 2 seconds
      And I enter contentInput '${tag.random_string}'
      And I enter description '${tag.random_string}'
      And I click in buttonName 'save'
      And I wait for 2 seconds
      And I click in buttonName 'tags' 
      Then I check that exist '${tag.random_string}' in tag's list
      And I send a signal to user 2 containing "done"
`;
    fs.writeFileSync("../poolApriori/datapool-crearTagDescriptionBorderSpecial.feature", datapoolTag);

    tagInfo = generarNumeroAleatorio(0, datapool.length-1);
    tag = datapool[tagInfo];
    datapoolTag = `Feature: Administracion de tag
    @user1 @web
    Scenario:Crear nuevo tag con descripcion mayor a 500 caracteres
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>"
      And I wait for 2 seconds
      When I click in buttonName 'tags'
      And I wait for 2 seconds
      And I click in buttonName 'new tag'
      And I wait for 2 seconds
      And I enter contentInput '${tag.random_string}'
      And I enter description '${tag.random_string}'
      And I click in buttonName 'save'
      And I wait for 2 seconds
      And I click in buttonName 'tags' 
      Then I check description is longer
      And I send a signal to user 2 containing "done"
`;
    fs.writeFileSync("../poolApriori/datapool-crearTagDescriptionFlSpecial.feature", datapoolTag);

    console.log('Scenerios created');
}

generateScenerios();