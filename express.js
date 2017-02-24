var express = require('express');
var browserSync = require('browser-sync');
var app = express();
var port = process.env.PORT || 3000;
port = 3004;
console.log("PORT IS " + port)
app.listen(port, listening);
app.use(express.static('app'))
function listening () {
  browserSync({
    proxy:'http://localhost:' + port,
    files: [
      'app/js',
      'app/css/*.css',
      'app/*.html'
    ]
  });
}
