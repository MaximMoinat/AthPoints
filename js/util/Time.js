define([], function() {
    return function () {

        // TODO: unit test
        this.toHMS = function (seconds) {
            if (seconds < 60) {
                return this.formatSeconds(seconds);
            }

            var hours = this.numberOfHours(seconds);
            var minutes = this.numberOfMinutes(seconds) - hours * 60;
            var secondsRest = seconds - hours * 3600 - minutes * 60;

            var minutesString = this.formatMinutes(minutes);
            var secondsRestString = this.formatSeconds(secondsRest);
            return minutesString + ":" + secondsRestString;
        };

        /* Private functions TODO: what is the convention in JS to indicate this? */
        this.formatSeconds = function(t) {
            // xx.xx
            return t.toLocaleString('en-US', {minimumIntegerDigits: 2, minimumFractionDigits: 2, maximumFractionDigits: 2});
        };

        this.formatMinutes = function(t) {
            // xx
            return t.toLocaleString('en-US', {minimumIntegerDigits: 2, maximumFractionDigits: 0});
        };

        this.numberOfHours = function(t) {
            return Math.floor(t/3600);
        };

        this.numberOfMinutes = function(t) {
            return Math.floor(t/60);
        };

        this.numberOfRestSeconds = function (t) {
            return t - this.numberOfHours();
        };

    };
});