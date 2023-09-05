import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {
   // this locators for rahul shetty academy 
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }
    get TandC(){
       return $("#terms");
    }

    get btnSubmit () {
        return $('#signInBtn');
    }
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.TandC.click();
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('loginpagePractise/');
    }

    // ***** this locators for rmg server online shopping application *******

    get OSAurl(){
        return  browser.url("http://rmgtestingserver/domain/Online_Shopping_Application/index.php")
    }
    get OSAuserName(){
        return $('#exampleInputEmail1')
    }
    get OSApass(){
        return $('#exampleInputPassword1')
    }
    get OSAloginBtn(){
        return $("//button[.='Login']")
    }
    
    async OSAloginToApp(un,pwd){
        await browser.maximizeWindow()
        await this.OSAuserName.setValue(un)
        await this.OSApass.setValue(pwd)
        await this.OSAloginBtn.click()
    }






  
}

export default new LoginPage();
