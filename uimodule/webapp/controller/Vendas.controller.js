sap.ui.define(
  [
    "br/com/paulopatine/integratorProject/controller/Generic.controller",
    "br/com/paulopatine/integratorProject/model/Venda",
  ],
  function (Controller, Venda) {
    "use strict";

    return Controller.extend(
      "br.com.paulopatine.integratorProject.controller.Vendas",
      {
        constructor: function () {
          Controller.call(this, Venda);
        },
        onItemPress: function (oEvent) {
          let oVenda = oEvent.getSource().getBindingContext().getObject();
          this.getRouter().navTo("venda", { id: oVenda.id });
        },
      }
    );
  }
);
