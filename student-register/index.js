const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { response } = require('express');
const app = express();
const port = 3001;
const jsonParser = bodyParser.json();
const fileName = 'students.json';

// Load data from file
let rawData = fs.readFileSync(fileName);
let data = JSON.parse(rawData);

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));


app.get('/Admin', (request, response) => {
    response.render('Admin');
});

app.get('/', (request, response) => {
    response.render('login');
});

// This is a RESTful GET web service
app.get('/students', (request, response) => {
    data.sort((a, b) => (a.role > b.role) ? 1 : -1 );
    response.send(data);
});
app.post('/login',(req,res)=>{
    var message;
    for(var user of users){
      if(user.name!=req.body.name){
          message="Wrong Name";
      }else{
          if(user.password!=req.body.password){
              message="Wrong Password";
              break;
          }
          else{
              app.get('/home', (req,res)=>{
                response.render('home');
              });
          }
      }
    }
});
// This is a RESTful POST web service
app.post('/students', jsonParser, (request, response) => {
    data.push(request.body);
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
    response.end();
});

app.listen(port);
console.log('server listening on port 3001');