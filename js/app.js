
var appController = angular.module('vagalumetwitter', []);


	appController.controller('twitterctrl', ['$scope','$http', function($scope, $http){
		
		$scope.msgInitial = 'TWITTER @VAGALUME';

		 $scope.showMe = false;
    	 $scope.myFunc = function() {
      	  $scope.showMe = !$scope.showMe;
			    };



		$http.get("lib/files/timeline.json").success(function(datafile){
			$scope.list = datafile;
		}).error(function(datafile){
			$scope.msgWarning ="Estamos Com Um Problema "+datafile;
		});
	}]);
