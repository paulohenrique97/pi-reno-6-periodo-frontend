sap.ui.define(
  [
    "br/com/paulopatine/integratorProject/controller/Generic.controller",
    "br/com/paulopatine/integratorProject/model/Cliente",
  ],
  function (Controller, Cliente) {
    "use strict";

    return Controller.extend(
      "br.com.paulopatine.integratorProject.controller.Clientes",
      {
        constructor: function () {
          let oSearch = {
            listId: "list",
            fields: ["codigo", "nome", "data", "endereco", "estado"],
          };
          Controller.call(this, Cliente, undefined, oSearch);
        },
      }
    );
  }
);
