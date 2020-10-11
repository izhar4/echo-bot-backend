'use strict';

const express = require('express');
const app = express();
const { MESSAGE_EVENT, BROADCAST } = require('./config/constants');
const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port %d ', server.address().port);
});

const io = require('socket.io')(server);
io.on('connection', function (socket) {
  console.log('a user connected');
});



io.on('connection', function (socket) {
  socket.on(MESSAGE_EVENT, (text) => {
    socket.emit(BROADCAST, text);
  });
});