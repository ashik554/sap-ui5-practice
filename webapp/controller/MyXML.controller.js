sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'chip/model/models', 'chip/util/lifeSaver'],
  function (Controller, Models, LifeSaver) {
    'use strict';

    return Controller.extend('chip.controller.MyXML', {
      formatter: LifeSaver,
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

        //
        var oModelResource = Models.createResourceModel();
        // here we need to give name
        sap.ui.getCore().setModel(oModelResource, 'i18n');

        // var oXmlModel = Models.cerateXMLModel('model/mockdata/mydemo.xml');
        // sap.ui.getCore().setModel(oXmlModel);
        //4.Binding syntax 3-4
        // var oSalary = this.getView().byId('idEmpSal');
        // oSalary.bindValue('/empStr/salary');
        // var oCurr = this.getView().byId('idCurr');
        // oCurr.bindProperty('value', '/empStr/currency');
      },
      onBtnClick: function () {
        var oInp = this.getView().byId('idInp');
        alert(oInp.getValue());
      },

      usingElementBinding: function (oEvent) {
        // to get the parameter the oEvent

        console.log(oEvent.getParameter('rowContext').getPath());

        //step1: what is the row was selected by the user
        var oRowContext = oEvent.getParameter('rowContext');
        //step2: Know the address of the element
        var sPath = oRowContext.getPath();
        //step3:get the object of the simple form
        var oSimpleForm = this.getView().byId('idSimple');

        //step4:Perfom the element binding
        oSimpleForm.bindElement(sPath);
      },

      onRowSelect: function (oEvent) {
        //oEvent is our object
        this.usingElementBinding(oEvent);
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
      onFlip: function () {
        var oModel = sap.ui.getCore().getModel();
        var oGOTModel = sap.ui.getCore().getModel('got');
        sap.ui.getCore().setModel(oGOTModel);
        sap.ui.getCore().setModel(oModel, 'got');
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
