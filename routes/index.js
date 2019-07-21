var express = require('express');
var path = require('path');
var router = express.Router();
var apiList = require("../apilist.json");

/* GET home page. */
router.get('/', function (req, res, next) {
  apis = Object.keys(apiList).map(val => {
    return '/api' + val;
  })
  res.render('index', { title: 'Console.log API', apis: apis });
});

module.exports = router;
