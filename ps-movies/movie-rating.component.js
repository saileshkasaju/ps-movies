(function() {
	"use strict";

	var module = angular.module("psMovies");

	module.component("movieRating", {
		templateUrl: "ps-movies/movie-rating.component.html",
		bindings: {
			value: "<",
			max: "<"
		},
		controllerAs: "model",
		controller: function() {
			var model = this;

			model.$onInit = function() {
				model.entries = new Array(model.max);
			};

			model.$onChanges = function() {
				model.entries = new Array(model.max);
			};
		}
	});
}());