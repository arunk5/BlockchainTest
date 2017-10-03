sap.ui.controller("blockchaintest.View1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf blockchaintest.View1
*/
	onInit: function() {

		var oModel = new sap.ui.model.odata.ODataModel("proxy/http/10.2.1.124:8001/sap/opu/odata/SAP/ZSTUD_GRADE_CARD_SRV/");
		console.log(oModel);
		
		oModel.read("/StudentDetailsSet?$filter=IStudent eq '0500007789' and IProgStudy eq '50009335' and IAcYear eq '2012' and IAcSem eq '87-88'", {
			method : "GET",
			success : function(data) {
				
				alert(JSON.stringify(data));
			},
			error : function() {
                console.log("error");
			}
		});
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf blockchaintest.View1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf blockchaintest.View1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf blockchaintest.View1
*/
//	onExit: function() {
//
//	}

});