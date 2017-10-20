var express = require('express');
var router = express.Router();
var User = require('../model/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'login' });
});
router.post('/',function(req,res, next){
	// console.log(req.body)
	User.find({
		name:req.body.name,
		password:req.body.password
	},function(error, result){
		if (!error) {
			console.log(result);
			if (result.length > 0) {
				res.redirect('/')
			}else{
				res.render('login',{title:'login'})
			}
		}
	})
});

module.exports = router;
