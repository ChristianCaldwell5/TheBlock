#!/usr/bin/env node

// library for signing tokens
const jwt = require('jsonwebtoken');
const fs = require('fs');

const private_key = fs.readFileSync('apple_private_key.p8').toString();
const team_id = '5N7B3W2HCH';
const key_id = '34T327V9KS';
const token = jwt.sign({}, private_key, {
  algorithm: 'ES256',
  expiresIn: '1d',
  issuer: team_id,
  header: {
    alg: 'ES256',
    kid: key_id
  }
});

app.get('/token', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({token: token}));
});
