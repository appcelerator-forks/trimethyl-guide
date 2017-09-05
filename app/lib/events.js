
function authHandler(e) {
	Ti.API.debug('Auth: ', e);
	Flow.close();
	Router.go("/movies");
}

Auth.event('success', authHandler);
Auth.event('error', authHandler);
