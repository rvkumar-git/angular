



mainModule.controller("mainCtrl", function($http,$q){
	function getProductList(){
		var deffered = $q.defer();

		$http({
			method: "GET",
			url: "http://api.angularfirst.com/productlist"
		}).success(function(response){
			deffered.resolve(response);
			console.log(response);
		}).error(function(error){
			deffered.reject(error);

			console.log(error);
		})

		return deffered.promise;
	}

	getProductList()
 })

