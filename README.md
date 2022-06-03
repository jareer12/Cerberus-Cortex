# Cerberus Cortex

🧠 Chat web app.

## Installation

```shell
mkdir /root/nodejs
cd /root/nodejs

rm -r Cerberus
git clone https://github.com/jareer12/Cerberus-Cortex.git Cerberus
cd Cerberus

rm -r Frontend
cd Server

npm install
forever start index.js
```

```shell
cd /var/www
rm -r Chatapp
git clone https://github.com/jareer12/Cerberus-Cortex.git Chatapp

cd Chatapp
cd Frontend

mv /var/www/Chatapp/Frontend /var/www/Cerberus
rm -r /var/www/Chatapp

cd /var/www/Cerberus
npm install
npm run build
```
