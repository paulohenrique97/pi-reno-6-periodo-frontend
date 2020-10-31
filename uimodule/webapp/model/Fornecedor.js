sap.ui.define(
  ["br/com/paulopatine/integratorProject/model/BaseModel"],
  function (BaseModel) {
    "use strict";

    return BaseModel.extend(
      "br.com.paulopatine.integratorProject.model.Fornecedor",
      {
        constructor: function () {
          BaseModel.call(this, "fornecedores");
        },

        onInit: function () {},
      }
    );
  }
);
