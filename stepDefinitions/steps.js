const Globals = require('../utilities/Globals');
const { Given, When, Then} = require('cucumber');
const Login = require('../pageObjectModels/loginComponent.js');
const Search = require('../pageObjectModels/searchComponent.js');
const Note = require('../pageObjectModels/noteComponent.js');
const CloseFile = require('../pageObjectModels/closeFileComponent.js');
const LogOut = require('../pageObjectModels/logOutComponent.js');
const globals = new Globals();
const expect = globals.expect;
const login = new Login();
const search = new Search();
const note = new Note();
const closeFile = new CloseFile();
const logOut = new LogOut();
const logger = require('../loggerConfig.js').logger;
const highlighter = require('../highlighter.js').highlighter;

Given('login to Web Client', function (callback) {
  logger.info('login to Web Client');
  login.get().then(callback);
});

When('I enter user Name', function (callback) {
  logger.info('I enter user Name');
  login.setName('Admin').then(callback);
});

When('I enter password', function (callback) {
	logger.info('I enter password');
  login.passwordInput('xxxxx').then(callback);
});

When('I logged in', function (callback) {
logger.info('I logged in');
  login.buttonClick().then(callback);

});

Then('WC is opened', function () {
logger.info('WC is opened');
  return expect(login.verifyUser()).to.eventually.equal('Admin');
  
});

Given('user clicks on Search Icon', function (callback) {
logger.info('user clicks on Search Icon');
  search.clickSearchIcon().then(callback);

});

When('user enter File Name', function (callback) {
logger.info('user enter File Name');
  search.setFileNumber('test').then(callback);
 
});

When('user clicks Search Button', function (callback) {
logger.info('user clicks Search Button');
  search.clickSearchButton().then(callback);
});

Then('File is opened', function () {
logger.info('File is opened');
  return expect(search.verifyFileTreeName()).to.eventually.equal(true);
  
});

When('user clicks on Add Note icon', function (callback) {
logger.info('user clicks on Add Note icon');
  note.clickNoteIcon().then(callback);
});

Then('note modal appears', function () {
logger.info('note modal appears');
  return expect(note.verifyNoteModal()).to.eventually.equal(true);
});

When('user clicks Cancel Button', function (callback) {
logger.info('user clicks Cancel Button');
  note.clickCancelButton().then(callback);
});

Then('note modal is closed', function () {
logger.info('note modal is closed');
  return expect(search.verifyFileTreeName()).to.eventually.equal(true);
});

When('user click close Button', function (callback) {
logger.info('user click close Button');
 closeFile.clickCloseFile().then(callback);
});

Then('modal is closed', function () {
logger.info('modal is closed');
  return expect(closeFile.verifyCloseFile()).to.eventually.equal(true);
});

When('user click Sign Out', function (callback) {
logger.info('user click Sign Out');
 logOut.clicklogOut().then(callback);
});

Then('user is signed out', function () {
logger.info('user is signed out');
  return expect(logOut.verifyLogOutUrl1()).to.eventually.equal(true);
return highlighter(alias);
});
