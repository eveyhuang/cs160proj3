var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/muesliingre', function(req, res, next) {
  res.render('muesliingre', { title: 'Express' });
});

module.exports = router;
