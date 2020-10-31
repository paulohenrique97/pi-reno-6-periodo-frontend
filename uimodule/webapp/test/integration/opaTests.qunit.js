/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
  "use strict";

  sap.ui.require([
    "br/com/paulopatine/intergratorProject/test/integration/AllJourneys"
  ], function() {
    QUnit.start();
  });
});
