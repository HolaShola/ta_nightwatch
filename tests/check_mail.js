module.exports = {
  'check the mail' : function (browser) {
    browser
      .url('https://mail.ru/')
      .waitForElementVisible('body', 1000)
      .setValue('input[name="login"]', 'hola-shola')
      .setValue('input[name="password"]', 'x123holasholaxx')
      .click('input[type=submit]')
      .pause(1000)
      .useXpath()
      .click('(//a[@data-subject])[1]')
      .useCss()
      .pause(1000)
      .assert.elementPresent('div.b-letter__head__addrs__from>span')
      .assert.containsText('div.b-letter__head__addrs__from>span', 'hola-shola@mail.ru')
      .pause(1000)
      .end();
  }
};
