angular.module("vagalumetwitter").filter('datefun', function($filter){
	
		 return function(input){
		  	
		  
			var _date = $filter('date')(input,'medium');
		 	console.log(_date);

		 	return _date;
	 };
});