(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = [];

	function HomeFactory() {
		//the o.object representing the functions residing in HomeFactory and all data that 
		//is passed on to the Controller
		var o = {};
		//A color randomizer in DIRE need of improvement :)
o.colorChange = function() {
	if (Math.random() > .5) {
		document.getElementById("body").style.background = "blue";
	} else if 
	(Math.random() < .5) {
		document.getElementById("body").style.background = "red";
	}
}

return o;
}
})();