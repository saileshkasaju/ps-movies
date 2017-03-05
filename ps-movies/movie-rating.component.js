(function() {
	"use strict";

	var module = angular.module("psMovies");

	module.component("movieRating", {
		templateUrl: "ps-movies/movie-rating.component.html",
		bindings: {
			value: "<"
		}
	});
}());