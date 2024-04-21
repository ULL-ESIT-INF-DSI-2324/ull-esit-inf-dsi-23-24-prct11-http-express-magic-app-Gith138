[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/sNC2m9MU)
[![Coverage Status](https://coveralls.io/repos/github/Gith138/practica11-modi-dsi/badge.svg?branch=main)](https://coveralls.io/github/Gith138/practica11-modi-dsi?branch=main)    [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2324_ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-Gith138&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2324_ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-Gith138)
# Práctica 11 - Aplicación Express para coleccionistas de cartas Magic
  
Godgith John alu0101463858@ull.edu.es  

# Informe

### Introducción    
En esta práctica hay que aplicar todo lo aprendido relacionado con typescript y el diseño orientado a objetos.
Hay que implementar una aplicación que permita almacenar información de una colección de cartas Magic de un usuario concreto. En concreto, el sistema permitirá añadir, modificar, eliminar, listar y leer la información asociada a dichas cartas. 
Para eso se crea un cliente como, por ejemplo, `ThunderClient` o `Postman`, se podrán llevar a cabo peticiones HTTP al servidor.

### Objetivos a lograr realizando esta práctica
Aprender más acerca de los paquetes de  `yargs` y `chalk`, respetar los **Principios SOLID**, seguir la metodología `TDD` o `BDD` que implica confirmar el correcto funcionamiento del código desarrollado, probar en los casos de que el código de un error porque la entrada no sea correcta(_errors should never pass silently_) y aprender a usar la clase [`EventEmitter`](https://nodejs.org/docs/latest/api/events.html) del módulo Events de Node.js.

Los paquetes:
Se debe instalar el `c8` para usar el módulo:
```ts
npm i --save-dev c8
```
Para comenzar a utilizar `express` en nuestro proyecto, deberemos instalar los siguientes paquetes:
```ts
  npm i express
  npm i --save-dev @types/express
```
El segundo paquete se corresponde con los tipos que nos permitirán utilizar el módulo express desde TypeScript.

`Express` es un framework de desarrollo web para Node.js que simplifica la creación de aplicaciones web y APIs. 


### Ejercicios y su explicación
### Descripción de los requisitos de la aplicación
En los otros ficheros, son iguales al de la practica anterior
### Servidor
- Lo primero se importa `Express` y se crea una instancia de la aplicación, después se configura el middleware `express.json()` para analizar el cuerpo de las solicitudes entrantes como JSON:   
```ts
  const express = require('express');
  const app = express();
  const port = 3000;
  app.use(express.json());
```

- **Agregar una carta:**
Manejo las solicitudes **POST** a la ruta **/usuarios/:usuario/cartas** y obtengo el parámetro de ruta **:usuario** de la carta.
Llamo al método `AyadirCarta` de `ColeccionCartas`  para agregar una carta.
Devuelvo el resultado de la operación como respuesta HTTP.
```ts
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
```
- **Actualizar una carta:**   
Manejo las solicitudes **PATCH** a la ruta **/usuarios/:usuario/cartas/:id** y obtengo el parámetro de ruta **:usuario** y el **ID** de la carta.
Llamo al método `ActualizarCarta` de `ColeccionCartas` para actualizar una carta.
Devuelvo el resultado de la operación como respuesta HTTP.
```ts
  app.patch('/usuarios/:usuario/cartas/:id', (req, res) => {
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
```

- **Eliminar una carta:**   
Manejo las solicitudes **DELETE** a la ruta **/usuarios/:usuario/cartas/:id** y obtengo el parámetro de ruta **:usuario** y el **ID** de la carta.
Llamo al método `EliminarCarta` de `ColeccionCartas` para eliminar una carta.
Devuelvo el resultado de la operación como respuesta HTTP.
```ts
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
```

- **Listar todas las cartas de un usuario:**    
Manejo las solicitudes **GET** a la ruta **/usuarios/:usuario/cartas/** y obtengo el parámetro de ruta **:usuario** y el **ID** de la carta.
Llamo al método `ListarCartas` de `ColeccionCartas` para listar las cartas de un usuario.
Devuelvo el resultado de la operación como respuesta HTTP.
```ts
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
```

- **Mostrar los detalles de una carta específica:**     
Manejo las solicitudes **GET** a la ruta **/usuarios/:usuario/cartas/:id** y obtengo el parámetro de ruta **:usuario** y el **ID** de la carta.
Llamo al método `MostrarCarta` de `ColeccionCartas` para mostrar los detalles de una carta.
Devuelvo el resultado de la operación como respuesta HTTP.
```ts
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
```

- **Inicio del servidor Express:**    
Inicio el `servidor Express` y hago escuchar en el puerto especificado (3000 en este caso) y después imprime un mensaje en la consola para indicar que el servidor ha comenzado a escuchar.
```ts
  app.listen(port, () => {
      console.log(`Servidor Express escuchando en el puerto ${port}`);
  });
```

### Tests    
Para los tests se usara el paquete ``request`:
```ts
npm install request --save-dev
```

### Dificultades      
Esta práctica ha sido complicada, porque me ha resultado difícil entender bien el funcionamiento de los distintos paquetes y como usar el `Express`

### Bibliografía
- [node.js](https://nodejs.org/docs/latest/api/fs.html)
- [Modulo fs Node.js](https://nodejs.org/docs/latest/api/fs.html)
- [Módulo Net Node.js](https://nodejs.org/docs/latest/api/net.html)
- [Apuntes Clase](https://ull-esit-inf-dsi-2324.github.io/prct11-http-express-magic-app/)
  
Grado de Ingeniería Informática    
Godgith John    
Desarrollo de Sistemas Informáticos	    
Práctica 11 - Aplicación Express para coleccionistas de cartas Magic