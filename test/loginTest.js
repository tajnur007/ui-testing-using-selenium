const { Builder, By, Key } = require('selenium-webdriver');
require('chromedriver');
const assert = require('assert');
const should = require('chai').should();


/**
 * Function definations
 */
async function loginTest() {
  const driver = new Builder().forBrowser('chrome').build();
  await driver.get('https://codeforces.com/enter?back=%2F');

  // Enter email, wrong password and try to login
  await driver.findElement(By.id('handleOrEmail')).sendKeys('tajnur007@gmail.com');
  await driver.findElement(By.id('password')).sendKeys('123456', Key.RETURN);

  await driver.quit();
}


/**
 * Function calls
 */
describe('Codeforces Login Page Testing...', function() {
  it('Login test', async function() {
    await loginTest();
  });
});
