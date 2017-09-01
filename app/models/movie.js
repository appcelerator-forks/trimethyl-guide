exports.definition = {

	config: {
		adapter: {
			type: 'api',
			name: 'movies'
		}
	},

	extendModel: function(Model) {
		_.extend(Model.prototype, {
			

		}); 
		return Model; 
	},

	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {

			
		});
	}
};
