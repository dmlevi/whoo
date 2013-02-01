 (function () {
    Modernizr.load([
    {
        test: Modernizr.input.required,
        nope: ['http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js', 'js/validate.js'],
        complete: function () {
            $('#form').validate();
        } // complete
    }]);
})();
