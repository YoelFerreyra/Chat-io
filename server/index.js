const express = require('express');
const http = require('http')
const {Server: SocketServer} = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server, {
    cors: {
        origin: "http://localhost:5173"
    }
})

io.on('connection', socket => {
    console.log('New client');
})


const port = process.env.PORT || 5000;

server.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`)
})