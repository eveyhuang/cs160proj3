var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dahlingre', function(req, res, next) {
  res.render('dahlingre', { title: 'Express' });
});

module.exports = router;
