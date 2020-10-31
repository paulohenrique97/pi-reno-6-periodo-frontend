sap.ui.define(
  [
    "br/com/paulopatine/integratorProject/controller/BaseController",
    "br/com/paulopatine/integratorProject/model/formatter",
  ],
  function (Controller, Formatter) {
    "use strict";

    return Controller.extend(
      "br.com.paulopatine.integratorProject.controller.Config",
      {
        formatter: Formatter,

        onInit: function () {
          let oView = this.getView(),
            oLocalStorage = this.oLocalStorage;
          oView.addEventDelegate({
            onAfterShow: function () {
              let theme = oLocalStorage.get("theme");
              oView.byId("themeSelect").setSelectedKey(theme);
            },
          });
        },
        onThemeChange: function () {
          let theme = this.getView().byId("themeSelect").getSelectedKey();
          this.oLocalStorage.put("theme", theme);
          sap.ui.getCore().applyTheme(theme);
        },
      }
    );
  }
);
