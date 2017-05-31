 (function(angular){

    'use strict';


        angular.module('myApp')


                .config(function($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/home');

                $stateProvider

                    .state('home', {
                        url: '/home',
                        templateUrl: 'views/home.html',
                        controller: 'homeListCtrl'
                    })

                    .state('add', {
                        url: '/add',
                        templateUrl: 'views/add.html' ,
                        controller: 'addCtrl'   
                    })

                    .state('edit', {
                        url: '/edit/:id',
                        templateUrl: 'views/edit.html' ,
                        controller: 'editCtrl'   
                    })

                    .state('chart', {
                        url: '/chart',
                        templateUrl: 'views/chart.html' ,
                        controller: 'chartCtrl'     
                });
        });

 })(window.angular);

    