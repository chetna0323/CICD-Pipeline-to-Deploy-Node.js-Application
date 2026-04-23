#!/bin/bash
cd /home/ubuntu/nodeapp
pm2 delete all || true
pm2 start app.js