const { Console } = require('console')
const express = require('express')
const app = express()

app.use(express.static(__dirname + '/node_modules'))
app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html')
})

const server = require('http').createServer(app)

let options={
    cors:true,
   }
const io = require('socket.io')(server, options)

io.on('connection', function(client){
    console.log('Client connected ')
    client.on('join', (data)=>{
        console.log(data)
    })
})

server.listen(4200, () => console.log('Listening on port 4200'))
