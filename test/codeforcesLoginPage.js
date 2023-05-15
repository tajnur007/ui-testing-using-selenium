const { Builder, By, Key } = require('selenium-webdriver');
require('chromedriver');
const assert = require('assert');
const should = require('chai').should();


/**
 * Function definations
 */
async function loginTest() {
  // Open chrome browser
  const driver = new Builder().forBrowser('chrome').build();

  // Navigate to the codeforces login page
  await driver.get('https://codeforces.com/enter?back=%2F');

  // Enter email, wrong password and try to login
  await driver.findElement(By.id('handleOrEmail')).sendKeys('tajnur007@gmail.com');
  await driver.findElement(By.id('password')).sendKeys('123456', Key.RETURN);

  // Quit browser after 3 seconds
  setTimeout(async () => {
    await driver.quit();
  }, 3000);
}

async function assertionTest() {
  const driver = new Builder().forBrowser('chrome').build();
  await driver.get('https://codeforces.com/enter?back=%2F');

  const emailText = await driver.findElement(By.xpath('//*[@id="enterForm"]/table/tbody/tr[1]/td[1]')).getText();
  const passText = await driver.findElement(By.xpath('//*[@id="enterForm"]/table/tbody/tr[2]/td[1]')).getText();

  // Node assertion test
  assert.strictEqual(emailText, 'Handle/Email');
  assert.strictEqual(passText, 'Password');

  // Chai assertion test
  emailText.should.equal('Handle/Email');
  passText.should.equal('Password');

  await driver.quit();
}


/**
 * Function calls
 */
loginTest();
assertionTest();
