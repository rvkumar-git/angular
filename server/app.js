var express = require("express");
	 app = express();
	path = require('path');

	console.log(__dirname);

	// USE THIS TO RENDER HTML FILES
	app.set('views', __dirname + '/views');
	app.engine('html', require('ejs').renderFile);


	var host = 'localhost';
	var port =  3000;

	function HTMLHeaders(res) {
           res.setHeader('Content-Type', 'text/html');
           res.setHeader('Cache-Control', 'max-age=0'); // browser should not cache
       }
	
  function JSONHeaders(res) {
           res.setHeader('Content-Type', 'text/json');
           res.setHeader('Cache-Control', 'max-age=0'); // browser should not cache
      }

       
// hook for CORS
// app.use(function(req, res, next) {
//     var oneof = false;
//     if (req.headers.origin) {
//         res.header('Access-Control-Allow-Origin', "*");
//         oneof = true;
//     }
//     if (req.headers['access-control-request-method']) {
//         res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
//         oneof = true;
//     }
//     if (req.headers['access-control-request-headers']) {
//         res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
//         oneof = true;
//     }
//     if (oneof) {
//         res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
//     }
//     res.header("Access-Control-Allow-Credentials", "true");

//     // intercept OPTIONS method
//     if (oneof && req.method == 'OPTIONS') {
//         res.send(200);
//     } else {
//         next();
//     }
// });

    // app.all('/*', function(req, res, next) {
    //     res.header("Access-Control-Allow-Credentials", "true");
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", 'Content-Type, X-Requested-With');
    //     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    //     next();
    // });

    // // handle OPTIONS requests from the browser 
    // app.options("*", function(req, res, next) {
    //     res.send(200);
    // });


	app.get('/', function(req, res) {
        HTMLHeaders(res);
        res.render('test.html');
    });

  app.get('/productlist', function(req, res){
	       JSONHeaders(res);
         res.end(JSON.stringify(
                                {
                                  "success": true, 
                                  "data": "12344", 
                                  "message": {}
                                }
                              )
                );
          // res.sendfile(path.resolve('./local_resources/productlist.json'));
  });

  app.listen(port, function() {
    console.log(('core api server running at http://' + host + ':' + port + '/').green);
  });
