sap.ui.define(
  [
    "br/com/paulopatine/integratorProject/controller/BaseController",
    "br/com/paulopatine/integratorProject/model/formatter",
    "br/com/paulopatine/integratorProject/model/Cliente",
    "br/com/paulopatine/integratorProject/model/Vendedor",
    "br/com/paulopatine/integratorProject/model/Fornecedor",
    "br/com/paulopatine/integratorProject/model/Produto",
    "br/com/paulopatine/integratorProject/model/Venda",
  ],
  function (
    Controller,
    Formatter,
    Cliente,
    Vendedor,
    Fornecedor,
    Produto,
    Venda
  ) {
    "use strict";

    return Controller.extend(
      "br.com.paulopatine.integratorProject.controller.Home",
      {
        formatter: Formatter,

        onInit: function () {
          let oView = this.getView();
          oView.addEventDelegate({
            onBeforeShow: function () {
              let oCliente = new Cliente(),
                oVendedor = new Vendedor(),
                oFornecedor = new Fornecedor(),
                oProduto = new Produto(),
                oVenda = new Venda();

              oCliente.get(undefined, { limit: 1 }).then(function (oData) {
                oView.setModel(oData, "clientes");
                oView.byId("tileClientes").setBusy(false);
              });

              oVendedor.get(undefined, { limit: 1 }).then(function (oData) {
                oView.setModel(oData, "vendedores");
                oView.byId("tileVendedores").setBusy(false);
              });

              oFornecedor.get(undefined, { limit: 1 }).then(function (oData) {
                oView.setModel(oData, "fornecedores");
                oView.byId("tileFornecedores").setBusy(false);
              });

              oProduto.get(undefined, { limit: 1 }).then(function (oData) {
                oView.setModel(oData, "produtos");
                oView.byId("tileProdutos").setBusy(false);
              });

              oVenda.get(undefined, { limit: 1 }).then(function (oData) {
                oView.setModel(oData, "vendas");
                oView.byId("tileVendas").setBusy(false);
              });
            },
          });
        },
        onTilePress: function (target) {
          this.getRouter().navTo(target);
        },
      }
    );
  }
);
