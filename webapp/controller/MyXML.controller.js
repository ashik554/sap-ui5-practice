sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict';

  return Controller.extend('chip.controller.', {
    onInit: function () {
      this.oView = this.getView();
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
      this.oView.byId('IdEmpName').setValue('Ashik');
      this.oView.byId('IdEmpSal').setValue('9500');
      this.oView.byId('idCurr').setValue('USD');
    },
  });
});
