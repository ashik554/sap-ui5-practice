sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict';

  return Controller.extend('chip.controller.Main', {
    oSuperman: sap.ui.getCore(),
    // this.getView() is used to get the corresponding view related to this controller and here this indicates the current class object. That means it indicates this class in which we write this.
    //Hooks methods
    onInit: function () {},
    onExit: function () {},
    onBeforeRendeing: function () {},
    onAfterRendeing: function () {},
    spiderman: function () {
      // get the object  of the button1
      var oBtnNew = this.oSuperman.byId('idBtn');
      // attach the button dynamically
      oBtnNew.attachPress(function () {
        // step:1 get the application object (instance)
        var oCore = this.oSuperman;
        // step:2 obtain the ui5 control object _sap.ui.getCore().byId('idInp')
        var oInp = oCore.byId('idInp');
        // step:3 we have a value , so we can use now setter and getter function for the same value
        var sVal = oInp.getValue();
        // step:4 print on screen
        alert(sVal);
      });
    },
  });
});
