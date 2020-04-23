#!/usr/bin/env node
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
const hostname = 'ec2-3-88-85-136.compute-1.amazonaws.com';
const port = 3001;
const publicDir =  __dirname;



// library for signing tokens
const jwt = require('jsonwebtoken');
const fs = require('fs');

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

app.use(express.static(publicDir));
app.listen(port, hostname);
console.log("Currently listening on ", port);
