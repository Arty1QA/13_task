'use strict';

const { After, Status } = require("cucumber");
const logger = require('../loggerConfig.js').logger;
  
  After(function (testCase) {
    if (testCase.result.status === Status.FAILED) {
        return browser.takeScreenshot().then((screenShot) => {
            let decodedImage = new Buffer(screenShot, 'base64');    
            return this.attach(decodedImage, 'image/png');
        });
    }
});