const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
	//处理部分资源路径
	if (req.url.endsWith('.js') || req.url.endsWith('.css')) {
		//console.log(req.url);
		res.redirect(`/static${req.url}`);
	};
	next();
});

router.get('/', function(request, response) {
	response.type('html');
	response.render('music', {
		title: '网易云'
	})
});

module.exports = router;