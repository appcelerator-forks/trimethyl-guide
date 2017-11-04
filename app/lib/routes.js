Router.on('/login', function() {
	Flow.openDirect("login", {});	
});

// Router.on('/logout', function() {
// 	Auth.logout();
// 	Router.go("login");
// });

Router.on('/movies', function() {
	Core.getConfiguration()
	.then(function(conf) {
		Flow.openDirect("movie", {tmdb: conf});
	})
	.catch(function() {
		alert("There has been an error while loading the server configuration");
	});
});

Router.on(/\/movies\/([^\/]+)\/?/, function(id) {
	Core.getConfiguration()
	.then(function(conf) {
		return Q.promise(function(resolve, reject) {
			var movie = Alloy.createModel("movie", {id: id});
			movie.fetch({
				success: function(m) {
					resolve([conf, movie]);
				},
				error: reject
			})
		});
	})
	.then(function(data) {
		Flow.open("movie/single", {
			id: id,
			tmdb: data[0],
			movie: data[1]
		});
	})
	.catch(function() {
		alert("There has been an error while loading the movie or the configuration");
	});
});