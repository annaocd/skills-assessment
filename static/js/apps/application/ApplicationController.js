App.ApplicationController = Ember.ObjectController.extend({
	isModalShowing: false,
	isModalActive: false,

	actions: {
		showModal : function () {
			this.set('isModalActive', true);
			Ember.run.next(this, 'set', 'isModalShowing', true);
		},
		closeModal : function () {
			this.set('isModalShowing', false);

			Ember.run.later(this, function () {
				this.set('isModalActive', false);
			}, 300);
		},
	}
});
