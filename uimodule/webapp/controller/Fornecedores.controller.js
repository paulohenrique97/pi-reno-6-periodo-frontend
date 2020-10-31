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
          Controller.call(this, Fornecedor);
        },
      }
    );
  }
);
