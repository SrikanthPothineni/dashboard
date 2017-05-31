(function(angular){

	'use strict';


        angular.module('myApp')


        .controller('editCtrl', EditController);

        	EditController.$inject= ['$scope','fireService','$firebaseObject','$stateParams','$location','$timeout'];

            function EditController($scope,fireService,$firebaseObject,$stateParams,$location,$timeout) {
		   		
		   		var ref = fireService.firebaseObject_url($stateParams.id);

		   		$scope.editData = $firebaseObject(ref);


            	$scope.updateData=function(){
            			
		            	$scope.editData.$save({
						name: $scope.editData.name,
						gender: $scope.editData.gender,
						age: $scope.editData.age,
						education: $scope.editData.education,
						salary: $scope.editData.salary

					}).then(function(ref) {
				    		$scope.message="information successfully updated !!!!!!!";
				    		$scope.color="alert-info";				
					  		$timeout(function(){
				  			$scope.message="";
				  			$location.path('/home');
	    					},2000);

							}, function(error) {
							  console.log("Error:", error);
							});	
					
		        };

            };

                

 })(window.angular);