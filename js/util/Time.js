define([], function() {
    return function () {

        // TODO: unit test
        this.toHMS = function (seconds) {
            if (seconds < 60) {
                return this.formatSeconds(seconds,1);
            }

            var hours = this.numberOfHours(seconds);
            var minutes = this.numberOfMinutes(seconds) - hours * 60;
            var secondsRest = seconds - hours * 3600 - minutes * 60;

            var hoursString = this.formatMinutes(hours);
            var minutesString = this.formatMinutes(minutes);
            var secondsRestString = this.formatRestSeconds(secondsRest);

            if (seconds < 3600) {
                return minutesString + ":" + secondsRestString;
            }

            return hoursString + ":" + minutesString + ":" + secondsRestString;
        };

        /* Private functions TODO: what is the convention in JS to indicate this? */

        this.formatSeconds = function(t) {
            // x.xx or xx.xx
            return t.toLocaleString('en-US', {minimumIntegerDigits: 1, minimumFractionDigits: 2, maximumFractionDigits: 2});
        };

        this.formatRestSeconds = function(t) {
            // xx.xx
            return t.toLocaleString('en-US', {minimumIntegerDigits: 2, minimumFractionDigits: 2, maximumFractionDigits: 2});
        };

        this.formatMinutes = function(t) {
            // xx
            return t.toLocaleString('en-US', {minimumIntegerDigits: 2, maximumFractionDigits: 0});
        };

        this.numberOfRestSeconds = function (t) {
            return t - this.numberOfHours();
        };

        this.numberOfMinutes = function(t) {
            return Math.floor(t/60);
        };

        this.numberOfHours = function(t) {
            return Math.floor(t/3600);
        };

    };
});