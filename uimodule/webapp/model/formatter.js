sap.ui.define([], function () {
  "use strict";
  return {
    dataVenda: function (sData) {
      if (!sData) return "";

      let sAno = sData.slice(0, 4),
        sMes = sData.slice(4, 6),
        sDia = sData.slice(6, 8);

      sData = sDia.concat("-", sMes, "-", sAno);

      return sData;
    },
    statusVendedor: function (sStatus) {
      if (!sStatus) return "";

      let i18n = sap.ui.getCore().getModel("i18n").getResourceBundle();

      if (sStatus === "1" || sStatus === "A") {
        return i18n.getText("ativo");
      } else {
        return i18n.getText("inativo");
      }
    },
    stateVendedor: function (sStatus) {
      if (!sStatus) return "None";

      let i18n = sap.ui.getCore().getModel("i18n").getResourceBundle();

      if (
        sStatus === "1" ||
        sStatus === "A" ||
        sStatus === i18n.getText("ativo")
      ) {
        return "Success";
      } else {
        return "Error";
      }
    },
    quantidade: function (iQuantidade) {
      if (iQuantidade == null) return "None";

      if (iQuantidade >= 10) {
        return "Success";
      } else if (iQuantidade > 0) {
        return "Warning";
      } else {
        return "Error";
      }
    },
  };
});
