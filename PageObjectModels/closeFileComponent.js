'use strict';

class closeFile {
    clickCloseFile() {
        return browser.waitForAngular().then(function () {
            return element(by.xpath('//*[@id="record-file-close"]/button/i')).click();
        });
};

verifyCloseFile() {
    return browser.waitForAngular().then(function () {
        return element(by.id('no-record-open')).isDisplayed();
    });
};

};

module.exports = closeFile;