sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageToast',
	'sap/m/library'
], function (Controller, MessageToast, library) {
	"use strict";

	return Controller.extend("my.Test.controller.App", {

		onAvatarPressed: function () {
			// MessageToast.show("Avatar pressed!");
			window.open("https://www.linkedin.com/in/saddam-kazmi-363086115/", "_blank");
		},

		onInit: function () {

			//      1.Get the id of the VizFrame		
			var oVizFrame = this.getView().byId("idcolumn");

			//      2.Create a JSON Model and set the data
			var oModel = new sap.ui.model.json.JSONModel();
			var data = {
				'Percentage': [{
						"Technical_Skill": "ABAP",
						"Value": "90"
					}, {
						"Technical_Skill": "OO-ABAP",
						"Value": "90"
					}, {
						"Technical_Skill": "ABAP ON HANA",
						"Value": "80"
					}, {
						"Technical_Skill": "UI5/FIORI",
						"Value": "80"
					}, {
						"Technical_Skill": "CDS",
						"Value": "80"
					},

					{
						"Technical_Skill": "RAP",
						"Value": "80"
					}
				]
			};
			oModel.setData(data);

			//      3. Create Viz dataset to feed to the data to the graph
			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: 'Technical_Skill',
					value: "{Technical_Skill}"
				}],

				measures: [{
					name: 'Percentage',
					value: '{Value}'
				}],

				data: {
					path: "/Percentage"
				}
			});
			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);
			oVizFrame.setVizType('column');

			//      4.Set Viz properties
			oVizFrame.setVizProperties({
				plotArea: {
					colorPalette: d3.scale.category20().range()
				}
			});

			var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "valueAxis",
					'type': "Measure",
					'values': ["Percentage"]
				}),
				feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["Technical_Skill"]
				});
			oVizFrame.addFeed(feedValueAxis);
			oVizFrame.addFeed(feedCategoryAxis);

		}

	});
});