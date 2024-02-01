const express = require("express")
const app = express()
const cors = require("cors")
const http = require('http')
const server = http.createServer(app); // Usa la instancia de express 'app'
const io = require('socket.io')(server, {
  path: '/socket.io',
  cors: {
     origin: "http://localhost:4200",
     methods: ["GET", "POST"],
     allowedHeaders: ["my-custom-header"],
     credentials: true
  }
});
app.use(cors())
const bodyParser = require('body-parser')
const socketport = 4000
const port = 4100
const initialized = "El servidor funciona"


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(initialized)
})

app.get("/", (req, res) => {
res.send("La api esta en funcionamiento")
})


// usuarios conectados
let usuariosConectados = []

app.post('/agregarUsuario', (req, res) => {
    const { usuario } = req.body;
  
    // Verificar si el usuario ya está en la lista
    if (!usuariosConectados.includes(usuario)) {
      usuariosConectados.push(usuario);
      console.log(usuariosConectados)
    }
  
    res.sendStatus(200);
  });
  
  module.exports = app;

// obtener usuarios

app.get('/obtenerUsuarios', (req, res) => {
    res.json({ usuarios: usuariosConectados });
  });

//  conexion usuarios

io.on('connection', (socket) => {
    console.log('Usuario conectado:', socket.id);
  
    socket.on('disconnect', () => {
      console.log('Usuario desconectado:', socket.id);
      
      // Filtrar el array para excluir al usuario desconectado
      usuariosConectados = usuariosConectados.filter((user) => user !== socket.id);
      
      // Puedes emitir el array actualizado o realizar otras acciones necesarias
      io.emit('usuariosActualizados', { usuarios: usuariosConectados });
    });
  });



  // logica chat
 
  
  server.listen(socketport, () => {
    console.log(initialized);
  });

  io.on('connection', (socket) => {
    console.log('Usuario conectado');
  
    socket.on('enviarMensaje', (mensaje) => {
      io.emit('nuevoMensaje', mensaje);
    });
  
    socket.on('disconnect', () => {
      console.log('Usuario desconectado');
    });
  });