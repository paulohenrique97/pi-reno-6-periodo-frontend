sap.ui.define(
  [
    "br/com/paulopatine/integratorProject/controller/BaseController",
    "br/com/paulopatine/integratorProject/model/Venda",
    "br/com/paulopatine/integratorProject/model/formatter",
  ],
  function (Controller, Venda, Formatter) {
    "use strict";

    return Controller.extend(
      "br.com.paulopatine.integratorProject.controller.Venda",
      {
        formatter: Formatter,
        onInit: function () {
          let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter
            .getRoute("venda")
            .attachPatternMatched(this._onObjectMatched, this);
        },
        _onObjectMatched: async function (oEvent) {
          let oView = this.getView(),
            id = oEvent.getParameter("arguments").id || 1,
            oVenda = new Venda(),
            oData = await oVenda.get(id, { scope: "itens" });
          oView.setModel(oData);
        },
      }
    );
  }
);
