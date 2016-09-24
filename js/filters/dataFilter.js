angular.module("vagalumetwitter").filter('datefun', function($filter){
	
		 return function(input){
		  	
		   if(angular.isDefined(input)){
           
           if(input.length >= 26){

                input = input.substring(8,10) + '/' + input.substring(5,7) + '/' + input.substring(0,4) + ' | ' + input.substring(11,19) +' Hr' ;
            }
        }
        return input;
	 };
});