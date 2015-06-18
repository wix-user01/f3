var vine = require('./vine.js');
var _ = require('underscore-node');

exports.uploadwidget = function(req, res) {
    res.render('uploadwidget', { debug: req.query.debug || false});
};

exports.uploadsettings = function(req, res) {
    res.render('uploadsettings', { });
};

exports.vinewidget = function(req, res) {
    res.render('vinewidget', { debug: req.query.debug || false});
};

exports.vinesettings = function(req, res) {
    res.render('vinesettings', { });
};

exports.vinePopular = function(req, res){
    vine.getPopular(req.params.size || 6, function(data){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    });
};

exports.vineSearch = function(req, res){
    vine.search(req.params.q || 'funny', req.params.size || 6, function(data){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    });
};

exports.vineGetVideo = function(req, res){
    vine.getVideo(req.params.videoId || 'MJ9a50Z3pL0',  function(data){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    });
};
