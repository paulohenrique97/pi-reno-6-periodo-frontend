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
          Controller.call(this, Cliente);
        },
      }
    );
  }
);
