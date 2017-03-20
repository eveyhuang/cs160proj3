var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/chocoingre', function(req, res, next) {
  res.render('chocoingre', { title: 'Express' });
});

module.exports = router;
