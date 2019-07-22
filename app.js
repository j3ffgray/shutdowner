const express = require('express');
const app = express();
const cmd = require('node-cmd');

app.get('/shutdown', function (req, res) {
  cmd.run('shutdown /s');
  res.send('Okay, restarting.');
});

app.listen(9999);