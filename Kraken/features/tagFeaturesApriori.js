const fs = require("fs");

let rawdata = fs.readFileSync("mocks/TAGS_MOCK.json");
let datapool = JSON.parse(rawdata);


function generarNumeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }

function generateScenerios() {

  if (!fs.existsSync(`../poolApriori/`)) {
    fs.mkdirSync(`../poolApriori/`, { recursive: true });
  }

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
      And I enter contentInput '${tag.tag_name}'
      And I click in buttonName 'save'
      And I wait for 2 seconds
      And I click in buttonName 'tags' 
      Then I check that exist '${tag.tag_name}' in tag's list
      And I send a signal to user 2 containing "done"
`;
    fs.writeFileSync("../poolApriori/datapool-crearTag.feature", datapoolTag);

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
      And I enter contentInput '${tag.tag_name}'
      And I enter slug '${tag.slug}'
      And I click in buttonName 'save'
      And I wait for 2 seconds
      And I click in buttonName 'tags' 
      Then I check that exist '${tag.tag_name}' in tag's list
      And I send a signal to user 2 containing "done"
`;
    fs.writeFileSync("../poolApriori/datapool-crearTagSlug.feature", datapoolTag);

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
      And I enter contentInput '${tag.tag_name}'
      And I enter description '${tag.descriptionSc}'
      And I click in buttonName 'save'
      And I wait for 2 seconds
      And I click in buttonName 'tags' 
      Then I check that exist '${tag.tag_name}' in tag's list
      And I send a signal to user 2 containing "done"
`;
    fs.writeFileSync("../poolApriori/datapool-crearTagDescriptionSc.feature", datapoolTag);

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
      And I enter contentInput '${tag.tag_name}'
      And I enter description '${tag.descriptionBorder}'
      And I click in buttonName 'save'
      And I wait for 2 seconds
      And I click in buttonName 'tags' 
      Then I check that exist '${tag.tag_name}' in tag's list
      And I send a signal to user 2 containing "done"
`;
    fs.writeFileSync("../poolApriori/datapool-crearTagDescriptionBorder.feature", datapoolTag);

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
      And I enter contentInput '${tag.tag_name}'
      And I enter description '${tag.descriptionFl}'
      And I click in buttonName 'save'
      And I wait for 2 seconds
      And I click in buttonName 'tags' 
      Then I check description is longer
      And I send a signal to user 2 containing "done"
`;
    fs.writeFileSync("../poolApriori/datapool-crearTagDescriptionFl.feature", datapoolTag);

    tagInfo = generarNumeroAleatorio(0, datapool.length-1);
    tag = datapool[tagInfo];
    datapoolTag = `Feature: Administracion de tag
    @user1 @web
    Scenario:Crear con un nombre vacio
      Given I authenticate email "<USERNAME>" and password "<PASSWORD>"
      And I wait for 2 seconds
      When I click in buttonName 'tags'
      And I wait for 2 seconds
      And I click in buttonName 'new tag'
      And I wait for 2 seconds
      And I enter contentInput ''
      And I enter description '${tag.descriptionSc}'
      And I click in buttonName 'save'
      And I wait for 1 seconds
      Then I check name tag is not empty

`;
    fs.writeFileSync("../poolApriori/datapool-crearTagNombreVacio.feature", datapoolTag);

    console.log('Scenerios created');
}

generateScenerios();