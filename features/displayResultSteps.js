const { Given, When, Then, AfterAll } = require("@cucumber/cucumber");
const assert = require('assert');
const { Builder, By, Key } = require("selenium-webdriver");

const driver = new Builder().forBrowser('firefox').build();

Given("Page is open", { timeout: 10000 }, async () => {
    await driver.get('http://127.0.0.1:5500/views/index.html');
});

When("Needs to show Cross win", async () => {
    await driver.executeScript("displayResult(STATE.CROSS)");
})

When("Needs to show Zero win", async () => {
    await driver.executeScript("displayResult(STATE.ZERO)");
})

When("Needs to show Draw", async () => {
    await driver.executeScript("displayResult(STATE.DRAW)");
})

When("Incorrect state presented", async () => {
    await driver.executeScript("displayResult(10000)");
})

Then("Cross win is displayed", async () => {
    await driver.findElement(By.id("winner")).getText().then(res => {
        assert.equal(res, "Cross is winner!");
    })
})

Then("Zero win is displayed", async () => {
    await driver.findElement(By.id("winner")).getText().then(res => {
        assert.equal(res, "Zero is winner!");
    })
})

Then("Draw is displayed", async () => {
    await driver.findElement(By.id("winner")).getText().then(res => {
        assert.equal(res, "Draw!");
    })
})

Then("Error is displayed", async () => {
    await driver.findElement(By.id("winner")).getText().then(res => {
        assert.equal(res, "Incorrect state");
    })
})

AfterAll(() => {
    driver.close();
})