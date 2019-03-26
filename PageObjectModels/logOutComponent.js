'use strict';

class logOut {
    clicklogOut() {
        return browser.waitForAngular().then(function () {
            return element(by.className('ng-binding')).click().then(function () {
                return element(by.xpath('//*[@id="userSettings"]/ul/li[1]/a')).click().then(function () {
                    return browser.sleep(2000);
                });
            });
        });
};

    verifyLogOutUrl() {
        browser.ignoreSynchronization = true; 
        return browser.waitForAngular().then(function () {
            return element(by.className('logo')).isDisplayed();
        });
    };
};
module.exports = logOut;