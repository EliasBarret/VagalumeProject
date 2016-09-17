(function(){

    var myApp = angular.module('vagalumetwitter', []);


    myApp.controller('twitterctrl', ['$scope','$http', function($scope, $http){
        $scope.message = 'TWITTER @VAGALUME';


        $http.get("lib/files/timeline.json").success(function(data){

            $scope.lista = data;

        });

    }]);



})();