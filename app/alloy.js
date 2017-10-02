var global = this;

////////////////////
// Load trimethyl //
////////////////////

var T = function(name) { return require('T/' + name); };
T('trimethyl');

////////////////////////////
// Load trimethyl modules //
////////////////////////////

var Auth = T('auth');
var HTTP = T('http');
var App = T('app');
var Dialog = T('dialog');
var Event = T('event');
var Flow = T('flow');
var Logger = T('logger');
/*var Notifications = T('notifications');*/
var Q = T('ext/q');
var Router = T('router');
var Util = T('util');
var WebAlloy = T('weballoy');
var GA = T('ga');
var UIFactory = T('uifactory');
var FB = T('fb');

////////////////////////
// Load other modules //
////////////////////////
var Moment = require('alloy/moment');


///////////////////
// Alloy globals //
///////////////////

// Note: iOS versions earlier than 7 are not supported anymore
Alloy.Globals.navBarHeight = (OS_IOS || Alloy.isTablet) ? 64 : 56;
Alloy.Globals.statusBarHeight = 20;
Alloy.Globals.contentMargin = Alloy.isTablet ? 44 : 16;
Alloy.Globals.contentWidth = Alloy.Globals.SCREEN_WIDTH - (Alloy.isTablet ? Alloy.Globals.contentMargin * 2 : 0);

WebAlloy.addHelper('RESOURCE_DIR', Util.getResourcesDirectory());
WebAlloy.addHelper('ASSETS_DIR', Util.getResourcesDirectory() + 'web/assets/');

//////////
// Core //
//////////

// Perform preinit of database and directories
var Core = require('core');
var UI   = require('core-ui');

require('routes');
require('events');

/*///////////////////
// Notifications //
///////////////////

Notifications.onReceived = function(e) {
	// Handle notifications
	Core.notification = e;
	if (Core.canConsumeQueuedNotification()) Core.consumeQueuedNotification();
};

if(!Ti.App.Properties.hasProperty("notifications.enabled") || JSON.parse(Ti.App.Properties.getString("notifications.enabled")).default){
	Logger.info("Activating notifications");
	Notifications.activate();
}*/