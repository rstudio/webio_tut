var assert = require('assert')

describe('Login Page google', function() {

  it('should let you log in via google auth', function() {

    this.timeout(24 * 60 * 60 * 1000); //overkill ?? maybe
    browser.url('/');

    const loginGoogle = $('#login-form-google > button');
    const menuTogglerElement = $('#menuToggler');
    const le2 = $('#userPanel > div > div.menu > a.menuItem.login');
    const formelement = $('body > div > div > div > form:nth-child(1) > button');
    //const systemStatus = $('#navPanel > div.panelContents > div.navMenu > div:nth-child(5) > div > a.menuItem.status')
    const link = $('=#currentUser > div > div.menuItems > div > a:nth-child(1)');

    //const accountPopup = $('=#.modalDialog');
    //const accountSelect = $('=#main > div:nth-child(4) > div > div > form > div.chunk.formSection > div.radioListBox.max5 > div:nth-child(1)');

    const google_user = 'dfaltyname@gmail.com';
    const google_password = 'Export_Bamboo';

    const googleChoose = $('#headingText');
    const googleFormHeader = $('#initialView > div.xkfVF > div.fctIrd > div > div.Fmgc2c');
    const googleEmailInputId = $('#identifierId');

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

    // TODO fix finding the google button
    formelement.waitForVisible();

    if(formelement.isVisible()) {
      //browser.setValue('input[name="email"]', 'connect-qa+10000@rstudio.com');
      //browser.setValue('input[name="password"]', 'rsctest99');
      loginGoogle.waitForVisible();
    }

    browser.debug();

    if (loginGoogle.isVisible()){
      loginGoogle.click();
    }

    googleChoose.waitForVisible();

    if (googleChoose.isVisible()) {
      googleChoose.click()
    }

    googleFormHeader.waitForVisible();

    // #identifierId sendtext - lookup how to


    //browser.debug();

    //browser.waitForExist('#initialView > div.xkfVF > div.fctIrd > div > div.Fmgc2c');
    var pageUrl = browser.getUrl();

    assert(browser.getUrl().indexOf('https://accounts.google.com/signin/oauth/identifier?client_id') > -1);



  })
})

