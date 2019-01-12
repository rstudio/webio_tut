var assert = require('assert')

describe('Login Page', function() {

  it('should let you log in', function() {

    this.timeout(300000);

    const menuTogglerElement = $('#menuToggler');
    const le2 = $('#userPanel > div > div.menu > a.menuItem.login');
    const link = $('#currentUser > div > div.menuItems > div > a:nth-child(1) > span');

    const formelement = $('body > div > div > div > form:nth-child(1) > button');

    let pageUrl = "";

    browser.url('/');
    menuTogglerElement.waitForVisible();

    if (link.isVisible()) {
      link.click();
    } else {
      menuTogglerElement.click();
      le2.waitForVisible();
      le2.click()
    }

    formelement.waitForVisible();

    if(formelement.isVisible()) {
      browser.setValue('input[name="email"]', 'connect-qa+10000@rstudio.com');
      browser.setValue('input[name="password"]', 'rsctest99');
      browser.click('/html/body/div/div/div/form[1]/button');
    }


    browser.waitForExist('//*[@id="headerTitle"]');
    pageUrl= browser.getUrl();
    assert(pageUrl.indexOf('/projects') > -1);

  })
})

