const { Given, When, Then, AfterAll } = require("@cucumber/cucumber");
const assert = require('assert');

const { Builder, By, Key } = require("selenium-webdriver");

const driver = new Builder().forBrowser('chrome').build();

Given('It\'s cross\'s turn, , two cross is in row', {timeout: 100000}, async () => {
    await driver.get('http://127.0.0.1:5500/views/index.html');
    await driver.findElement(By.id("field1")).click();
    await driver.findElement(By.id("field4")).click();
    await driver.findElement(By.id("field2")).click();
    await driver.findElement(By.id("field9")).click();
});

When('User places third cross in row', async () => {
    function displayResult(state) {
    }
    await driver.findElement(By.id("field3")).click();
});

Then('Cross wins, clear field', async ()=> {
    await driver.executeScript("turnEnd()");
    await driver.findElement(By.id("winner")).getAttribute('innerHTML').then(res => {
        assert.equal(res, '<p>Cross is winner!</p>');
    });
});



Given('Filled field without one cell', {timeout: 100000}, async () => {
    await driver.get('http://127.0.0.1:5500/views/index.html');
    await driver.findElement(By.id("field2")).click();
    await driver.findElement(By.id("field1")).click();
    await driver.findElement(By.id("field4")).click();
    await driver.findElement(By.id("field3")).click();
    await driver.findElement(By.id("field5")).click();
    await driver.findElement(By.id("field6")).click();
    await driver.findElement(By.id("field9")).click();
    await driver.findElement(By.id("field8")).click();
});

When('User clicks on last empty cell', async () => {
    function displayResult(state) {
    }
    await driver.findElement(By.id("field7")).click();
});

Then('Result is draw, clear field', async () => {
    await driver.executeScript("turnEnd()");
    await driver.findElement(By.id("winner")).getAttribute('innerHTML').then(res => {
        assert.equal(res, '<p>Draw!</p>');
    });
});


Given('Field is not filled, there are no three cross or zeros in row', {timeout: 100000}, async () => {
    await driver.get('http://127.0.0.1:5500/views/index.html');
});

let previous_player = currentPlayer;
When('User clicks on empty cell', async () => {
    await driver.findElement(By.id("field1")).click();
});

Then('Change turn', async () => {
    assert.notEqual(previous_player, currentPlayer)    
});