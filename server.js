var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');

var app = express();

// views folder
app.set('views', path.join(__dirname, 'views'))

// main handlebar layout
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res){
  var context = {
    content: 'this is some content',
    published: true,
    title: 'This is the home page.'
  };

  res.render('home', context);
});

app.listen(app.get('port'), function()
{
  console.log('Server started on port ' + app.get('port'));
});
