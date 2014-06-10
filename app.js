var fs = require('fs')
 , gm = require('gm')
 , express = require('express');

var port = (process.env.VCAP_APP_PORT || 3000);

var app = module.exports = express();

app.get('/image', function (req, res) {

 console.log('resizing image to :');
 console.log(req.query);

 var width = 500;
 var height = 500;

 if(req.query.width != null && req.query.height !=null){
  width = req.query.width;
  height = req.query.height;
 }

 gm('DSC03282.JPG')
  .resize(width, height)
  .noProfile()
  .toBuffer(function (err, buffer) {
   res.writeHead(200, {'Content-Type': 'image/jpeg' });
   res.end(buffer, 'binary');
   console.log('image send !');

  });
});

app.get('/image2', function (req, res) {

 console.log('resizing image to :');
 console.log(req.query);

 var width = 500;
 var height = 500;

 if(req.query.width != null && req.query.height !=null){
  width = req.query.width;
  height = req.query.height;
 }

 gm('image2.jpg')
  .resize(width, height)
  .noProfile()
  .toBuffer(function (err, buffer) {
   res.writeHead(200, {'Content-Type': 'image/jpeg' });
   res.end(buffer, 'binary');
   console.log('image send !');

  });
});


app.listen(port);
console.log("Go Image API : 3000");



