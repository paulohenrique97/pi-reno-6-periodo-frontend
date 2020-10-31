sap.ui.define(
  ["sap/ui/base/Object", "sap/ui/model/json/JSONModel", "sap/m/MessageToast"],
  function (Object, JSONModel, MToast) {
    "use strict";

    return Object.extend(
      "br.com.paulopatine.integratorProject.model.BaseModel",
      {
        /**
         *  @param {String} sModelName
         */
        constructor: function (sModelName) {
          this.sModelName = sModelName;
          this.sUrl = "http://localhost:3000/api/".concat(sModelName, "/");
          this.i18n = sap.ui.getCore().getModel("i18n").getResourceBundle();
        },

        /**
         *
         * @param {String} sId
         * @param {Object} oQuery
         */
        get: function (sId, oQuery) {
          let that = this,
            url = sId ? that.sUrl.concat(sId) : that.sUrl;
          return new Promise(function (fnResolve) {
            $.ajax({
              url: url,
              type: "GET",
              data: oQuery,
              crossDomain: true,
              success: function (data) {
                let oData = new JSONModel(data);
                fnResolve(oData);
              },
              error: function () {
                MToast.show(that.i18n.getText("getError"));
                fnResolve(new JSONModel());
              },
            });
          });
        },
      }
    );
  }
);
