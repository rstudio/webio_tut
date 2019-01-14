var assert = require('assert')

describe('Login Page', function() {

  it('should let you log in', function() {

    this.timeout(30000); //overkill ?? maybe
    browser.url('/');

    const menuTogglerElement = $('#menuToggler');
    const le2 = $('#userPanel > div > div.menu > a.menuItem.login');
    const formelement = $('body > div > div > div > form:nth-child(1) > button');
    const systemStatus = $('#navPanel > div.panelContents > div.navMenu > div:nth-child(5) > div > a.menuItem.status')
    const link = $('=#currentUser > div > div.menuItems > div > a:nth-child(1)');

    let pageUrl = "";

    menuTogglerElement.waitForVisible();

    if (menuTogglerElement.isVisible() || link.isVisible()) {
      if (link.isVisible() === true) {
        link.click();
      } else {
        menuTogglerElement.click();
        le2.waitForVisible();
        le2.click()
      }
    }

    formelement.waitForVisible();
    if(formelement.isVisible()) {
      browser.setValue('input[name="email"]', 'connect-qa+10000@rstudio.com');
      browser.setValue('input[name="password"]', 'rsctest99');
      browser.click('/html/body/div/div/div/form[1]/button');
    }
    else {
      //no idea what i want here right now, just a demo
    }

    systemStatus.waitForVisible();
    pageUrl= browser.getUrl();

    assert(pageUrl.indexOf('/projects') > -1);

  })
})

