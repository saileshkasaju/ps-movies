/**
 * Created by Edge on 3/5/2017.
 */
(function() {
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieApp", {
        templateUrl: "ps-movies/movie-app.component.html",
        $routeConfig: [
            { path: "#/list", component: "movieList", name: "List" },
            { path: "#/about", component: "appAbout", name: "About" },
            { path: "#/**", redirectTo: ["List"] }

        ]
    })
}());