sap.ui.define(
  [
    "br/com/paulopatine/integratorProject/controller/BaseController",
    "br/com/paulopatine/integratorProject/model/formatter",
    "sap/ui/core/BusyIndicator",
  ],
  function (Controller, Formatter, BusyIndicator) {
    "use strict";

    return Controller.extend(
      "br.com.paulopatine.integratorProject.controller.Generic",
      {
        formatter: Formatter,

        constructor: function (cModel, oQuery = undefined) {
          this.cModel = cModel;
          this.oQuery = oQuery;
        },

        onInit: function () {
          let that = this,
            cModel = that.cModel,
            oModel = new cModel(),
            oView = that.getView();
          oView.addEventDelegate({
            onBeforeShow: async function () {
              BusyIndicator.show();
              let oData = await oModel.get(undefined, that.oQuery);
              BusyIndicator.hide();
              oView.setModel(oData);
            },
          });
        },
      }
    );
  }
);
