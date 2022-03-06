sap.ui.jsview('chip.view.Main', {
  getControllerName: function () {
    return 'chip.controller.Main';
  },

  createContent: function (oController) {
    // syntax // var oControlName = new libraryName.className(sId,sProperties), here sId = id of control and sProperties = json which can pass with the properties, events...
    var oInp = new sap.m.Input('idInp');
    //oInp.placeAt('canvas');
    var oBtn = new sap.m.Button('idBtn', {
      text: 'Shoot',
      icon: 'sap-icon://camera',
      // press: function () {
      //   // step:1 get the application object (instance)
      //   var oCore = sap.ui.getCore();
      //   // step:2 obtain the ui5 control object _sap.ui.getCore().byId('idInp')
      //   var oInp = oCore.byId('idInp');
      //   // step:3 we have a value , so we can use now setter and getter function for the same value
      //   var sVal = oInp.getValue();
      //   // step:4 print on screen
      //   alert(sVal);
      //   // alert('Hi!This is my button');
      // },
    });
    //oBtn.placeAt('content');

    // using the attach function
    var oBtn2 = new sap.m.Button({
      text: 'Attach',
      press: oController.spiderman,
    });
    //oBtn2.placeAt('next');
    return [oInp, oBtn, oBtn2];
  },
});
