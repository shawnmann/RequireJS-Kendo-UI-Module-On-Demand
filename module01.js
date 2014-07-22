// Create a RequireJS module
define([
	'kendo/kendo.menu.min'  // Require Kendo UI's menu file, because we load it in this module
], function (kendoMenu) {

	// Declare our initModule function variable
	var initModule;

	// A function we run when the module loads
	initModule = function () {
		// Do something so we know the module loaded
		console.log('MODULE01 LOADED');

		// Turn our menu markup into a Kendo UI menu
		$('#menu').kendoMenu();
	};

	// Expose our initModule as a public function
	return {
		initModule: initModule
	};
});