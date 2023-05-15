const { Builder, By, Key } = require('selenium-webdriver');
require('chromedriver');
const assert = require('assert');
const should = require('chai').should();

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
describe('Codeforces Login Page Testing...', function() {
  it('Assertion test', async function() {
    await assertionTest();
  });
});
