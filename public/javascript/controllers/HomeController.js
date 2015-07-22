(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);
//HomeFactory injected into HomeController for access of methods on that page
HomeController.$inject = ['HomeFactory'];
//HomeFactory method function passed in as a callback to HomeController so colorChange can be accessed and executed
//or any HomeFactory method we want
function HomeController(HomeFactory) {
	var vm = this;
	vm.title = 'Welcome to our App!';
//recieves user input from ng-click on Home.html and calls the colorChange function 
//via callback due to HomeFactory being passed in as a parameter to the overarching function HomeController
vm.changeCanvas = function() {
	HomeFactory.colorChange();
};
}
})();