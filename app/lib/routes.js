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
	});
});

Router.on(/\/movies\/([^\/]+)\/?/, function(id) {
	Flow.open("movie/single", {
		id: id
	});
});