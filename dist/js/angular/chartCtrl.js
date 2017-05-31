 (function(angular){

    'use strict';


        angular.module('myApp')


                .config(function($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/chart');

                $stateProvider

                    .state('bar', {
                        url: '/bar.chart',
                        templateUrl: 'views/bar.chart.html',
                        controller: 'chartCtrl'
                    })

                    .state('line', {
                        url: '/line.chart',
                        templateUrl: 'views/line.chart.html' ,
                        controller: 'chartCtrl'   
                    });

                    
        })

        .controller('chartCtrl', ChartController);

            ChartController.$inject= ['$scope','fireService','$firebaseArray','$firebaseObject','$timeout'];

            function ChartController($scope,fireService,$firebaseArray,$firebaseObject,$timeout){
                var ref_list = fireService.firebaseArray_url();
                    $scope.information = $firebaseArray(ref_list);

                    var list = $scope.information;

        $timeout(function() { 
            $scope.Female = list.filter(function (e) {
                return e.gender.toUpperCase() =="FEMALE";
            });

            $scope.Male = list.filter(function (e) {
                return e.gender.toUpperCase() =="MALE";
            });

            $scope.Other = list.filter(function (e) {
                return e.gender.toUpperCase() =="OTHER";
            });
            console.log($scope.Male.length + " " + $scope.Female.length + " " +$scope.Other.length);
                    var sum = $scope.Male.length + $scope.Female.length + $scope.Other.length;
                    $scope.barlabels = ['Male','Female','Other'];
                    $scope.bardata = [Math.round(($scope.Male.length /sum)*100), Math.round(($scope.Female.length /sum)*100), Math.round(($scope.Other.length /sum)*100)]
        }, 2000);

          $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
          $scope.series = ['Series A'];

          $scope.data = 
            [65, 59, 80, 81, 56, 55, 40];
          $scope.options = {
            legend: {display: true,
                position: 'bottom'
             },
            showLines: true,
            
            // How to disable fill?!?
            elements: {
                line: {
                        fill: false
                }
            },
            scales: {
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 10,
                                stepValue: 0,
                                max: 100,
                            }
                        }]
                },
                title: {
                    display: true,
                    text: 'Chart.js Line Chart - Legend'
                }
          };
            };


 })(window.angular);