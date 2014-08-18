App.ModalPopupComponent = Ember.Component.extend({
	classNames: ['modal-popup'],
	classNameBindings: ['isShowing:show'],

	close: 'closeModal',

	actions : {
		close : function () {
			this.sendAction('close');
		}
	}
});