const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const socketIo = require('socket.io');
const parser = require('socket.io-parser');
const io = socketIo(server, {'pingInterval': 300000, 'pingTimeout': 300000, 'parser': parser});


<<<<<<< HEAD

const app = express();
=======
>>>>>>> 97863954ee9c47e51a740c958c87fc372deba29f
const PORT = 3000;

const userController = require('./controllers/userController');
const cuisineController = require('./controllers/cuisineController');
const userCuisineController = require('./controllers/userCuisineController');
const nexmo = require('./.nexmoInfo');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/*', express.static(__dirname));

app.get('/login', cuisineController.getAll);

app.get('/admin', userController.getAllUsers);


app.post('/sign-up', userController.createUser);

app.post('/login', userController.verifyUser, cuisineController.getID, userCuisineController.add, (req,res) => {
  res.redirect('/dashboard');
});

app.get('/dashboard', userCuisineController.getAll)

app.get('/sign-up', (req,res) => {
  res.sendFile(path.join(__dirname + '/views/sign-up.html'));
})

app.post('/sendText', (req, res) => {
  console.log('body:', req.body);
  nexmo.message.sendSms(
    '19082716789', req.body.phone, req.body.message,
    (err, resData) => {
      if (err){
        console.log({err});
        res.send(err)
      } else {
        console.log({resData});
        res.send(resData)
      }
    }
  )
})

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
  socket.on('chat message', function(msg) {
    socket.broadcast.emit('broadcast', msg)
  })
  socket.on('disconnect', () => console.log('disconnected from chat server'));
  socket.on('ping', msg => {
    alert(msg);
  });
})

server.listen(PORT, () => console.log(`listening on ${PORT}`))

module.exports = app;
