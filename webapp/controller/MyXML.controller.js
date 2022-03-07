sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'chip/model/models'],
  function (Controller, Models) {
    'use strict';

    return Controller.extend('chip.controller.MyXML', {
      onInit: function () {
        this.oView = this.getView();
        // create our own reuse class to create modelobject
        var oModel = Models.createJSONModel();
        //3. Make the model available for the appliction
        sap.ui.getCore().setModel(oModel);
        // this get view is also work in this case but it works in the view lebel. IT COULD NOT WORK application level. that means if we want to use thie model another views we have to write it again. For this reason getCore() use is recommneded. that is for application level and we can acces it from any views without writing again and agan.

        // this.getView().setModel(oModel);
        //4.Binding syntax 3-4
        var oSalary = this.getView().byId('idEmpSal');
        oSalary.bindValue('/empStr/salary');
        var oCurr = this.getView().byId('idCurr');
        oCurr.bindProperty('value', '/empStr/currency');
      },
      onBtnClick: function () {
        // this is our controller function
        var oInp = this.getView().byId('idInp');
        alert(oInp.getValue());
      },
      onReload: function () {
        // get the view object from the controller object
        // set the value because there is value property
        this.oView.byId('idEmpId').setValue('100');
        this.oView.byId('idEmpName').setValue('Ashik');
        this.oView.byId('idEmpSal').setValue('9500');
        this.oView.byId('idCurr').setValue('USD');
      },
    });
  }
);
