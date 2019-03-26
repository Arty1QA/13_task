let highlightElement = (alias) => {
        let styleOptions = "color: Red; border: 2px solid red;";
        let webElement = getPageObjectElement(alias).getWebElement();
        return browser.executeScript("arguments[0].setAttribute('style', arguments[1]);", webElement, styleOptions).then(() => {
            return browser.wait(() => {
                return getPageObjectElement(alias).getCssValue('border').then((border) => {
                    return border.toString().indexOf('2px solid rgb(255,') > -1;
                });
            }, 5000, 'Style is not applied!');
        }, (error)=> {
            loggers.error('Error is: ' + error);
        });
    };

    module.exports = highlightElement;