sap.ui.define(['sap/ui/core/mvc/Controller'],
	function(Controller) {
	"use strict";

	return Controller.extend("org.ubb.books.controller.NavBar", {

		handleNav: function(evt) {
			var navCon = this.byId("navCon");
			var target = evt.getSource().data("target");
			if (target) {
				navCon.to(this.byId(target));
			} else {
				navCon.back();
			}
		}
	});
});
