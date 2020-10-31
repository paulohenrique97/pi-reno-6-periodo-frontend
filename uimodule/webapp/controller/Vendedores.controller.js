sap.ui.define(
  [
    "br/com/paulopatine/integratorProject/controller/Generic.controller",
    "br/com/paulopatine/integratorProject/model/Vendedor",
  ],
  function (Controller, Vendedor) {
    "use strict";

    return Controller.extend(
      "br.com.paulopatine.integratorProject.controller.Vendedores",
      {
        constructor: function () {
          let oSearch = {
            listId: "list",
            fields: ["codigo", "nome"],
          };
          Controller.call(this, Vendedor, undefined, oSearch);
        },
      }
    );
  }
);
