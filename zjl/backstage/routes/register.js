var express = require('express');
var router = express.Router();
var User = require('../model/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.post('/',function(req,res, next){
	console.log('req.body ')
	User.create({
		name:req.body.name,
		password:req.body.password
	},function(error, result){
		if (!error) {
			// res.send{flag}
			console.log('aaa')
			// res.location('http://localhost:8080/#/')
		}else{

		}
	})
});

module.exports = router;
