#!/bin/bash

# Example: Install Node.js and npm if not already installed
if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup | sudo -E bash -
  sudo apt-get install -y nodejs
fi

# Example: Install application dependencies using npm
cd /var/www/hellojs
npm install
