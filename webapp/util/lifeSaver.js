sap.ui.define(['sap/ui/core/format/NumberFormat'], function (NumberFormat) {
  'use strict';

  return {
    myFormatterFunction: function (inp) {
      if (inp) {
        return inp.toUpperCase();
      }
    },
    formatCurrency: function (amount, currCode) {
      var oCurrencyFormat = NumberFormat.getCurrencyInstance();
      return oCurrencyFormat.format(amount, currCode);
    },
  };
});
