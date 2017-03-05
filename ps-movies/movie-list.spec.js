describe("The movieList component", function () {

	beforeEach(module("psMovies"));

	var moviesList;
	beforeEach(inject(function ($componentController) {
		movieList = $componentController("movieList", {
			$scope: {}
		});
	}));

	it("can be created", function () {
		expect(movieList).toBeDefined();
		expect(movieList.$onInit).toBeDefined();
	});
});