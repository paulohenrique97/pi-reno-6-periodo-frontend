/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
  "use strict";

  sap.ui.require(
    ["br/com/paulopatine/integratorProject/test/unit/AllTests"],
    function () {
      QUnit.start();
    }
  );
});
