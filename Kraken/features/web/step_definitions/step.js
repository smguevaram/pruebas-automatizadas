const { Given, When, Then } = require("@cucumber/cucumber");
const fs = require("fs");
const properties = require('../../../properties.json')
const info_tags = require('../../mocks/TAGS_MOCK.json')
const info_users = require('../../mocks/USERS_MOCK.json')

When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$("#ember8");
  return await element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$("#ember10");
  return await element.setValue(password);
});

When("I click next", async function () {
  let element = await this.driver.$("#ember12");
  return await element.click();
});

When("I enter email {kraken-string} 2.0", async function (email) {
  let element = await this.driver.$("#identification");
  return await element.setValue(email);
});

When("I enter password {kraken-string} 2.0", async function (password) {
  let element = await this.driver.$("#password");
  return await element.setValue(password);
});


When("I enter contentInput {string}", async function (contentInput) {
  let element = await this.driver.$("#tag-name");
  return await element.setValue(contentInput);
});

When("I enter contentInput {kraken-string} faker", async function (contentInput) {
  let element = await this.driver.$("#tag-name");
  return await element.setValue(contentInput);
});

When("I enter slug {string}", async function (contentInput) {
  let element = await this.driver.$("#tag-slug");
  return await element.setValue(contentInput);
});

When("I enter description {string}", async function (contentInput) {
  let element = await this.driver.$("#tag-description");
  return await element.setValue(contentInput);
});

When("I enter bio {string}", async function (bioInput) {
  let element = await this.driver.$("#user-bio");
  return await element.setValue(bioInput);
});

When("I enter location {string}", async function (locationInput) {
  let element = await this.driver.$("#user-location");
  return await element.setValue(locationInput);
});

When("I enter website {string}", async function (websiteInput) {
  let element = await this.driver.$("input#user-website");
  return await element.setValue(websiteInput);
});

When("I enter description {kraken-string} faker", async function (contentInput) {
  let element = await this.driver.$("#tag-description");
  return await element.setValue(contentInput);
});

Then("I check description is longer", async function () {
  let elements = await this.driver.$$("p[class='response']");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase().includes('longer than 500 characters')) {
      return
    }
  }

  throw new Error('There is not a restriction when description is longer than 500 characters')
  
});

Then("I check name tag is not empty", async function () {
  let elements = await this.driver.$$("p[class='response']");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase().includes('specify a name for the tag')) {
      return
    }
  }

  throw new Error('A tag was created with an empty name')
  
});

Then("I check msg valid url", async function () {
  let elements = await this.driver.$$("p[class='response']");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase().includes('you must specify a valid url or relative path')) {
      return
    }
  }

  throw new Error('A new menu was created with an invalid url')
  
});

Then("I check bio is longer", async function () {
  let elements = await this.driver.$$("p[class='response']");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase().includes('bio is too long')) {
      return;
    }
  }

  throw new Error('No se encontraron elementos que indiquen que la biografía tiene más de 200 caracteres');
});

Then("I check that the email is invalid", async function () {
  let elements = await this.driver.$$("p[class='response']");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase().includes('invalid email')) {
      return;
    }
  }

  throw new Error('No se encontraron elementos que indiquen que el correo electrónico es inválido');
});

Then("I check that the website is invalid", async function () {
  let elements = await this.driver.$$("p[class='response']");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase().includes('website is not a valid url')) {
      return;
    }
  }

  throw new Error('No se encontraron elementos que indiquen que el sitio web es inválido');
});

Then("I check that the email is invalid 2", async function () {
  let elements = await this.driver.$$("p[class='response']");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase().includes('please supply a valid email address')) {
      return;
    }
  }

  throw new Error('No se encontraron elementos que indiquen que el correo electrónico es inválido');
});

Then("I check that the field is empty", async function () {
  let elements = await this.driver.$$("p[class='response']");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase().includes('please enter an email')) {
      return;
    }
  }

  throw new Error('No se encontraron elementos que indiquen que el campo está vacío');
});

Then("I check that the field is empty 3.0", async function () {
  let elements = await this.driver.$$("p[class='response']");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase().includes('Please supply a valid email address')) {
      return;
    }
  }

  throw new Error('No se encontraron elementos que indiquen que el campo está vacío');
});

Then("I check that the field is empty 2.0", async function () {
  let elements = await this.driver.$$("div.gh-alert-content");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase().includes('value in [users.name] cannot be blank')) {
      return;
    }
  }

  throw new Error('No se encontraron elementos que indiquen que el campo está vacío');
});

When("I click in buttonName {string}", async function (buttonName) {
  const elements = await this.driver.$$(".ember-view");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase()==buttonName.toLowerCase()) {
      await elements[i].click();
      break;
    }
  }
});

When("I click in buttonName {string} 2.0", async function (buttonName) {
  const elements = await this.driver.$$(".ember-view");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase().includes(buttonName.toLowerCase())) {
      await elements[i].click();
      break;
    }
  }
});

When("I click in span {string}", async function (span) {
  const elements = await this.driver.$$("span");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase().includes(span.toLowerCase())) {
      await elements[i].click();
      break;
    }
  }
});


When("I click in buttonName settings {string}", async function (buttonName) {
  const elements = await this.driver.$$("a[class='ember-view gh-setting-group']");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase().includes(buttonName.toLowerCase())) {
      await elements[i].click();
      break;
    }
  }
});

When("I click in expand for title {string}", async function (title) {
  const elements = await this.driver.$$("div[class='gh-expandable-header']");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].$("h4").getText();

    if (elementText.toLowerCase().includes(title.toLowerCase())) {
      await elements[i].$("button").click();
      break;
    }
  }
});

When("I click in inputTitle {string}", async function (inputText) {
  const elements = await this.driver.$$("textarea");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getAttribute("class");

    if (
      elementText.toLowerCase() ===
      "gh-editor-title ember-text-area gh-input ember-view"
    ) {
      await elements[i].setValue(inputText);
      break;
    }
  }
});

When(
  "I look for a user with status {string}",
  async function (status) {
    const elements = await this.driver.$$("article[class='apps-card-app']");
    let elementFound = false;

    for (let i = 0; i < elements.length; i++) {
      const stateRow = await elements[i].$("div[class='apps-configured']").getText();

      if (stateRow.toLowerCase() === status.toLowerCase()) {
        await elements[i].click()
        elementFound = true
        break
        }
    }

    if (!elementFound) {
      throw new Error(`No se encontró ningún elemento con el status ${status}`);
    }
  }
  
);

When(
  "I look for a user created",
  async function () {
    const elements = await this.driver.$$("figure")
    let elementFound = false;

    if(elements.length>0){
      await this.driver.$$("figure")[0].click();
      elementFound=true
    }

    if (!elementFound) {
      throw new Error(`No se encontró ningún elemento con el status ${status}`);
    }
  }
  
);

When(
  "I click in inputLabel {string} and type {kraken-string} faker",
  async function (inputLabel, type) {
    if (inputLabel == "empty") inputLabel = "";

    const elements = await this.driver.$$("input");

    for (let i = 0; i < elements.length; i++) {
      const elementText = await elements[i].getValue();

      if (elementText.toLowerCase() === inputLabel.toLowerCase()) {
        await elements[i].setValue(type);
        break;
      }
    }
  }
);

When(
  "I search for label {string} and url type {string}",
  async function (inputLabel, type) {
    if (inputLabel == "empty") inputLabel = "";

    const elements = await this.driver.$$("div[class='gh-blognav-line']");

    for (let i = 0; i < elements.length; i++) {
      const elementText = await elements[i].$('input').getValue();

      if (elementText.toLowerCase() === inputLabel.toLowerCase()) {
        await elements[i].$("span[class='gh-blognav-url ember-view']").$('input').setValue(type);
        break;
      }
    }
  }
);

When(
  "I search for label {kraken-string} and url type {kraken-string} faker",
  async function (label, type) {
    if (label == "empty") label = "";

    const elements = await this.driver.$$("div[class='gh-blognav-line']");

    for (let i = 0; i < elements.length; i++) {
      const elementText = await elements[i].$('input').getValue();

      if (elementText.toLowerCase() === label.toLowerCase()) {
        await elements[i].$("span[class='gh-blognav-url ember-view']").$('input').setValue(type);
        break;
      }
    }
  }
);

When(
  "I search for label {string} and url type {string}",
  async function (inputLabel, type) {
    if (inputLabel == "empty") inputLabel = "";

    const elements = await this.driver.$$("div[class='gh-blognav-line']");

    for (let i = 0; i < elements.length; i++) {
      const elementText = await elements[i].$('input').getValue();

      if (elementText.toLowerCase() === inputLabel.toLowerCase()) {
        await elements[i].$("span[class='gh-blognav-url ember-view']").$('input').setValue(type);
        break;
      }
    }
  }
);

When(
  "I search for label {kraken-string} and url type {kraken-string} faker",
  async function (label, type) {
    if (label == "empty") label = "";

    const elements = await this.driver.$$("div[class='gh-blognav-line']");

    for (let i = 0; i < elements.length; i++) {
      const elementText = await elements[i].$('input').getValue();

      if (elementText.toLowerCase() === label.toLowerCase()) {
        await elements[i].$("span[class='gh-blognav-url ember-view']").$('input').setValue(type);
        break;
      }
    }
  }
);

When(
  "I click in inputLabel {string} and type {string} 2",
  async function (inputLabel, type) {
    if (inputLabel == "empty") inputLabel = "";

    const elements = await this.driver.$$("input#user-email");

    for (let i = 0; i < elements.length; i++) {
      const elementText = await elements[i].getValue();

      if (elementText.toLowerCase() === inputLabel.toLowerCase()) {
        await elements[i].setValue(type);
        break;
      }
    }
  }
);

When("I type in input {string} and type {string}",
  async function (input, type) {
    const elements = await this.driver.$$("input");

    for (let i = 0; i < elements.length; i++) {
      const elementText = await elements[i].getAttribute("placeholder");

      if (elementText.toLowerCase() === type.toLowerCase()) {
        await elements[i].setValue(input);
        break;
      }
    }
  }
);

When("I change the email to {string}", async function (newEmail) {
  const emailField = await this.driver.$('input#user-email');
  await emailField.clearValue();
  await emailField.setValue(newEmail);
});

When("I clear the full name field", async function () {
  const fullNameField = await this.driver.$('input[id="user-name"]');
  await fullNameField.clearValue();
});

When("I clear the email field", async function () {
  const emailField = await this.driver.$('input[id="user-email"]');
  await emailField.clearValue();
});

Then("I check that the email is {string}", async function (email) {
  const emailField = await this.driver.$('input#user-email');
  const fieldValue = await emailField.getValue();

  if (fieldValue.toLowerCase() !== email.toLowerCase()) {
    throw new Error(`El correo electrónico no coincide. Se esperaba: ${email}, se encontró: ${fieldValue}`);
  }
});

Then("I check that the slug is {string}", async function (slug) {
  const slugField = await this.driver.$('input#user-slug');
  const fieldValue = await slugField.getValue();

  if (fieldValue.toLowerCase() !== slug.toLowerCase()) {
    throw new Error(`El slug no coincide. Se esperaba: ${slug}, se encontró: ${fieldValue}`);
  }
});

Then("I check that the bio is {string}", async function (bio) {
  const bioField = await this.driver.$('textarea#user-bio');
  const fieldValue = await bioField.getValue();

  if (fieldValue.toLowerCase() !== bio.toLowerCase()) {
    throw new Error(`La bio no coincide. Se esperaba: ${bio}, se encontró: ${fieldValue}`);
  }
});

Then("I check that the location is {string}", async function (location) {
  const locationField = await this.driver.$('input#user-location');
  const fieldValue = await locationField.getValue();

  if (fieldValue.toLowerCase() !== location.toLowerCase()) {
    throw new Error(`La ubicación no coincide. Se esperaba: ${location}, se encontró: ${fieldValue}`);
  }
});

Then("I check that the website is {string}", async function (website) {
  const websiteField = await this.driver.$('input#user-website');
  const fieldValue = await websiteField.getValue();

  if (fieldValue.toLowerCase() !== website.toLowerCase()) {
    throw new Error(`El sitio web no coincide. Se esperaba: ${website}, se encontró: ${fieldValue}`);
  }
});


When(
  "I type in input {string} and id {string}",
  async function (input, id) {

    const element = await this.driver.$(`input[id=${id}]`);

    await element.setValue(input)
  }
);


Then("I check that exist {string} in menu's list", async function (name) {
  const elements = await this.driver.$$("input");
  let elementFound = false;

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getValue();

    if (elementText.toLowerCase() === name.toLowerCase()) {
      elementFound = true;
    }
  }

  if (!elementFound) {
    throw new Error(`No se encontró ningún elemento con el nombre ${name}`);
  }
});

Then("I check that exist {kraken-string} in menu's list faker", async function (name) {
  const elements = await this.driver.$$("input");
  let elementFound = false;

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getValue();

    if (elementText.toLowerCase() === name.toLowerCase()) {
      elementFound = true;
    }
  }

  if (!elementFound) {
    throw new Error(`No se encontró ningún elemento con el nombre ${name}`);
  }
});

Then("I check that not exist {string} in menu's list", async function (name) {
  const elements = await this.driver.$$("input");
  let elementFound = false;

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getValue();

    if (elementText.toLowerCase() === name.toLowerCase()) {
      elementFound = true;
    }
  }

  if (elementFound) {
    throw new Error(`No se encontró ningún elemento con el nombre ${name}`);
  }
});

When("I click on title {string}", async function (title) {
  const elements = await this.driver.$$(".gh-content-entry-title");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase() === title.toLowerCase()) {
      await elements[i].click();
      break;
    }
  }
});

When("I click anywhere on the page", async function () {
  let bodyElement = await this.driver.$("body");
  return await bodyElement.click();
});

When("I click in button {string}", async function (button) {
  const elements = await this.driver.$$("button");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase().includes(button.toLowerCase())) {
      await elements[i].click();
      break;
    }
  }
});

When("I click on delete item", async function () {
  const element = await this.driver.$("button[class='gh-btn gh-btn-red gh-btn-icon ember-view']");
  await element.click();
});

When("I click on page settings", async function () {
  const element = await this.driver.$("a[class='ember-view gh-nav-bottom-tabicon']");
  await element.click();
});

When("I click on page settings 2.0", async function () {
  const element = await this.driver.$("button[class='settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon']");
  await element.click();
});

When("I click on user settings", async function () {
  const element = await this.driver.$("button[class='gh-btn gh-btn-white gh-btn-icon only-has-icon user-actions-cog closed ember-view']");
  await element.click();
});

When("I click on user settings 2.0", async function () {
  const element = await this.driver.$("button[class='gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view']");
  await element.click();
});

When("I click on menu publish", async function () {
  const element = await this.driver.$(".gh-publishmenu.ember-view");
  await element.click();
});

When("I click on menu publish 2.0", async function () {
  const element = await this.driver.$("button[class='gh-btn gh-btn-editor darkgrey gh-publish-trigger']");
  await element.click();
});

Then("I check state {string} for user {string}", async function (state,user) {
  const elements = await this.driver.$$("article[class='apps-card-app']");
  let elementFound = false;

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].$("h3[class='apps-card-app-title']").getText();

    if (elementText.toLowerCase() === user.toLowerCase()) {
      const stateElement = await elements[i].$("div[class='apps-configured']").getText();
      if(stateElement.toLowerCase() === state.toLowerCase())
      elementFound = true;
      break;
    }
  }

  if (!elementFound) {
    throw new Error(`No se encontró ningún elemento con el nombre ${user} y estado ${state}`);
  }
});

Then("I check for user name {string}", async function (name) {
  const elements = await this.driver.$$("h3.apps-card-app-title");
  let elementFound = false;

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase() === name.toLowerCase()) {
      elementFound = true;
      break;
    }
  }

  if (!elementFound) {
    throw new Error(`No se encontró ningún elemento con el nombre ${name}`);
  }

});


Then("I check that exist {string} in element's list", async function (name) {
  const elements = await this.driver.$$(".ember-view");
  let elementFound = false;

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase() === name.toLowerCase()) {
      elementFound = true;
      break;
    }
  }

  if (!elementFound) {
    throw new Error(`No se encontró ningún elemento con el nombre ${name}`);
  }
});

Then("I check that exist {string} in tag's list", async function (name) {
  const elements = await this.driver.$$("h3[class='gh-tag-list-name']");
  let elementFound = false;

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase() === name.toLowerCase()) {
      elementFound = true;
      break;
    }
  }

  if (!elementFound) {
    throw new Error(`No se encontró ningún elemento con el nombre ${name}`);
  }
});

Then("I check that exist {kraken-string} in tag's list faker", async function (name) {
  const elements = await this.driver.$$("h3[class='gh-tag-list-name']");
  let elementFound = false;

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase() === name.toLowerCase()) {
      elementFound = true;
      break;
    }
  }

  if (!elementFound) {
    throw new Error(`No se encontró ningún elemento con el nombre ${name}`);
  }
});

Then(
  "I check that exist {string} with state {string} in post's or page's list",
  async function (name,state) {
    const elements = await this.driver.$$("li[class='gh-list-row gh-posts-list-item']");
    let elementFound = false;

    for (let i = 0; i < elements.length; i++) {
      const titleRow = await elements[i].$("h3[class='gh-content-entry-title']").getText();

      if (titleRow.toLowerCase() === name.toLowerCase()) {
        const stateRow = await elements[i].$("div[class='flex items-center']").getText();
        if(stateRow.toLowerCase() === state.toLowerCase()){
          elementFound = true;
          break;
        }
      }
    }

    if (!elementFound) {
      throw new Error(`No se encontró ningún elemento con el nombre ${name}`);
    }
    
  }
);

Then(
  "I check that exist {string} post's or page's list",
  async function (name) {
    const elements = await this.driver.$$("h3[class='gh-content-entry-title']");
    let elementFound = false;

    for (let i = 0; i < elements.length; i++) {
      const titleRow = await elements[i].getText();

      if (titleRow.toLowerCase() === name.toLowerCase()) {
          elementFound = true;
          break;
      }
    }

    if (!elementFound) {
      throw new Error(`No se encontró ningún elemento con el nombre ${name}`);
    }
    
  }
);

Then(
  "I change web attribute {string} for newTitle {string}",
  async function (attribute,newTitle) {
    const elements = await this.driver.$$("div[class='gh-setting-first']");

    for (let i = 0; i < elements.length; i++) {
      const titleRow = await elements[i].$("div[class='gh-setting-title']").getText();

      if (titleRow.toLowerCase().includes(attribute.toLowerCase())) {
        await elements[i].$("button").click();
        await elements[i].$$('input')[0].setValue(newTitle);
      }
    }

  }
);

Then(
  "I change web attribute {string} for newTitle {kraken-string} faker",
  async function (attribute,newTitle) {
    const elements = await this.driver.$$("div[class='gh-setting-first']");

    for (let i = 0; i < elements.length; i++) {
      const titleRow = await elements[i].$("div[class='gh-setting-title']").getText();

      if (titleRow.toLowerCase().includes(attribute.toLowerCase())) {
        await elements[i].$("button").click();
        await elements[i].$$('input')[0].setValue(newTitle);
      }
    }

  }
);

When(
  "I change web attribute {string} for newDescription {string}",
  async function (attribute,newDescription) {
    const elements = await this.driver.$$("div[class='gh-setting-first']");

    for (let i = 0; i < elements.length; i++) {
      const titleRow = await elements[i].$("div[class='gh-setting-title']").getText();

      if (titleRow.toLowerCase().includes(attribute.toLowerCase())) {
        await elements[i].$$('input')[1].setValue(newDescription);
      }
    }

  }
);

When(
  "I change web attribute {string} for newDescription {kraken-string} faker",
  async function (attribute,newDescription) {
    const elements = await this.driver.$$("div[class='gh-setting-first']");

    for (let i = 0; i < elements.length; i++) {
      const titleRow = await elements[i].$("div[class='gh-setting-title']").getText();

      if (titleRow.toLowerCase().includes(attribute.toLowerCase())) {
        await elements[i].$$('input')[1].setValue(newDescription);
      }
    }

  }
);


Then(
  "I change web attribute {string} for newTitle {string} 2.0",
  async function (attribute,newTitle) {
    const elements = await this.driver.$$("input[class='ember-text-field gh-input ember-view']");

    for (let i = 0; i < elements.length; i++) {
      const titleRow = await elements[i].getValue();

      if (titleRow.toLowerCase().includes(attribute.toLowerCase())) {
        await elements[i].setValue(newTitle);
        break;
      }
    }

  }
);



Then(
  "I check that exist {string} in email's invitations",
  async function (name) {
    const elements = await this.driver.$$("h3[class='apps-card-app-title']");
    let elementFound = false;

    for (let i = 0; i < elements.length; i++) {
      const titleRow = await elements[i].getText();

      if (titleRow.toLowerCase() === name.toLowerCase()) {
        elementFound = true;
        break;
      }
    }

    if (!elementFound) {
      throw new Error(`No se encontró ningún elemento con el nombre ${name}`);
    }
  }
);

Then(
  "I click on user {string}",
  async function (user) {
    const elements = await this.driver.$$("h3[class='apps-card-app-title']");
    let elementFound = false;

    for (let i = 0; i < elements.length; i++) {
      const titleRow = await elements[i].getText();

      if (titleRow.toLowerCase() === user.toLowerCase()) {
        await elements[i].click()
        break;
      }
    }

  }
);

Then(
  "I check that not exist {string} in email's invitations",
  async function (name) {
    const elements = await this.driver.$$("h3[class='apps-card-app-title']");
    let elementFound = false;

    for (let i = 0; i < elements.length; i++) {
      const titleRow = await elements[i].getText();

      if (titleRow.toLowerCase() === name.toLowerCase()) {
        elementFound = true;
        break;
      }
    }

    if (elementFound) {
      throw new Error(`Se encontró elemento con el nombre ${name}`);
    }
  }
);

Then(
  "I delete user invitation with email {string}",
  async function (email) {
    const elements = await this.driver.$$(".apps-card-app");
    let elementFound = false;

    for (let i = 0; i < elements.length; i++) {
      const titleRow = await elements[i].$("h3[class='apps-card-app-title']").getText();

      if (titleRow.toLowerCase() === email.toLowerCase()) {
        await elements[i].$("a[class='apps-configured-action red-hover']").click()
        break;
      }
    }

  }
);

Then(
  "I check that not exist {string} in post's or page's list",
  async function (name) {
    const elements = await this.driver.$$(".gh-content-entry-title");
    let elementFound = false;

    for (let i = 0; i < elements.length; i++) {
      const titleRow = await elements[i].getText();

      if (titleRow.toLowerCase() === name.toLowerCase()) {
        elementFound = true;
      }
    }

    if (elementFound) {
      throw new Error(`Se encontró elemento con el nombre ${name}`);
    }
  }
);

Then(
  "I check that exist {string} in menu's list to delete",
  async function (name) {
    const elements = await this.driver.$$(
      "div[class='gh-blognav-item gh-blognav-item--sortable ember-view']"
    );
    let elementFound = false;

    for (let i = 0; i < elements.length; i++) {
      const titleRow = await elements[i].$("input").getValue();
      console.log(titleRow);

      if (titleRow.toLowerCase() === name.toLowerCase()) {
        await elements[i].$("button[class='gh-blognav-delete']").click();
        elementFound = true;
      }
    }

    if (!elementFound) {
      throw new Error(`Se encontró elemento con el nombre ${name}`);
    }
  }
);

Then(
  "I check that not exist {string} in element's list",
  async function (name) {
    const elements = await this.driver.$$(".ember-view");
    let elementFound = false;

    for (let i = 0; i < elements.length; i++) {
      const elementText = await elements[i].getText();

      if (elementText.toLowerCase() === name.toLowerCase()) {
        elementFound = true;
      }
    }

    if (elementFound) {
      throw new Error(`Se encontró elemento con el nombre ${name}`);
    }
  }
);

Then(
  "I check title page is newTitle {string}",
  async function (newTitle) {
    const element = await this.driver.$("div[class='gh-nav-menu-details-blog']");

      const elementText = await element.getText();

      if (elementText.toLowerCase() === newTitle.toLowerCase()) {
        elementFound = true;
      }

      if (!elementFound) {
        throw new Error(`El titulo es diferente al titulo comparado ${newTitle}`);
      }
    } 
);

Then(
  "I check title page is newTitle {kraken-string} faker",
  async function (newTitle) {
    const element = await this.driver.$("div[class='gh-nav-menu-details-blog']");

      const elementText = await element.getText();

      if (elementText.toLowerCase() === newTitle.toLowerCase()) {
        elementFound = true;
      }

      if (!elementFound) {
        throw new Error(`El titulo es diferente al titulo comparado ${newTitle}`);
      }
    } 
);

Then(
  "I check title page is newTitle {string} 2.0",
  async function (newTitle) {
    const element = await this.driver.$("div[class='gh-nav-menu-details-sitetitle']");

      const elementText = await element.getText();

      if (elementText.toLowerCase() === newTitle.toLowerCase()) {
        elementFound = true;
      }

      if (!elementFound) {
        throw new Error(`El titulo es diferente al titulo comparado ${newTitle}`);
      }
    }

    
);

Given(
  "I authenticate email {kraken-string} and password {kraken-string}",
  async function (email, password) {
    await this.driver.url("http://localhost:2368/ghost");
    let element = await this.driver.$("#ember8");
    await element.setValue(email);
    let element1 = await this.driver.$("#ember10");
    await element1.setValue(password);
    let element3 = await this.driver.$("#ember12");
    return await element3.click();
  }
);

Given(
  "I authenticate email {kraken-string} and password {kraken-string} 2.0",
  async function (email, password) {
    await this.driver.url("http://localhost:2368/ghost");
    let element = await this.driver.$("#identification");
    await element.setValue(email);
    let element1 = await this.driver.$("#password");
    await element1.setValue(password);
    let element3 = await this.driver.$("#ember5");
    return await element3.click();
  }
);

When(
  "I take screenshot name {string}",
async function (name){
  if (!fs.existsSync(`./screenshots/${properties.VERSION}`)) {
    fs.mkdirSync(`./screenshots/${properties.VERSION}`, { recursive: true });
  }
  return await this.driver.saveScreenshot(`./screenshots/${properties.VERSION}/screenshot-${name}-${properties.VERSION}.png`);
}
)

Then(
  "I check logged",
  async function () {
    const element = await this.driver.$$("span[class='gh-user-email']");
    elementFound = false

      if (element.length>0) {
        elementFound = true;
      }

      if (!elementFound) {
        throw new Error(`No se inicio sesion`);
      }
    }
  
);

Then(
  "I check logged 2.0",
  async function () {
    const element = await this.driver.$$("div[class='flex-auto flex items-center']");
    elementFound = false

      if (element.length>0) {
        await element[0].click()
          elementFound = true
        
      }

      if (!elementFound) {
        throw new Error(`No se inicio sesion`);
      }
    }
  
);