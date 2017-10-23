module.exports = {
//  'Yandex mail fail enter' : function (browser) {
//    browser
//      .url('https://mail.yandex.by')
//      .waitForElementVisible('body', 1000)
//      .setValue('input[name=login]', 'nightwatch')
//      .setValue('input[type=password]', 'pass123')
//      .click('button[type=submit]')
//      .pause(1000)
//      .assert.elementPresent('.passport-Domik-Form-Error_active')
//      .end();
//  },

  'Yandex mail success enter' : function (browser) {
      browser
        .url('https://mail.yandex.by')
        .waitForElementVisible('body', 1000)
        .setValue('input[name=login]', 'ola-shola')
        .setValue('input[type=password]', 'xhola_sholax')
        .pause(2000)
        .click('button[type=submit]')
        .pause(4000)
        .assert.elementPresent('.mail-User-Name')
        .end();
    }
};