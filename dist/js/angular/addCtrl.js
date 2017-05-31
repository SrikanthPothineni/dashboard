(function(angular){

	'use strict';


        angular.module('myApp')


        .controller('addCtrl', AddController);

        	AddController.$inject= ['$scope','fireService','$firebaseArray','$location','$timeout'];

            function AddController($scope,fireService,$firebaseArray,$location,$timeout) {


            	var ref = fireService.firebaseArray_url();
            	console.log(ref);
		        var info = $firebaseArray(ref);

            	$scope.addData=function(){
		            info.$add({
						name: $scope.mostafiz.name,
						gender: $scope.mostafiz.gender,
						age: $scope.mostafiz.age,
						education: $scope.mostafiz.edu,
						salary: $scope.mostafiz.salary
					}).then(function(ref) {
			    					$scope.message="Information successfully added !!!!!!!";
			    					$scope.color="alert-success";
			    					$timeout(function(){
							  		$scope.add="";
							  		$location.path('/home');
			    					},2000);

							}, function(error) {
							  console.log("Error:", error);
							});	
		        };

            };

                

 })(window.angular);