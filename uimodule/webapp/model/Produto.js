sap.ui.define(
  ["br/com/paulopatine/integratorProject/model/BaseModel"],
  function (BaseModel) {
    "use strict";

    return BaseModel.extend(
      "br.com.paulopatine.integratorProject.model.Produto",
      {
        constructor: function () {
          BaseModel.call(this, "produtos");
        },

        onInit: function () {},
      }
    );
  }
);
