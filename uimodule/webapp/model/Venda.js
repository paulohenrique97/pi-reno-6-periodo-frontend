sap.ui.define(
  ["br/com/paulopatine/integratorProject/model/BaseModel"],
  function (BaseModel) {
    "use strict";

    return BaseModel.extend(
      "br.com.paulopatine.integratorProject.model.Venda",
      {
        constructor: function () {
          BaseModel.call(this, "vendas");
        },

        onInit: function () {},
      }
    );
  }
);
