/**
 * Created by chie on 2016/5/2.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('layout', { title: 'Express' });

});

module.exports = router;
