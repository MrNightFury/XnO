const { Given, When, Then, AfterAll } = require("@cucumber/cucumber");
const assert = require('assert');
const game = require('../js/game.js');

const { Builder, By, Key } = require("selenium-webdriver");

const driver = new Builder().forBrowser('firefox').build();

Given('There is a state for cross win', {timeout: 100000}, async () => {
    await driver.get('http://127.0.0.1:5500/views/index.html');
    await driver.executeScript("placeCross($('#field1'))");
    await driver.executeScript("placeCross($('#field2'))");
    await driver.executeScript("placeCross($('#field3'))");
});

let previous_player;
When('Turn end', async () => {
    previous_player = driver.executeScript("return currentPlayer");
    await driver.executeScript("turnEnd()");
});

Then('Cross wins, new game starts', async ()=> {
    await driver.executeScript("turnEnd()");
    await driver.findElement(By.id("winner")).getAttribute('innerHTML').then(res => {
        assert.equal(res, '<p>Cross is winner!</p>');
    });
});



Given('There is a state for draw at the field', {timeout: 100000}, async () => {
    await driver.get('http://127.0.0.1:5500/views/index.html');
    await driver.executeScript("placeCross($('#field2'))");
    await driver.executeScript("placeZero($('#field1'))");
    await driver.executeScript("placeCross($('#field4'))");
    await driver.executeScript("placeZero($('#field3'))");
    await driver.executeScript("placeCross($('#field5'))");
    await driver.executeScript("placeZero($('#field6'))");
    await driver.executeScript("placeCross($('#field9'))");
    await driver.executeScript("placeZero($('#field8'))");
    await driver.executeScript("placeCross($('#field7'))");
});


Then('Result is draw, new game starts', async () => {
    await driver.executeScript("turnEnd()");
    await driver.findElement(By.id("winner")).getAttribute('innerHTML').then(res => {
        assert.equal(res, '<p>Draw!</p>');
    });
});


Given('Field is not in a decisive state', {timeout: 100000}, async () => {
    await driver.get('http://127.0.0.1:5500/views/index.html');
});

Then('Change turn', async () => {
    assert.notEqual(previous_player, game.currentPlayer)    
});

AfterAll(() => {
    driver.close();
})