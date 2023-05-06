const { Given, When, Then } = require("@cucumber/cucumber");

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

When("I enter contentInput {string}", async function (contentInput) {
  let element = await this.driver.$("#tag-name");
  return await element.setValue(contentInput);
});

When("I click in buttonName {string}", async function (buttonName) {
  const elements = await this.driver.$$(".ember-view");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase() === buttonName.toLowerCase()) {
      await elements[i].click();
      break;
    }
  }
});

When("I click in inputTitle {string}", async function (inputText) {
  const elements = await this.driver.$$("textarea");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getAttribute('class');

    if (elementText.toLowerCase() === 'gh-editor-title ember-text-area gh-input ember-view') {
      await await elements[i].setValue(inputText);
      break;
    }
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

When('I click anywhere on the page', async function() {
  let bodyElement = await this.driver.$('body');
  return await bodyElement.click();
});

When("I click in button {string}", async function (button) {
  const elements = await this.driver.$$("button");

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase() === button.toLowerCase()) {
      await elements[i].click();
      break;
    }
  }
});

When("I click on menu publish", async function () {
  const element= await this.driver.$(".gh-publishmenu.ember-view");
      await element.click();    
  
});

Then("I check that exist {string} in element's list", async function (name) {
  const elements = await this.driver.$$(".ember-view");
  let elementFound = false;

  for (let i = 0; i < elements.length; i++) {
    const elementText = await elements[i].getText();

    if (elementText.toLowerCase() === name.toLowerCase()) {
      elementFound = true;
    }
  }

  if (!elementFound) {
    throw new Error(`No se encontró ningún elemento con el nombre ${name}`);
  }
});

Then("I check that exist {string} in post's or page's list", async function (name) {
  const elements = await this.driver.$$(".gh-content-entry-title");
  let elementFound = false;

  for (let i = 0; i < elements.length; i++) {
    const titleRow = await elements[i].getText()

    if (titleRow.toLowerCase() === name.toLowerCase()) {
      elementFound = true;
    }
  }

  if (!elementFound) {
    throw new Error(`No se encontró ningún elemento con el nombre ${name}`);
  }
});


Then("I check that not exist {string} in element's list", async function (name) {
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
});

Given(
  "I authenticate email {kraken-string} and password {kraken-string}",
  async function (email,password) {
    await this.driver.url("http://localhost:2368/ghost");
    let element = await this.driver.$("#ember8");
    await element.setValue(email);
    let element1 = await this.driver.$("#ember10");
    await element1.setValue(password);
    let element3 = await this.driver.$("#ember12");
    return await element3.click();
  }
);
