module.exports = {
  'mail.ru fail enter' : function (browser) {
    browser
        .url('https://mail.ru/')
        .waitForElementVisible('body', 1000)
        .setValue('input[name="login"]', 'ola-shola')
        .setValue('input[name="password"]', 'x123holasholaxx')
        .click('input[type=submit]')
        .pause(1000)
        .assert.containsText("div[id='mailbox:error']", "Неверное имя или пароль")
        //.assert.containsText("div.b-login__errors", "Замечены подозрительные попытки входа в ваш почтовый ящик.")
        .end();
  }
};