define(['backbone'], function(Backbone) {
    var App = Backbone.View.extend({
        initialize: function() {
            alert('test');
            console.log('test');
        }
    });

    return App;
});
