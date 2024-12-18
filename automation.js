const { Builder, By, Key, until } = require('selenium-webdriver');
async function testLogin() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://gmail.com');
        let usernameField = await driver.findElement(By.id('identifierId')); 
        await usernameField.sendKeys('yashaswinispt@gmail.com', Key.RETURN); 
        await driver.wait(until.elementLocated(By.name('password')), 10000); 
        let passwordField = await driver.findElement(By.name('password')); 
        await passwordField.sendKeys('test_password', Key.RETURN);
        await driver.wait(until.titleContains('Gmail'), 60000); 
        await driver.wait(until.elementLocated(By.xpath("//a[contains(@href, 'inbox')]")), 10000); 
        console.log('Test Passed: User successfully logged in.');
    } catch (error) {
        console.error('Test Failed:', error);
    } finally {
        await driver.quit(); 
    }
}
testLogin();

