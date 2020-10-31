sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel",
    "sap/ui/util/Storage",
    "./model/models",
  ],
  function (UIComponent, Device, JSONModel, Storage, models) {
    "use strict";

    return UIComponent.extend(
      "br.com.paulopatine.integratorProject.Component",
      {
        metadata: {
          manifest: "json",
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function () {
          // call the base component's init function
          UIComponent.prototype.init.apply(this, arguments);

          let oLocalStorage = new Storage(Storage.Type.local);
          let theme = oLocalStorage.get("theme") || "sap_fiori_3";
          sap.ui.getCore().applyTheme(theme);

          sap.ui.getCore().setModel(this.getModel("i18n"), "i18n");

          // set the device model
          this.setModel(models.createDeviceModel(), "device");

          // create the views based on the url/hash
          this.getRouter().initialize();
        },
      }
    );
  }
);
