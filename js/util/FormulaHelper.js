define([], function() {
    return function () {

        /** Static utility functions **/
        this.insertConstants = function (formula, constants) {
            var constantValue;
            var constantName;
            for (constantName in constants) {
                constantValue = constants[constantName];
                // TODO: only replace single characters with regex. (e.g. problem when using 'Math.sqrt' and the constant a)
                formula = formula.replace(constantName, constantValue);
            }
            return formula;
        };

        this.eval = function (x, formula) {
            var result = Number(eval(formula));
            if (isNaN(result)) {
                return 0;
            }
            return result;
        };
    }
});