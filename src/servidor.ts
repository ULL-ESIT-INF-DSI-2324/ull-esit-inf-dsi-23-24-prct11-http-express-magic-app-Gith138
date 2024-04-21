import express from 'express';
import { Cartas } from './magic-app.js';
import { ColeccionCartas } from './cartas.js';

const app = express();
const port = 3000;
const coleccionCartas = new ColeccionCartas();

app.use(express.json());

// Ruta para agregar una carta a la colección de un usuario
app.post('/usuarios/:usuario/cartas', (req, res) => {
  const carta = req.body;
  const usuario = req.params.usuario;

  coleccionCartas.AyadirCarta(carta, usuario, (err, mensaje) => {
      if (err) {
          res.status(400).send(err);
      } else {
          res.status(200).send(mensaje);
      }
  });
});

// Ruta para actualizar una carta en la colección de un usuario
app.put('/usuarios/:usuario/cartas/:id', (req, res) => {
  const carta = req.body;
  const usuario = req.params.usuario;
  const id = parseInt(req.params.id);

  coleccionCartas.ActualizarCarta(carta, usuario, (err, mensaje) => {
      if (err) {
          res.status(400).send(err);
      } else {
          res.status(200).send(mensaje);
      }
  });
});

// Ruta para eliminar una carta de la colección de un usuario
app.delete('/usuarios/:usuario/cartas/:id', (req, res) => {
  const usuario = req.params.usuario;
  const id = parseInt(req.params.id);

  coleccionCartas.EliminarCarta(id, usuario, (err, mensaje) => {
      if (err) {
          res.status(400).send(err);
      } else {
          res.status(200).send(mensaje);
      }
  });
});

// Ruta para listar todas las cartas de un usuario
app.get('/usuarios/:usuario/cartas', (req, res) => {
  const usuario = req.params.usuario;

  coleccionCartas.ListarCartas(usuario, (err, mensaje) => {
      if (err) {
          res.status(400).send(err);
      } else {
          res.status(200).send(mensaje);
      }
  });
});

// Ruta para mostrar los detalles de una carta específica de un usuario
app.get('/usuarios/:usuario/cartas/:id', (req, res) => {
  const usuario = req.params.usuario;
  const id = parseInt(req.params.id);

  coleccionCartas.MostrarCarta(id, usuario, (err, mensaje) => {
      if (err) {
          res.status(400).send(err);
      } else {
          res.status(200).send(mensaje);
      }
  });
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});