var Game = IgeClass.extend({
	classId: 'Game',

	init: function (App, options) {
		// Create the engine
		ige = new IgeEngine();
		ige.basePath = '../';

		if (!ige.isServer) {
			ige.client = new App();
		}

		if (ige.isServer) {
			ige.server = new App(options);
		}
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Game; } else { var game = new Game(Client); }