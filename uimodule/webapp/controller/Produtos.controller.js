sap.ui.define(
  [
    "br/com/paulopatine/integratorProject/controller/Generic.controller",
    "br/com/paulopatine/integratorProject/model/Produto",
  ],
  function (Controller, Produto) {
    "use strict";

    return Controller.extend(
      "br.com.paulopatine.integratorProject.controller.Produtos",
      {
        constructor: function () {
          let oSearch = {
            listId: "list",
            fields: ["codigo", "nome", "medida"],
          };
          Controller.call(this, Produto, undefined, oSearch);
        },
      }
    );
  }
);
