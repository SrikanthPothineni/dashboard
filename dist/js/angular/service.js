(function(angular){

	'use strict';


        angular.module('myApp')

        .service('fireService', FireService);

        	FireService.$inject=['firebase'];


            function FireService(firebase)  {

            			this.getFirebaseDb=function getFirebaseDb(){
							var config = {
								apiKey: "AIzaSyBsEMoUxXx2TDHwehEmTpWJ6CTzIKlGdSU",
							    authDomain: "parking-1e126.firebaseapp.com",
							    databaseURL: "https://parking-1e126.firebaseio.com",
							    projectId: "parking-1e126",
							    storageBucket: "parking-1e126.appspot.com",
							    messagingSenderId: "440072290487"
							};

							firebase.initializeApp(config);
						};

						this.getFirebaseDb();


						this.firebaseArray_url=function() {
							var ref = firebase.database().ref().child('personal/mostafiz');
							return ref;
						};

						this.firebaseObject_url=function(id) {
							var ref = firebase.database().ref().child('personal/mostafiz/'+id);
							return ref;
						};

             };

                

 })(window.angular);