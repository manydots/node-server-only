const express = require('express');
const router = express.Router();

router.get('*', function(request, response) {
	//解决渲染HTML失败问题,添加服务器返回渲染的type值response.type('html');
	response.type('html');
	if (request.url.endsWith('.js') || request.url.endsWith('.css')) {
		response.redirect(`/static${request.url}`);
	}else{
		response.render('music', {
			title: '网易云'
		})
	}

});



module.exports = router;