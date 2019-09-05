'use strict';

require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env.development'
});

const app = require('./src/app');
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Teste')
})

app.listen(PORT, err => {
  return err ? console.log(err) : console.log(`Backend rodando em: http://${HOST}:${PORT}`); 
});