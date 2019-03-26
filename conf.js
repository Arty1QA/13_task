const logger = require('./loggerConfig.js').logger;


exports.config = {

	directConnect : true,
	framework : 'custom',
	frameworkPath : require.resolve('protractor-cucumber-framework'),

	capabilities : {
		browserName : 'chrome',
		chromeOptions : {
			args : [ "--window-size=800,600" ]
		}
	},

	specs : [ './features/*.feature' ],

	cucumberOpts : {
		require : [ './stepDefinitions/steps.js', './stepDefinitions/hooks.js' ],
		format: 'json:./reports/report.json',
		tags : '(@run)'
	},

	onPrepare : function() {
		logger.info('Maximizing browser window');
		browser.manage().window().setSize(1000, 800);

	},

	
};