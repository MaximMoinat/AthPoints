/**
 * TODO: rename either Formulas.js or Formula.js. There is no relation between them.
 * This is actuallly a calculator
 * Created by Maxim on 24-9-2017.
 */
define(['model/Formulas'], function(formulas) {
  return function(formulaString, constants) {
      var self = this;
      self.formulaRaw = formulaString;
      self.constants = constants;
      self.doFloor = true;

      // Build the formula by replacing the constants with their numeric value
      self.formula = self.formulaRaw.toLowerCase();
      for (var name in self.constants) {
          self.formula = self.formula.replace(name.toLowerCase(), self.constants[name]);
      }

      /**
       * Evaluate the formula for a given value of x.
       * Assumes x is the variable in the formula string
       * @param x
       * @returns {numeric}
       */
      this.evaluate = function(x) {
          var result = eval(self.formula);
          if (self.doFloor) {
              result = Math.floor(result);
          }
          return result;
      }
  }
});