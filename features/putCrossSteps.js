const { Given, When, Then, AfterAll } = require("@cucumber/cucumber");
const assert = require('assert');

const { Builder, By, Key } = require("selenium-webdriver");

const driver = new Builder().forBrowser('firefox').build();

Given('It\'s cross\'s turn', {timeout: 100000}, async () => {
    await driver.get('http://127.0.0.1:5500/views/index.html');
});

When('User clicks on empty cell', async () => {
    await driver.findElement(By.id("field1")).click();
});

Then('Put cross in cell', async ()=> {
    await driver.findElement(By.id("field1")).getText().then(res => {
        assert.equal(res, '<div class="x active"><img src="../src/img/cross.png"></div>');
    });
});



Given('It\'s not cross\'s turn', {timeout: 100000}, async () => {
    await driver.get('http://127.0.0.1:5500/views/index.html');
    await driver.executeScript("changePlayer()");
});

// when user clicks on empty cell is already defined

Then('Don\'t put cross in cell', async () => {
    await driver.findElement(By.id("field1")).getText().then(res => {
        assert.notEqual(res, '<div class="x active"><img src="../src/img/cross.png"></div>');
    });
});


let field1_contains;
Given('It\'s cross\'s turn and field1 is occupied', {timeout: 100000}, async () => {
    await driver.get('http://127.0.0.1:5500/views/index.html');
    await driver.executeScript("changePlayer()");
    await driver.findElement(By.id("field1")).click(); //made click so there will be zero
    
    await driver.findElement(By.id("field1")).getText().then(res => {
        field1_contains = res;
    });
});

When('User clicks on occupied cell', async () => {
    await driver.findElement(By.id("field1")).click();
});

Then('Leave cell unchanged', async () => {
    await driver.findElement(By.id("field1")).getText().then(res => {
        assert.equal(res, field1_contains); // so it is the same as before the clicking
    });
});