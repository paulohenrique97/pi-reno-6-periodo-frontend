sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "br/com/paulopatine/integratorProject/model/formatter",
  ],
  function (Controller, Formatter) {
    "use strict";

    return Controller.extend(
      "br.com.paulopatine.integratorProject.controller.App",
      {
        formatter: Formatter,

        onInit: function () {},
      }
    );
  }
);
