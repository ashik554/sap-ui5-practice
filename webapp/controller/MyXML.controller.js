sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict';

  return Controller.extend('chip.controller.', {
    onInit: function () {},
    onBtnClick: function () {
      var oInp = this.getView().byId('idInp');
      alert(oInp.getValue());
    },
  });
});
