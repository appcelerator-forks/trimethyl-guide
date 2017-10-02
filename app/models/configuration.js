exports.definition = {

	config: {
		adapter: {
			type: 'api',
			name: 'tmdb/configuration'
		}
	},

	extendModel: function(Model) {
		_.extend(Model.prototype, {
			
			getImageBase: function(size, type) {
				var img = this.get('images');
				if (!img || img.length == 0) return;
				
				// getting sizes for the image type
				// and filtering them by the closest 
				// or return the latest in the list 
				return img.secure_base_url + _(img[type + "_sizes"]).filter(function(s) {
					// return true if the absolute value of the 
					// size - requested size is less than or equal to 20
					return Math.abs( parseInt( s.substr(1) ) - size ) <= 30;
				}).join() || img[type + "_sizes"][img[type + "_sizes"].length - 1];
			}

		}); 
		return Model; 
	},

	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {

			
		});
	}
};
