var assert = require('assert')

describe('Login Page', function() {

  it('should let you log in', function() {

      //this.timeout(300000);

        browser.url('/');
        const loginElement = $('#menuToggler');
        loginElement.waitForVisible();
        //console.log(loginElement.isVisible());
        loginElement.click();
        const le2 = $('#userPanel > div > div.menu > a.menuItem.login');
        le2.waitForVisible();
        le2.click()

        //const link = $('#currentUser > div > div.menuItems > div > a:nth-child(1) > span');
        //console.log(link.isVisible());

        //browser.click(link);


        //browser.click('//*[@id="currentUser"]/div/div[1]/div/a[1]');
        //browser.waitForExist('body > div > div > div > form:nth-child(1) > button');
        //var pageUrl = browser.getUrl();
        //console.log(pageUrl);
        // browser.waitForExist('//*[@id="currentUser"]/div/div[1]/div/a[1]');
        // browser.click('//*[@id="currentUser"]/div/div[1]/div/a[1]');
        //const formelement = $('body > div > div > div > form:nth-child(1) > button');
        //formelement.waitForVisible();
        //console.log(formelement.isVisible());
        // browser.setValue('input[name="email"]', 'connect-qa+10000@rstudio.com');
        // browser.setValue('input[name="password"]', 'rsctest99');
        // browser.click('/html/body/div/div/div/form[1]/button');
        //
        // browser.waitForExist('//*[@id="headerTitle"]');
        // //console.log('ok');
        // var pageUrl = browser.getUrl();
        //
        // console.log(pageUrl);
        // assert(pageUrl.indexOf('/projects') > -1);
  })
})

