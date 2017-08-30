var global = this;

////////////////////
// Load trimethyl //
////////////////////

var T = function(name) { return require('T/' + name); };
T('trimethyl');

////////////////////////////
// Load trimethyl modules //
////////////////////////////

var Auth = null;
var HTTP = null;
var App = T('app');
var Dialog = T('dialog');
var Event = T('event');
var Flow = T('flow');
var Logger = T('logger');
var Notifications = T('notifications');
var Q = T('ext/q');
var Router = T('router');
var Util = T('util');
var WebAlloy = T('weballoy');
var GA = T('ga');

// Perform preinit of database and directories
var Core = require('core');

WebAlloy.addHelper('RESOURCE_DIR', Util.getResourcesDirectory());
WebAlloy.addHelper('ASSETS_DIR', Util.getResourcesDirectory() + 'web/assets/');

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
Alloy.Globals.formWidth = Alloy.Globals.SCREEN_WIDTH - (Alloy.isTablet ? 24 * 2 : 0);
Alloy.Globals.formWrapWidth = (Alloy.Globals.formWidth / 2) - (12 * 2) - 0.5; // Subtract half point to avoid wrapping
Alloy.Globals.formToolWidth = (Alloy.Globals.formWidth / 2) - (19 * 2) - 0.5; // Subtract half point to avoid wrapping
Alloy.Globals.pocHeaderHeight = Alloy.isTablet ? (Alloy.Globals.SCREEN_WIDTH * 0.66) : Alloy.Globals.SCREEN_WIDTH;

//////////
// Core //
//////////

var UI = require('core-ui');

require('routes');

///////////////////
// Notifications //
///////////////////

Notifications.onReceived = function(e) {
	// Handle notifications
};
