const proxy = require('express-http-proxy');
const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))

app.use('/proxy', proxy({ target: 'http://localhost:3000', changeorigin: true}));

app.get('/', (req, res) => {
  res.send("Gotta Catch 'Em All ")
})

app.get('/:product', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

app.listen(3000, () => {
  console.log('Proxy Server is listening on port 3000...')
})