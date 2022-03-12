sap.ui.define(
  [
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/xml/XMLModel',
    'sap/ui/model/resource/ResourceModel',
  ],
  function (JSONModel, XMLModel, ResourceModel) {
    'use strict';

    return {
      createJSONModel: function (sFile) {
        //1. create a model object
        var oModel = new JSONModel();

        // 2. set or load the model here
        oModel.loadData(sFile);
        return oModel;
      },
      cerateXMLModel: function (sFile) {
        var oModel = new XMLModel();

        oModel.loadData(sFile);
        return oModel;
      },
      createResourceModel: function () {
        var oModel = new ResourceModel({
          bundleUrl: 'i18n/i18n.properties',
        });
        return oModel;
      },
    };
  }
);
