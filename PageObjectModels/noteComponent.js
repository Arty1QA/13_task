'use strict';
const Search = require('../pageObjectModels/searchComponent.js');


class Note {
    clickNoteIcon() {
        return browser.waitForAngular().then(function () {
            return element(by.className('btn-action action-add-note ng-scope')).click();
        });
};

clickNoteButton() {
    return browser.waitForAngular().then(function () {
        return element(by.id('btnOk')).click();
    });
};

verifyNoteModal() {
    return browser.waitForAngular().then(function () {
        return element(by.id('btnCancel')).isDisplayed();
    });
};

clickCancelButton() {
    return browser.waitForAngular().then(function () {
        return element(by.id('btnCancel')).click();
    });
};

verifyFileTreeName() {

    return browser.waitForAngular().then(function () {
        return element(by.className('tree-file-name ng-binding')).isDisplayed();
    })
};

};

module.exports = Note;

