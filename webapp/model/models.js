sap.ui.define(['sap/ui/model/json/JSONModel'], function (JSONModel) {
  'use strict';

  return {
    createJSONModel: function (sFile) {
      //1. create a model object
      var oModel = new JSONModel();

      // 2. set or load the model here
      oModel.loadData(sFile);
      return oModel;
    },
    cerateXMLMode: function () {},
  };
});
