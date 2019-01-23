var assert = require('assert')

describe('Login Page google', function() {

  it('should let you log in via google auth', function() {

    this.timeout(24 * 60 * 60 * 1000); //overkill ?? maybe
    browser.url('/');

    const menuTogglerElement = $('#menuToggler');
    const le2 = $('#userPanel > div > div.menu > a.menuItem.login');
    const formelement = $('body > div > div > div > form:nth-child(1) > button');
    const systemStatus = $('#navPanel > div.panelContents > div.navMenu > div:nth-child(5) > div > a.menuItem.status')
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

    var name_field = $('#login_field');
    var password_field = $('#password');

    name_field.setValue('');
    password_field.setValue('');
    //browser.debug();
    sign_in_button = $('[name="commit"]');
    sign_in_button.click();

    var modal = $('.modalDialog');


    // todo : select account name. doable, just need to slow down and think it through
    var account = $('div.item:nth-child(1)');
    var account_button = $('.actions > button');
    // better than this
    // robbie mentioned cookies - maybe check there to see what we have available

    modal.waitForVisible(100000);

    if (modal.isVisible()) {

      console.log('modal');

      //browser.debug();

      account.waitForVisible(100000);
       if (account.isVisible()) {
         account.click();
       }
       account_button.click();

    }

    systemStatus.waitForVisible(100000);

    var pageUrl = browser.getUrl();
    assert(pageUrl.indexOf('/projects') > -1);
    //browser.debug();


  })
})

