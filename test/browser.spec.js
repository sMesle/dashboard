const path = require('path')
const { Builder, By, until, Key } = require('selenium-webdriver')
require('selenium-webdriver/chrome')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const rootUrl = process.env.BASE_URL

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5

async function userInteract (driver) {
  try {
    const navHeader = await driver.wait(until.elementLocated(By.className('v-toolbar__title')), 10000)
    const txt = await navHeader.getText()
    const footerText = await driver.wait(until.elementLocated(By.css('footer>span')), 10000)
    const footerTxt = await footerText.getAttribute('textContent')

    // navbar test
    expect(txt).toEqual('Nuxt Dashboard')
    expect(footerTxt).toEqual('© 2020')

    // login
    const loginTab = await driver.wait(until.elementLocated(By.className('login')), 10000)
    await loginTab.click()
    const loginBtn = await driver.wait(until.elementLocated(By.className('submit')), 10000)
    await loginBtn.click()

    // is the dashboard page
    const capacity = await driver.wait(until.elementLocated(By.css('.headerText:first-of-type')), 10000)
    const capacityText = await capacity.getAttribute('textContent')
    expect(capacityText.trim()).toEqual('Capacity')

    // signout
    const signoutTab = await driver.wait(until.elementLocated(By.css('button.signout')), 10000)
    await signoutTab.click()

    // is the index page
    const h1 = await driver.wait(until.elementLocated(By.css('h1:first-of-type')), 10000)
    const h1Text = await h1.getAttribute('textContent')
    expect(h1Text.trim()).toEqual('Trial')
  } finally {}
}

async function profileInteract (driver) {
  try {
    // login
    const loginTab = await driver.wait(until.elementLocated(By.className('login')), 10000)
    await loginTab.click()
    const loginBtn = await driver.wait(until.elementLocated(By.className('submit')), 10000)
    await loginBtn.click()

    await driver.sleep(1000)

    // profile tab
    const profileTab = await driver.wait(until.elementLocated(By.className('profile')), 10000)
    await profileTab.click()
    await driver.sleep(1000)

    // edit profile
    await driver.findElement(By.id('firstName')).click()
    await driver.findElement(By.id('firstName')).sendKeys(Key.CONTROL, 'a')
    await driver.findElement(By.id('firstName')).sendKeys(Key.DELETE)
    await driver.findElement(By.id('firstName')).sendKeys('Tuğçe')

    await driver.findElement(By.css('.editProfile')).click()
    let name = await driver.findElement(By.css('[data-test="name"]')).getAttribute('textContent')
    name = name.trim().split(' ')
    expect(name[0]).toEqual('Tuğçe')
  } finally {}
}

describe('chrome', () => {
  let driver

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build()
    await driver.get(rootUrl)
  })

  afterAll(async () => await driver.quit())

  it('chrome', async () => {
    await userInteract(driver)
  })

  it('edit profile', async () => {
    await profileInteract(driver)
  })
})
