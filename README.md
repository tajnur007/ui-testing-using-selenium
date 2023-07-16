# ui-testing-using-selenium
This repository serves as a dedicated space for practicing and improving UI testing skills using <strong>Selenium WebDriver</strong>. It provides a simple starting point for individuals who want to dive into UI testing and gain hands-on experience with Selenium WebDriver.

## Key Features and Purpose:
  - **Learning UI Testing:** The primary goal of this repository is to facilitate learning and skill development in UI testing. By leveraging Selenium WebDriver, you can gain practical knowledge of automating tests on web applications' user interfaces.
  - **Hands-on Practice:** This repository encourages hands-on practice by providing a pre-configured setup for UI testing with Selenium WebDriver. It offers a foundation for writing and executing UI test scripts, allowing you to practice test automation techniques specific to the user interface.
  - **Test Case Development:** This repository emphasizes the creation and execution of test cases that target different UI elements, interactions, and scenarios. It encourages you to explore various functionalities of Selenium WebDriver, such as locating elements, interacting with forms, validating UI behavior, and handling user inputs.
  - **Test Framework Exploration:** As you progress, you can extend the repository to include test frameworks such as Mocha or Mochawesome. These frameworks enable better test organization, test suite creation, test execution, and reporting capabilities, providing a more comprehensive testing solution.
  - **Collaboration and Community Engagement:** This repository is open for collaboration, allowing others to contribute, provide feedback, and share their own UI testing practices. It serves as a platform for knowledge exchange, fostering a community of UI testing enthusiasts and practitioners. Checkout <a href="#contributingGuide">Contributing Guide</a>
  - **Documentation and Resources:** The repository includes documentation and resources to support your learning journey. This includes guidance on setting up the development environment, usage instructions for running tests, and best practices for writing effective UI test scripts using Selenium WebDriver.


## Project Setup
Open your terminal/command prompt where you want to setup this project. Create a directory using command `mkdir ui-testing-using-selenium`, navigate to the directory using command `cd ui-testing-using-selenium`. Now initialize your project setup using command `npm init -y`, this command will create a `package.json` file with some default configuration, if you want to add manually then skip the `-y` flag.

Now we will install `selenium-webdriver` and `chromedriver` into our project, run `npm install selenium-webdriver chromedriver`. I'm using Google Chrome browser for testing, if you want to use Firefox or Safari then install `geckodriver` or `safaridriver` respectively instead of `chromedriver`. Now we have finished our project setup.

## First Test (Login testing)
At first, we will create a folder `test` into project's root folder. We will put our test files into this `test` folder. We are going to test a simple login attempt with wrong credentials. Here I'm choosing the [**Codeforces**](https://codeforces.com/enter) login page to test. Let's see the code snippet below: 

_codeforcesLoginPage.js_
```javascript
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
````

What we did in the upper code block? First we imported **Builder**, **By** and **Key** from `selenium-webdriver` and also imported the `chromedriver`. Now we have defined a async function named as `loginTest()`. In the `loginTest()` function, we oppened our chrome browser by using `new Builder().forBrowser('chrome').build();` command and stored it into a constant variable `driver`. Now we will navigate to the Codeforces login page. To do so, later we called `get()` method with the login page url. As we need time to navigate in the page, we used `await` keyword, this will help us working as synchronously.

There have two input fields for inserting Handle/Email and Password in the login page. We are going to point these two input fields using their id by the help of `findElement()` method and sending the values using `sendKeys()` method. Here the `Key.RETURN` command will submit the form. I gave a wrong password for testing an invalid login attempt. You can also test a successfull login using a correct credential. At last, we closed our chrome browser after 3 seconds.

Now, save the codes, open your editor's terminal and run `node test/codeforcesLoginPage.js` this command. If everything is fine then I hope you will see the behaviour I have described above. 


<div id="contributingGuide"></div>

## Contribution Guideline 
I want to make contributing to this project as easy and transparent as possible. I will do my best to keep `main` branch in good shape. I actively welcome your pull requests: 
**Documentation and Resources:**public bugs. Or you can send me an email to <a href="mailto:tajnur007@gmail.com">tajnur007@gmail.com</a> regarding an issue.
