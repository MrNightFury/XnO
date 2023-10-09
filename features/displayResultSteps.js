const { Given, When, Then, AfterAll } = require("@cucumber/cucumber");
const assert = require('assert');
const { Builder, By, Key } = require("selenium-webdriver");

const driver = new Builder().forBrowser('firefox').build();

Given("Page is open", { timeout: 100000 }, async () => {
    await driver.get('http://127.0.0.1:5500/views/index.html');
});

When("Needs to show Cross win", async () => {
    await driver.executeScript("displayResult(STATE.CROSS)");
})

Then("Cross win is displayed", async () => {
    await driver.findElement(By.id("winner")).getText().then(res => {
        assert.equal(res, "Cross is winner!");
    })
})

AfterAll(() => {
    driver.close();
})