
exports.notification = null;
exports.canConsumeUINotifications = false;

exports.canConsumeQueuedNotification = function() {
	if (exports.notification == null) return false;
};

exports.consumeQueuedNotification = function() {
	if (exports.notification == null) return;

	var notif = _.clone(exports.notification);
	exports.notification = null;

	Logger.debug(">>> Notification: ", notif);

	// App events are defined in events.
	
	if (notif.inBackground == false && notif.data.alert != null) Event.trigger('ui.message', { text: notif.data.title || notif.data.alert });
	else if(notif.data.data && notif.data.data.route != null) Router.go(notif.data.data.route);
	else if (notif.data.data && notif.data.data.external_link != null) Util.openHTTPLink(notif.data.data.external_link);

	Event.trigger("notifications.new", notif);
};