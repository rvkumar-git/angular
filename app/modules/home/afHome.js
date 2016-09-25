var homeModule = angular.module("home", []);

homeModule.config(function ($stateProvider) {
		$stateProvider.state("home",{
			url:"/home",
			templateUrl: "home.html",
			controller: "homeCtrl"
		})
});