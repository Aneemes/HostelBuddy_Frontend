const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");


Given("Test login functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  
  
  await driver.findElement(By.id("onclick")).click();
  await driver.findElement(By.id("name")).sendKeys("ragsad13@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("12345678");
  await driver.findElement(By.id("rememberMe")).click();
  await driver.sleep(delay);
  await driver.findElement(By.id("LOGIN")).click();

  await driver.quit();
});
Given("Test registration functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  await driver.findElement(By.id("Shopnow")).click();

  // await driver.findElement(By.id("name")).sendKeys("animesh212223");
  // await driver.findElement(By.id("email")).sendKeys("test1234592323@gmail.com");
  
  // await driver.findElement(By.id("password")).sendKeys("test12349");
  // await driver.findElement(By.id("cpassword")).sendKeys("test12349");
  // await driver.findElement(By.id("rememberMe")).click();
  // await driver.sleep(delay);
  // await driver.findElement(By.id("SignIn")).click();


  await driver.quit();
});

Given("Test Logout functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  //await driver.findElement(By.id("Contactus")).click();
 
 
  await driver.quit();
});