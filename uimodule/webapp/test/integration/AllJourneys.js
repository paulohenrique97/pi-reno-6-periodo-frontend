sap.ui.define([
  "sap/ui/test/Opa5",
  "br/com/paulopatine/intergratorProject/test/integration/arrangements/Startup",
  "br/com/paulopatine/intergratorProject/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
