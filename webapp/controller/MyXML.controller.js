sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'chip/model/models'],
  function (Controller, Models) {
    'use strict';

    return Controller.extend('chip.controller.MyXML', {
      onInit: function () {
        this.oView = this.getView();
        // create our own reuse class to create modelobject
        var oModel = Models.createJSONModel('model/mockdata/sample.json');
        //oModel.setDefaultBindingMode('OneWay');
        //3. Make the model available for the appliction
        sap.ui.getCore().setModel(oModel);
        // this get view is also work in this case but it works in the view lebel. IT COULD NOT WORK application level. that means if we want to use thie model another views we have to write it again. For this reason getCore() use is recommneded. that is for application level and we can acces it from any views without writing again and agan.

        // this.getView().setModel(oModel);

        // create second model for JSON type
        var oModel2 = Models.createJSONModel('model/mockdata/dataset.json');
        sap.ui.getCore().setModel(oModel2, 'got');
        //4.Binding syntax 3-4
        var oSalary = this.getView().byId('idEmpSal');
        oSalary.bindValue('/empStr/salary');
        var oCurr = this.getView().byId('idCurr');
        oCurr.bindProperty('value', '/empStr/currency');
      },
      onBtnClick: function () {
        var oInp = this.getView().byId('idInp');
        alert(oInp.getValue());
      },
      onReload: function () {
        //1:GET THE MODELOBJECT
        var oModel = sap.ui.getCore().getModel();
        // 2 : change the data in the model
        var oData = oModel.getProperty('/empStr');

        console.log(oData);
        oModel.setProperty('/empStr/empName', 'Spiderman');

        // get the view object from the controller object
        // set the value because there is value property
        // this.oView.byId('idEmpId').setValue('100');
        // this.oView.byId('idEmpName').setValue('Ashik');
        // this.oView.byId('idEmpSal').setValue('9500');
        // this.oView.byId('idCurr').setValue('USD');
      },
      onShow: function () {
        //1:GET THE MODELOBJECT
        var oModel = sap.ui.getCore().getModel();
        // 2 : change the data in the model
        var oData = oModel.getProperty('/empStr');
        console.log(oData);
      },
    });
  }
);
