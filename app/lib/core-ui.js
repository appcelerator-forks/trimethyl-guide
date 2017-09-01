exports.TabGroup = null;

exports.createWindow = function(args) {
	var $this = UIFactory.createWindow(args);

	// Add the Facebook proxy
	if (OS_ANDROID) {
		$this.fbProxy = FB.createActivityWorker({ lifecycleContainer: $this });
	}

	$this.setCustomTitle = function(lbl) {
		if (OS_IOS) { $this.titleControl = null; }
		$this.setTitle(lbl);
	};

	if (!_.isEmpty(args.title)) {
		$this.setCustomTitle(args.title);
	}

	var events = {};

};

exports.createImageButton = function(args) {
	var $this = Ti.UI[ 'create' + (OS_IOS ? 'Button' : 'ImageView') ](args);

	if (OS_ANDROID) {
		$this.addEventListener('touchstart', function() { $this.opacity = 0.75; });
		$this.addEventListener('touchend', function() { $this.opacity = 1; });
	}

	return $this;
};