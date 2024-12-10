// basic express server
const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/vmap', (req, res) => {
  // readfile content as string
  const vmap = fs.readFileSync('./vmap.xml', 'utf8');
  //set header as xml
  res.set('Content-Type', 'application/xml');
  res.send(vmap);
});

// add cors support
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
