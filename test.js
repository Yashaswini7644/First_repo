
const { Builder, By, Key, until } = require('selenium-webdriver');
async function runTest() {
let driver = await new Builder().forBrowser('chrome').build();
try {
await driver.get('https://www.google.com');
let searchBox = await driver.findElement(By.name('q'));
await searchBox.sendKeys('Selenium WebDriver', Key.RETURN);
await driver.wait(until.titleContains('Selenium WebDriver'), 10000);
console.log('Test Passed: Search results are displayed');
} catch (error) {
console.error('Test Failed:', error);
} finally {
await driver.quit(1000);
}
}
runTest();
