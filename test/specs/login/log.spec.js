var assert = require('assert')

describe('Login Page', function() {
  it('should let you log in', function() {
    browser.url('/');
	  // browser.url('/login');
	  // browser.setValue('input[name="email"]', 'valid@user.com');
	  // browser.setValue('input[name="password"]', 'hunter2');
    // browser.waitUntil(function () {
    //   return 1 === 1
    // }, 5000, 'expected text to be different after 5s');

    browser.click('//*[@id="currentUser"]/div/div[1]/div/a[1]');

    //browser.waitUntil(function ()  {browser.getUrl().split('?')[0].indexOf('/login') !== -1}, 5000, 'message')

    //
    //
    //
    browser.setValue('input[name="email"]', 'connect-qa+10000@rstudio.com');
    browser.setValue('input[name="password"]', 'rsctest99');
    //
    //
    //
    browser.click('/html/body/div/div/div/form[1]/button');
    //browser.waitForText()
    // var starttime = new Date().getTime();
    // browser.pause(3000);
    // var endtime = new Date().getTime();
    // console.log(endtime - starttime); //

    //browser.waitforInterval
    var pageUrl = browser.getUrl();
    console.log(pageUrl)
    //assert(pageUrl.indexOf('/projects') > -1);


  })
})

