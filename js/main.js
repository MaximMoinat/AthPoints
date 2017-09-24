/**
 * Created by Maxim Moinat.
 */

require(['lib/knockout-3.4.2', 'calculatorApp', 'lib/jquery-3.2.1', 'lib/d3-4.10.2'], function(ko, appViewModel, $, d3) {
    ko.applyBindings(new appViewModel());
});