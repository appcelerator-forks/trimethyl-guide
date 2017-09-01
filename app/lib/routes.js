Router.on('/login', function() {
	Flow.open("index", {});	
});

// Router.on('/logout', function() {
// 	Auth.logout();
// 	Router.go("login");
// });

Router.on('/movies', function() {
	Flow.openDirect("movie", {});
});

Router.on(/\/movies\/([^\/]+)\/?/, function(id) {
	Flow.open("movie/single", {
		id: id
	});
});