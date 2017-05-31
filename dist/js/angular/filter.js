(function(angular){

	'use strict';


        angular.module('myApp')


        .filter('startFrom',StartForm);

			function StartForm(){
				return function(data,start){
					return data.slice(start);
				}	
			} 

                

 })(window.angular);