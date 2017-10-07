var args = arguments[0] || {};
var Movies = null;

Flow.setNavigationController($.movie, true);


// Init
function init() {
	Movies = Alloy.createCollection("movie");
	Movies.fetch({
		success: function() {
			$.list.setConfiguration(args.tmdb);
			$.list.setCollection(Movies.filter(function(movie) {
				return movie.get('poster_path');
			}));
		},
		error: function(err) {
			Logger.error(err);
		}
	});
}


init();