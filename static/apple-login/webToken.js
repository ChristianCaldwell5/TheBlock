#!/usr/bin/env node
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
const hostname = '127.0.0.1';
const port = 8000;
const publicDir =  __dirname;



// library for signing tokens
const jwt = require('jsonwebtoken');
const fs = require('fs');

// app.get('/', function (req, res) {
//   res.sendFile(path.join(publicDir, '../../pages/index.js'));
//   console.log("Hit 1.");
// });

const private_key = fs.readFileSync('apple_private_key.p8').toString();
const team_id = '5N7B3W2HCH';
const key_id = '34T327V9KS';
const token = jwt.sign({}, private_key, {
  algorithm: 'ES256',
  expiresIn: '180d',
  issuer: team_id,
  header: {
    alg: 'ES256',
    kid: key_id
  }
});

// app.get('/token', function (req, res) {
//   // res.setHeader('Content-Type', 'application/json', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Credentials', true);
//   //, 'Access-Control-Allow-Origin', '*'
//   res.setHeader('Content-Type','application/json');
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.send(JSON.stringify({token: token}));
//   //res.send(token);
//   console.log(token);
// });

app.get('/token', (req, res) => res.send(JSON.stringify({token: token})))
// app.use(function(req, res) {
// //   Website you wish to allow to connect
// // res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
// //
// // Request methods you wish to allow
// // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// //
// // Request headers you wish to allow
// // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// //
// // Set to true if you need the website to include cookies in the requests sent
// // to the API (e.g. in case you use sessions)
// // res.setHeader('Access-Control-Allow-Credentials', true);
// });
//.use(cors()

app.use(express.static(publicDir));
app.listen(port, hostname);
console.log("Currently running.")
//app.listen(port, hostname);
