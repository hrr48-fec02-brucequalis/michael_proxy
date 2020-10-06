const proxy = require('express-http-proxy');
const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))

app.use('/proxy', proxy({ target: 'http://localhost:8081', changeorigin: true}));

app.get('/', (req, res) => {
  res.send("Gotta Catch 'Em All ")
})

app.listen(8081, () => {
  console.log('Proxy Server is listening on port 8081...')
})