var fs = require('fs')
 , gm = require('gm')
 , express = require('express');

var app = module.exports = express();

app.configure(function(){
 app.use(app.router);
});

app.get('/image', function(req, res){


 gm('DSC03282.JPG')
  .resize(req.query.width, req.query.height)
  .noProfile()
  .toBuffer(function (err, buffer) {

   res.writeHead(200, {'Content-Type': 'image/jpeg' });
   res.end(buffer, 'binary');

   console.log('image send : ' +req.query);

  });
});

app.listen(3000);
console.log("Go Image API : 3000");



