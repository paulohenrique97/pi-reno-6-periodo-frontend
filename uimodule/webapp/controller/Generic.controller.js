sap.ui.define(
  [
    "br/com/paulopatine/integratorProject/controller/BaseController",
    "br/com/paulopatine/integratorProject/model/formatter",
    "sap/ui/core/BusyIndicator",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (Controller, Formatter, BusyIndicator, Filter, FilterOperator) {
    "use strict";

    return Controller.extend(
      "br.com.paulopatine.integratorProject.controller.Generic",
      {
        formatter: Formatter,

        constructor: function (
          cModel,
          oQuery = undefined,
          oSearch = undefined
        ) {
          this.cModel = cModel;
          this.oQuery = oQuery || {};
          this.oSearch = oSearch || {
            listId: "list",
            fields: ["codigo"],
          };
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

        onListSearch: function (oEvent) {
          let aFilters = [],
            sQuery = oEvent.getSource().getValue(),
            oSearch = this.oSearch,
            oList = this.byId(oSearch.listId),
            oBinding = oList.getBinding("items"),
            aFinalFilters;

          for (const field of oSearch.fields) {
            let filter = new Filter(field, FilterOperator.Contains, sQuery);
            aFilters.push(filter);
          }
          aFinalFilters = new Filter(aFilters);
          oBinding.filter(aFinalFilters, "Application");
        },
      }
    );
  }
);
