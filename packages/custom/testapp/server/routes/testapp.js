(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Testapp, app, auth, database, circles) {

        var requiresAdmin = circles.controller.hasCircle('admin');
        var requiresLogin = circles.controller.hasCircle('authenticated');
        var dataCtrl = require('../controllers/dataCtrl.js');

        app.get('/api/testapp/example/anyone', function(req, res) {
            res.send('Anyone can access this');
        });

        app.get('/api/testapp/example/auth', requiresLogin, function(req, res) {
            res.send('Only authenticated users can access this');
        });

        app.get('/api/testapp/example/admin', requiresAdmin, function(req, res) {
            res.send('Only users with Admin role can access this');
        });

        app.get('/api/testapp/example/render', function(req, res) {
            Testapp.render('index', {
                package: 'testapp'
            }, function(err, html) {
                //Rendering a view from the Package server/views
                res.send(html);
            });
        });
        // app.post('/api/testapp/getdata', dataCtrl)
    };
})();
