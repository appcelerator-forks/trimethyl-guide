var args = arguments[0] || {};
var Movies = null;
var Config = null;

// populate
function populate() {
	UIUtil.populateListViewFromCollection(Movies, {
		datasetCb: getTemplateObject
	}, $.moviesList);
}

function getTemplateObject(model) {
	var ob = {
		poster: {
			image: Config.getImageBase(200, "poster") + model.get("poster_path")
		},
		title: {
			text: model.get("original_title")
		},
		rating: {
			text: "Rating: " + model.get("vote_average")
		},
		adult: {
			text: "Release date: " + model.get("release_date")
		},
		language:{
			text: "Language: " + model.get("original_language")
		},
		popularity: {
			text: "Popularity: " + model.get("popularity")
		},
		properties: {
			height: Ti.UI.SIZE,
			itemId: model.get("id"),
			selectionStyle: OS_IOS ? Ti.UI.iPhone.ListViewCellSelectionStyle.GREY : null,
			selectedBackgroundColor: Alloy.CFG.ui.color.white
		},
		template: "movie"
	};
	return ob;
}

// Public methods
$.setCollection = function(collection) {
	if (collection == null) return;

	Movies = Alloy.createCollection("movie", collection);
	populate();
}

$.setConfiguration = function(conf) {
	if (conf == null) {
		Core.getConfiguration()
		.then(function(fetchedConfiguration) {
			Config = fetchedConfiguration;
		});
	} else {
		Config = conf;
	}
}


// Event listeners

function listItemClicked(e) {
	if (e.itemId) Router.go("/movie/" + e.itemId);
};


