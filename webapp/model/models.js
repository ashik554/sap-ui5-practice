sap.ui.define(['sap/ui/model/json/JSONModel'], function (JSONModel) {
  'use strict';

  return {
    createJSONModel: function () {
      //1. create a model object
      var oModel = new JSONModel();

      // 2. set or load the model here
      oModel.loadData('model/mockdata/sample.json');
      return oModel;
    },
    cerateXMLMode: function () {},
  };
});
