App.ListController = Ember.ObjectController.extend({
	needs: ['application'],

	actions: {
		showModal : function () {
			this.controllerFor('application').send('showModal');
		}
	}
});
