App.ListRoute = Ember.Route.extend({
	model: function () {
		return {
			"date": "7/29/2014",
			"showings": [
				{
					"title": "guardians of the galaxy",
					"rating": "pg-13",
					"showtimes": ["3:00 pm", "3:30 pm", "7:15 pm", "7:45 pm"]
				}
			]
		}
	}
});
