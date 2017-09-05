var args = arguments[0] || {};


//////////
// Open //
//////////

$.loginButton.addEventListener("click", function() {
	Auth.login({ driver: 'facebook' });
});