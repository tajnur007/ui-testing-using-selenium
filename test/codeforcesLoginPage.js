const { Builder, By, Key } = require('selenium-webdriver');
require('chromedriver');

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

loginTest();