module.exports = {
  'mail.ru success enter and send mail' : function (client) {
    client
      .url('https://mail.ru/')
      .waitForElementVisible('body', 1000)
      .setValue('input[name="login"]', 'hola-shola')
      .setValue('input[name="password"]', 'x123holasholaxx')
      .click('input[type=submit]')
      .pause(3000)
      .assert.containsText("span #PH_user-email", "hola-shola@mail.ru")
      .click(".b-toolbar__item>a")
      .setValue('textarea[tabindex="4"]', 'hola-shola@mail.ru')
      .pause(1000)
      .useXpath()
      .click("//div[@data-shortcut-title='Ctrl+Enter']")
      .useCss()
      .pause(1000)
      .click('div.is-compose-empty_in>form>div.popup__controls>button.confirm-ok')
      .acceptAlert()
      .pause(1000)
      .end();
  }
};