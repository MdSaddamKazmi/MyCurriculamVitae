sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageToast',
	'sap/m/library',
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, library, Fragment) {
	"use strict";

	return Controller.extend("my.Test.controller.App", {

		onAvatarPressed: function () {
			// MessageToast.show("Avatar pressed!");
			window.open("https://www.linkedin.com/in/saddam-kazmi-363086115/", "_blank");
		},

		onDisplayCV: function (oEvent) {

			// 	this._Dialog = sap.ui.xmlfragment("my.Test.view.HelloDialog", this);
			// 	this._Dialog.open();

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail");

		},

		onChange: function (oEvent) {

			// 	this._Dialog = sap.ui.xmlfragment("my.Test.view.HelloDialog", this);
			// 	this._Dialog.open();

			var name = this.getView().byId("ObjectPageLayout").getSelectedSection();

		},

		// onClose: function () {
		// 	this._Dialog.close();
		// },

		onInit: function () {

			var oModel1 = new sap.ui.model.json.JSONModel({
				Skills: [{
						"Technical_Skill": "ABAP",
						"Value": "90"
					}, {
						"Technical_Skill": "OO_ABAP",
						"Value": "90"
					}, {
						"Technical_Skill": "WEBDYNPRO,
						"Value": "90"
					}, {
						"Technical_Skill": "ABAP ON HANA",
						"Value": "90"
					}, {
						"Technical_Skill": "CDS",
						"Value": "85"
					}, {
						"Technical_Skill": "FIORI/UI5",
						"Value": "90"
					},{
						"Technical_Skill": "BOPF",
						"Value": "80"
					},{
						"Technical_Skill": "RAP",
						"Value": "80"
					}

				]

			});

			this.getView().setModel(oModel1);

			// //      1.Get the id of the VizFrame		
			// var oVizFrame = this.getView().byId("idcolumn");

			// //      2.Create a JSON Model and set the data
			// var oModel = new sap.ui.model.json.JSONModel();
			// var data = {
			// 	'Percentage': [{
			// 			"Technical_Skill": "ABAP",
			// 			"Value": "90"
			// 		}, {
			// 			"Technical_Skill": "OO-ABAP",
			// 			"Value": "90"
			// 		}, {
			// 			"Technical_Skill": "ABAP ON HANA",
			// 			"Value": "80"
			// 		}, {
			// 			"Technical_Skill": "UI5/FIORI",
			// 			"Value": "80"
			// 		}, {
			// 			"Technical_Skill": "CDS",
			// 			"Value": "80"
			// 		},

			// 		{
			// 			"Technical_Skill": "RAP",
			// 			"Value": "80"
			// 		}
			// 	]
			// };
			// oModel.setData(data);

			// //      3. Create Viz dataset to feed to the data to the graph
			// var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			// 	dimensions: [{
			// 		name: 'Technical_Skill',
			// 		value: "{Technical_Skill}"
			// 	}],

			// 	measures: [{
			// 		name: 'Percentage',
			// 		value: '{Value}'
			// 	}],

			// 	data: {
			// 		path: "/Percentage"
			// 	}
			// });
			// oVizFrame.setDataset(oDataset);
			// oVizFrame.setModel(oModel);
			// oVizFrame.setVizType('column');

			// //      4.Set Viz properties
			// oVizFrame.setVizProperties({
			// 	plotArea: {
			// 		colorPalette: d3.scale.category20().range()
			// 	}
			// });

			// var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			// 		'uid': "valueAxis",
			// 		'type': "Measure",
			// 		'values': ["Percentage"]
			// 	}),
			// 	feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			// 		'uid': "categoryAxis",
			// 		'type': "Dimension",
			// 		'values': ["Technical_Skill"]
			// 	});
			// oVizFrame.addFeed(feedValueAxis);
			// oVizFrame.addFeed(feedCategoryAxis);

		}

	});
});
