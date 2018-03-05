// A nightwatch test for full e2e testing

module.exports = {
  'default e2e tests': function(browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#app',5000)
      .assert.elementPresent('.form__submit-btn')
      .end()
  }
}
