//import { Builder, Capabilities, By } from "selenium-webdriver"
const { Builder, Capabilities, By } = require('selenium-webdriver')

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await (await driver).quit()
})

test('Add a movie', async () => {
    let inputField = await driver.findElement(By.xpath('(//input)[1]'))

    await inputField.sendKeys("Shrek\nBambi\nStarWars\n")
    


    await driver.sleep(5000)
})

test('cross off a movie', async () => {
    //await driver.findElement(By.xpath('//span[text()= "Shrek"]')).click()
    const list = await driver.findElements(By.xpath('//span'))
    list.forEach(ele => ele.click())


    await driver.sleep(5000)
})

// /html/body/main/section/form/input