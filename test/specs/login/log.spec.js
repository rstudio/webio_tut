var assert = require('assert')

describe('Login Page', function() {

  it('should let you log in', function() {

    browser.url('/');
    browser.waitForExist('//*[@id="currentUser"]/div/div[1]/div/a[1]/span');
    browser.click('//*[@id="currentUser"]/div/div[1]/div/a[1]');
    browser.setValue('input[name="email"]', 'connect-qa+10000@rstudio.com');
    browser.setValue('input[name="password"]', 'rsctest99');
    browser.click('/html/body/div/div/div/form[1]/button');

    browser.waitForExist('//*[@id="headerTitle"]');
    //console.log('ok');
    var pageUrl = browser.getUrl();

    console.log(pageUrl);
    //assert(pageUrl.indexOf('/projects') > -1);


  })
})

