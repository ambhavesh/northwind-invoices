/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["zinvoices/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
