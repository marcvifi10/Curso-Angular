const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const db = "mongodb://testuser:testpw@ds123136.mlab.com:23136/eventsdb";

mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Conectado a mongodb!!!')      
    }
});

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Solicitud no autorizada!!!')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Solicitud no autorizada!!!')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Solicitud no autorizada!!!')    
  }
  req.userId = payload.subject
  next()
}

router.get('/events', (req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Evento 1",
      "description": "Descripcion 1",
      "date": "2019-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Evento 2",
      "description": "Descripcion 2",
      "date": "2019-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Evento 3",
      "description": "Descripcion 3",
      "date": "2019-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Evento 4",
      "description": "Descripcion 4",
      "date": "2019-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Evento 5",
      "description": "Descripcion 5",
      "date": "2019-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Evento 6",
      "description": "Descripcion 6",
      "date": "2019-04-23T18:25:43.511Z"
    }
  ]
  res.json(events)
})

router.get('/special', verifyToken, (req, res) => {
  let specialEvents = [
    {
      "_id": "1",
      "name": "Evento 1 Especial",
      "description": "Descripcion 1",
      "date": "2019-04-25T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Evento 2 Especial",
      "description": "Descripcion 2",
      "date": "2019-04-25T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Evento 3 Especial",
      "description": "Descripcion 3",
      "date": "2019-04-25T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Evento 4 Especial",
      "description": "Descripcion 4",
      "date": "2019-04-25T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Evento 5 Especial",
      "description": "Descripcion 5",
      "date": "2019-04-25T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Evento 6 Especial",
      "description": "Descripcion 6",
      "date": "2019-04-25T18:25:43.511Z"
    }
  ]
  res.json(specialEvents)
})

router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)      
    } else {
      let payload = {subject: registeredUser._id}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})
    }
  })
})

router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({email: userData.email}, (err, user) => {
    if (err) {
      console.log(err)    
    } else {
      if (!user) {
        res.status(401).send('Email NO valido!!!')
      } else 
      if ( user.password !== userData.password) {
        res.status(401).send('Password NO valida!!!')
      } else {
        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    }
  })
})

module.exports = router;