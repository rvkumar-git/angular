var coreModule = angular.module("core",['ui.router']);

coreModule.config(function ($stateProvider,$urlRouterProvider) {
		$stateProvider.state("root",{
			url:"/root",
			templateUrl: "modules/core/core.html",
			controller: "coreCtrl"
		})
		$urlRouterProvider.otherwise("/root");
});