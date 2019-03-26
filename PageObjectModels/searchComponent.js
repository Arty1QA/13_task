'use strict';

class Search {

    clickSearchIcon() {
        return browser.waitForAngular().then(function () {
            return element(by.className('fa fa-lg fa-search')).click();
        })
    };

    setFileNumber(number) {
        return browser.waitForAngular().then(function () {
            return element(by.id('fileNumber')).sendKeys(number);
        })
    };

    clickSearchButton() {
        return browser.waitForAngular().then(function () {
            return element(by.id('irSearchButton')).click();
        })
    };

    verifyFileTreeName() {

        return browser.waitForAngular().then(function () {
            return element(by.className('tree-file-name ng-binding')).isDisplayed();
        })
    };
};

module.exports = Search;
