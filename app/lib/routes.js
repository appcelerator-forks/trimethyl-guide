Router.on('/login', function() {
	Flow.open("index", {});	
});

/*Router.on('/logout', function() {
	Auth.logout();
	Router.go("login");
});

Router.on('/movies', function() {
	Flow.open("movie/list", {});
});

Router.on(/\/movies\/([^\/]+)\/?/, function(id) {
	Flow.open("movie/single", {
		id: id
	});
});*/