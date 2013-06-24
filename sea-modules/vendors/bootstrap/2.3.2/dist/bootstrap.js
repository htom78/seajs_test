define(function(require) {

    var $ = require('$');
    window.jQuery = $;

    require('../css/bootstrap.min.css');
    require('../js/bootstrap.min.js');

    return window.jQuery.noConflict();
})
