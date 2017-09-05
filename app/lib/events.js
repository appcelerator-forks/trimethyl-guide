
function authHandler(e) {
	Logger.debug('Auth: ', e);
	Flow.close();
	Router.go("/movies");
}

Auth.event('success', authHandler);
Auth.event('error', authHandler);
