var express = require('express');
var router = express.Router();
var consoleLog = require('../console');
var apiList = require("../apilist.json");

Object.keys(apiList).forEach(api => {
  router.get(api, function (req, res) {
    var opts = JSON.parse(JSON.stringify(apiList[api]));
    opts.CONSOLE_LOG_API_CONTEXT = req.query['req'] || null;

    consoleLog(opts, res);
  })
});

module.exports = router;