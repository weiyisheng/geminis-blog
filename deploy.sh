#!/bin/bash
git add .
if [ "$1" ]
then
  git commit -m "$1"
  git pull
  git push
  pm2 deploy ecosystem.config.js production
else
  echo "Failed: give some message"
fi
