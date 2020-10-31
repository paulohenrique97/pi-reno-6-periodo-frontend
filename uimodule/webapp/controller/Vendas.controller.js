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
          let oSearch = {
            listId: "list",
            fields: ["codigo", "emissao", "nomeVendedor", "nomeCliente"],
          };
          Controller.call(this, Venda, undefined, oSearch);
        },
        onItemPress: function (oEvent) {
          let oVenda = oEvent.getSource().getBindingContext().getObject();
          this.getRouter().navTo("venda", { id: oVenda.id });
        },
      }
    );
  }
);
