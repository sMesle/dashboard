const path = require('path')
const webdriver = require('selenium-webdriver')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const capabilities = {
  browserName: process.env.BROWSER_NAME,
  browser_version: process.env.BROWSER_VERSION,
  os: process.env.OS,
  os_version: process.env.OS_VERSION,
  resolution: process.env.RESOLUTION,
  'browserstack.user': process.env.USER,
  'browserstack.key': process.env.KEY,
  name: process.env.NAME
}

const driver = new webdriver.Builder()
  .usingServer('http://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities(capabilities)
  .build()

driver.get('https://nuxt-dashboard.netlify.app/').then(function () {
  driver.findElement(webdriver.By.className('v-toolbar__title')).then(function () {
    driver.findElement(webdriver.By.className('login')).click().then(function () {
      driver.findElement(webdriver.By.className('submit')).click().then(function () {
        driver.getCurrentUrl().then(function (url) {
        // eslint-disable-next-line no-console
          console.log(url)

          driver.findElement(webdriver.By.className('profile')).click().then(function () {
            driver.getCurrentUrl().then(function (url) {
              // eslint-disable-next-line no-console
              console.log(url)
            })
            const firstNameInput = driver.findElement(webdriver.By.id('firstName'))
            firstNameInput.sendKeys(webdriver.Key.CONTROL, 'a').then(function () {
              firstNameInput.sendKeys(webdriver.Key.DELETE).then(function () {
                firstNameInput.sendKeys('New-Name').then(function () {
                  driver.findElement(webdriver.By.className('editProfile')).click().then(function () {
                    driver.findElement(webdriver.By.className('signout')).click().then(function () {
                      driver.quit()
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})
