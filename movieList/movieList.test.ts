// import { Builder, Capabilities, By } from "selenium-webdriver"

// const chromedriver = require('chromedriver')

// const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// beforeAll(async () => {
//     await driver.get('http://127.0.0.1:5500/movieList/index.html')
// })


// afterAll(async () => {
//     await driver.quit()
// })

// test('Add a movie', async () => {
//     let inputField = await driver.findElement(By.xpath('(//input)[1]'))

//     await inputField.sendKeys("A Knight's Tale\n")
//     await driver.sleep(4000)
//     await inputField.clear()
// })