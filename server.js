var express = require('express');
var app = express();
var path = require('path');
var router = require('./routes/index');
var serverName = process.env.NAME || 'Unknown';
var port = process.env.port || 3034;
var url = `http://127.0.0.1:${port}`;

//static
app.use('/static', express.static(path.join(__dirname, 'public')));

//设置跨域访问
app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", '3.2.1');
	next();
});

//使用ejs
app.set('views', path.join(__dirname, './views'));
app.set("view engine", "ejs");

//使用路由
app.use(router);

app.listen(port, () => {
	console.log('Hello, I\'m %s, how can I help?', serverName);
	console.log('Socket Server listening at port %d.', port);
});