sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("br.com.paulopatine.intergratorProject.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "br.com.paulopatine.intergratorProject",
          async: true,
          manifest: true
        }
      });
    }

  });
});
