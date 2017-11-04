var args = arguments[0] || {};

var Movie = null;
var Config = null;

function populate() {
	Logger.debug(Movie);
	$.cover.image = Config.getImageBase(500, "poster") + Movie.get("poster_path");
	$.title.text = Movie.get('original_title');
	
	$.info.add(createRow("Original Language", [ Movie.get('original_language') ]));
	$.info.add(createRow("Release Date", [ Movie.get('release_date') ]));
	$.info.add(createRow("Popularity", [ Movie.get('popularity') ]));
	$.info.add(createRow("Genre", pickName(Movie.get('genres')) ));
	$.info.add(createRow("Production Company", pickName(Movie.get('production_companies')) ));
	$.info.add(createRow("Production Countries", pickName(Movie.get('production_countries')) ));
	$.info.add(createRow("Plot",[ Movie.get('overview')] ));
}

function pickName(data) {
	return _(data).map(function(row) { 
		return row.name || ""; 
	});
}

function createRow(label, data) {
	if (!data || data.length == 0) return;

	var row = $.UI.create("View", {
		classes: ["row"]
	})

	var Label = $.UI.create("Label", {
		classes: ["rowLabel"],
		text: label
	});

	var Values = _(data).map(function(value) {
		return $.UI.create("Label", {
			classes: ["rowValue"],
			width: data.length == 1 ? Ti.UI.FILL : "49.99%",
			text: value
		})
	});

	row.add(Label);
	_(Values).each(function(rowVal) {
		row.add(rowVal);
	})

	return row;
}

// Public methods
$.setModel = function(model) {
	if (model instanceof Backbone.Model) {
		Movie = model;
		return populate();
	}

	Movie = Alloy.createModel("movie", {id: args.id});
	Movie.fetch({
		success: populate,
		error: function() {
			alert("There has been an error while loading the movie information");
		}
	})
}

$.setConfiguration = function(conf) {
	if (conf != null) return Config = conf;

	Core.getConfiguration()
	.then(function(fetchedConfiguration) {
		Config = fetchedConfiguration;
	})
	.catch(function(e) {
		alert("There has been an error while loading the configuration");
	});
}

// init

function init() {
	$.setConfiguration(args.tmdb);
	$.setModel(args.movie);
}

init();	