'use strict';

class Login {
    get() {
        browser.ignoreSynchronization = true; 
        return browser.get('https://web.client/') 
    }

    setName(user) {
        return element(by.name('UserName')).sendKeys(user)
    }

    passwordInput(password){
        return element(by.name('Password')).sendKeys(password)
        
    };

    buttonClick(){
        return element(by.className('loginBtn')).click().then(function() {
            return browser.ignoreSynchronization = false; 
        })
    }

    verifyUser(){
        return element(by.xpath('//*[@id="ir-user-config-button"]/span')).getText();
    }
}

module.exports = Login;





