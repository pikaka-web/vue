const express = require("express");
const requset = require("requset");

let app = express();
app.listen(2333);
console.log('服务器启动，端口2333');

app.use(express.json());
app.use(app.use(express.urlencoded({extended: true})));
app.use(express.static("./public"));

app.get("/search", (req, res) => {
	res.set({
		"Access-Control-Allow-Origin": "*"
	});
	let {word} = req.query;
	if (word) {
		request.get(
			'https://www.baidu.com/sugrec?prod=pc&wd=' + word + '&cb=lyj'
			, (err, a, body) => {
				if (err) {
					res.send([]);
					return;
				}

				let str = body.match(/^[\da-z_]+\((.+)\)$/i)[1];
				str = JSON.parse(str);
				if (str.g) {
					/*let dataArr = [];
					str.g.forEach(item=>{
						dataArr.push(item.q);
					});*/
					res.send(
						str.g.map(item => item.q)
					);
				} else {
					res.send([]);
				}
			}
		);
	} else {
		res.send([]);
	}
});