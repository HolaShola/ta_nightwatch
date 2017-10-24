module.exports = {
//    'mail.ru fail enter' : function (browser) {
//        browser
//            .url('https://mail.ru/')
//            .waitForElementVisible('body', 1000)
//            .setValue('input[name="login"]', 'ola-shola')
//            .setValue('input[name="password"]', 'x123holasholaxx')
//            .click('input[type=submit]')
//            .pause(8000)
//            .assert.containsText("div[id='mailbox:error']", "Неверное имя или пароль")
//            .assert.containsText("div.b-login__errors", "Замечены подозрительные попытки входа в ваш почтовый ящик.")
//            .waitForElementVisible("div[id='view']", 3000)
//            .end();
//    },

//  'Yandex mail success enter' : function (browser) {
//      browser
//        .url('https://mail.yandex.by')
//        .waitForElementVisible('body', 1000)
//        .setValue('input[name=login]', 'hola-shola')
//        .setValue('input[type=password]', 'xhola_sholax')
//        .pause(2000)
//        .submitForm('form.new-auth-form')
//        .click('button[type=submit]')
//        .pause(12000)
//        .assert.elementPresent('.mail-User-Name')
//        .click('a[data-provider="gg"]')
//        .pause(7000)
//        .end();
//    }

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
     },

     'mail.ru success enter' : function (browser) {
        browser
          .url('https://mail.ru/')
          .waitForElementVisible('body', 1000)
          .setValue('input[name="login"]', 'hola-shola')
          .setValue('input[name="password"]', 'x123holasholaxx')
          .click('input[type=submit]')
          .pause(3000)
          .assert.containsText("span #PH_user-email", "hola-shola@mail.ru")
          .click(".b-toolbar__item>a")
          .setValue('textarea[tabindex="4"]', 'hola-shola@mail.ru')
          .setValue('body #tinymce', '123')
          .click('div[data-title="Отправить (Ctrl+Enter)"]')
          .pause(3000)
          .end();
      },

};