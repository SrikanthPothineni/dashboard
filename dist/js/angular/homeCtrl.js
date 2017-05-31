(function(angular){

	'use strict';


        angular.module('myApp')

		.controller('homeListCtrl', HomeController);

        	HomeController.$inject= ['$scope','fireService','$firebaseArray','$firebaseObject','$timeout','$interval'];

            function HomeController($scope,fireService,$firebaseArray,$firebaseObject,$timeout,$interval) {


            		var ref_list = fireService.firebaseArray_url();
		            $scope.information = $firebaseArray(ref_list);

		            ////Pagination

		            		$scope.maxSize=3;
						  	$scope.currentPage=1;
						  	$scope.viewby = 5;
						  	$scope.itemsPerPage = $scope.viewby;
						    
						  	$scope.setItemsPerPage = function(num) {
						            $scope.itemsPerPage = num;
						            $scope.currentPage = 1; 
						            }       

	        				$scope.numItem = [3,5,10,15,20,25]; 
	        		////Pagination end

	        		
	        		$scope.deleteInfo= function(info){
						$scope.clickedUser=info;
						$scope.name = $scope.clickedUser.name;

					};

	        		$scope.removeInfo = function(id) {
				    var ref = fireService.firebaseObject_url(id);
				    var Delete = $firebaseObject(ref);
				    console.log(Delete);
				    Delete.$remove().then(function(ref) {							
				    		$scope.message="User successfully removed !!!!!!!";
				    		$scope.color="alert-danger";
							$timeout(function(){
				  			$scope.message="";
	    					},2000);

							}, function(error) {
							  console.log("Error:", error);
							});	
				   };


				   /// chart start

				   	  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
					  $scope.series = ['Series A', 'Series B'];
					  $scope.data = [
					    [65, 59, 80, 81, 56, 55, 40],
					    [28, 48, 40, 19, 86, 27, 90]
					  ];
					  $scope.onClick = function (points, evt) {
					    console.log(points, evt);
					  };
					  
					  // Simulate async data update
					  $timeout(function () {
					    $scope.data = [
					      [28, 48, 40, 19, 86, 27, 90],
					      [65, 59, 80, 81, 56, 55, 40]
					    ];
					  }, 2000);


					  // **********Timer************
					  $scope.interval = $interval(interval,1000);

							function interval () {

							$scope.now = new Date();
							$scope.end = new Date("Jan 01, 2018 12:00:00");

				      		var distance = $scope.end - $scope.now;
				      		$scope.days = Math.floor(distance / (1000 * 60 * 60 * 24));
						    $scope.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
						    $scope.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
						    $scope.seconds = Math.floor((distance % (1000 * 60)) / 1000);
						
						    if ( distance < 0) {

							$interval.cancel($scope.interval);

							$scope.days=0;
							$scope.hours=0;
							$scope.minutes=0;
							$scope.seconds=0;

							console.log("Timer Done !!!!!!!!")

							};

							}
		       

            };

                

 })(window.angular);