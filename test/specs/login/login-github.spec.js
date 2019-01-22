var assert = require('assert')

describe('Login Page google', function() {

  it('should let you log in via google auth', function() {

    this.timeout(24 * 60 * 60 * 1000); //overkill ?? maybe
    browser.url('/');

    const menuTogglerElement = $('#menuToggler');
    const le2 = $('#userPanel > div > div.menu > a.menuItem.login');
    const formelement = $('body > div > div > div > form:nth-child(1) > button');
    //const systemStatus = $('#navPanel > div.panelContents > div.navMenu > div:nth-child(5) > div > a.menuItem.status')
    const link = $('=#currentUser > div > div.menuItems > div > a:nth-child(1)');

    //const accountPopup = $('=#.modalDialog');
    //const accountSelect = $('=#main > div:nth-child(4) > div > div > form > div.chunk.formSection > div.radioListBox.max5 > div:nth-child(1)');
    const footerText = $('#copyright');

    const loginGithub = $('#login-form-github');

    //const google_user = 'dfaltyname@gmail.com';
    //const google_password = 'Export_Bamboo';


    const githubChoose = $('#headingText');
    //const googleFormHeader = $('#initialView > div.xkfVF > div.fctIrd > div > div.Fmgc2c');
    //const googleEmailInputId = $('#identifierId');

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
      footerText.waitForVisible();
    }

    loginGithub.waitForVisible(100000);

    if (loginGithub.isVisible()){
      var buttonclick = $('#login-form-github > button');
      buttonclick.click();
    }
    browser.debug();
    // googleFormHeader.waitForVisible(100000);
    // assert (googleFormHeader.isVisible());
    //
    // googleEmailInputId.waitForExist(100000);
    //
    // if (googleEmailInputId.isVisible()) {
    //   googleEmailInputId.setValue(google_user);
    // }
    //browser.debug();
    //browser.waitUntil(1000000);

    //var nextId = $('#identifierNext > div.ZFr60d.CeoRYc');
    //nextId.click();

    /*
        var passwordField = $('#password');

        if (passwordField.isVisible()){
          passwordField.setValue(google_password)
        }

        var nextPass = $('#passwordNext > div.ZFr60d.CeoRYc');
        nextPass.click();
     */
    //googleFormHeader.waitForVisible();

    // #identifierId sendtext - lookup how to


    //browser.debug();

    //browser.waitForExist('#initialView > div.xkfVF > div.fctIrd > div > div.Fmgc2c');
    //var pageUrl = browser.getUrl();
    //console.log(pageUrl);

    //assert(pageUrl.indexOf('https://accounts.google.com/signin/oauth/identifier?client_id') > -1);



  })
})

