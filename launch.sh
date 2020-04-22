#!/bin/bash
echo "Launching next and app.js"
pm2 stop all
npm run build
pm2 start npm --name "next" -- start
cd web-api-auth-examples/
cd authorization_code/
node app.js
cd ..
cd ..
echo "Now running latest version"
