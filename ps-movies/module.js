(function() {
    "use strict";

    angular.module("psMovies", []);

    angular.module("psMovies").config(function ($locationProvider) {
    	$locationProvider.html5Mode(true);
    });
}());