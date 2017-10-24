module.exports = {
  'mail.ru success enter' : function (browser) {
    browser
     .url('https://mail.ru/')
     .waitForElementVisible('body', 1000)
     .setValue('input[name="login"]', 'hola-shola')
     .setValue('input[name="password"]', 'x123holasholaxx')
     .click('input[type=submit]')
     .pause(8000)
     .assert.containsText("span #PH_user-email", "hola-shola@mail.ru")
     .end();
  }
};