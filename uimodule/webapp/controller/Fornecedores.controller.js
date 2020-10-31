sap.ui.define(
  [
    "br/com/paulopatine/integratorProject/controller/Generic.controller",
    "br/com/paulopatine/integratorProject/model/Fornecedor",
  ],
  function (Controller, Fornecedor) {
    "use strict";

    return Controller.extend(
      "br.com.paulopatine.integratorProject.controller.Fornecedores",
      {
        constructor: function () {
          let oSearch = {
            listId: "list",
            fields: [
              "codigo",
              "nome",
              "endereco",
              "cep",
              "numero",
              "estado",
              "telefone",
              "razao",
              "cnpf",
            ],
          };
          Controller.call(this, Fornecedor, undefined, oSearch);
        },
      }
    );
  }
);
