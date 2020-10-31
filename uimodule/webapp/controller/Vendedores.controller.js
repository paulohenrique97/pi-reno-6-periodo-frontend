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
          Controller.call(this, Vendedor);
        },
      }
    );
  }
);
