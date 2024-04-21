[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/sNC2m9MU)
[![Coverage Status](https://coveralls.io/repos/github/Gith138/practica11-modi-dsi/badge.svg?branch=main)](https://coveralls.io/github/Gith138/practica11-modi-dsi?branch=main)    [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2324_ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-Gith138&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2324_ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-Gith138)
# Práctica 11 - Aplicación Express para coleccionistas de cartas Magic
  
Godgith John alu0101463858@ull.edu.es  

# Informe

### Introducción    
En esta práctica hay que aplicar todo lo aprendido relacionado con typescript y el diseño orientado a objetos.
Hay que implementar una aplicación que permita almacenar información de una colección de cartas Magic de un usuario concreto. En concreto, el sistema permitirá añadir, modificar, eliminar, listar y leer la información asociada a dichas cartas, usando los paquetes `yargs` y `chalk`. En este caso se debe implementar el uso de `cliente y servidor` usando los `sockets` que proporciona el **módulo Net** de **Node.js**. 

### Objetivos a lograr realizando esta práctica
Aprender más acerca de los paquetes de  `yargs` y `chalk`, respetar los **Principios SOLID**, seguir la metodología `TDD` o `BDD` que implica confirmar el correcto funcionamiento del código desarrollado, probar en los casos de que el código de un error porque la entrada no sea correcta(_errors should never pass silently_) y aprender a usar la clase [`EventEmitter`](https://nodejs.org/docs/latest/api/events.html) del módulo Events de Node.js.

Los paquetes:
- `Yargs`
  Yargs es un módulo de análisis de líneas de comandos para Node.js. Permite crear herramientas de línea de comandos interactivas y fáciles de usar.
  ```ts
  npm i yargs
  npm i --save-dev @types/yargs
  ```
  
- `Chalk`
  Chalk es un módulo para dar estilos y colores a la salida de texto en la consola de Node.js.
  Para instalarlo:
  ```ts
  npm i chalk
  ```
Se debe instalar el `c8` para usar el módulo:
```ts
npm i --save-dev c8
```

### Ejercicios y su explicación
### Descripción de los requisitos de la aplicación
### magic-app

### cartas

### Servidor


### Cliente    
Para los tests se usara el paquete ``request`:
```ts
npm install request --save-dev
```

### Dificultades      
Esta práctica ha sido complicada, porque me ha resultado difícil entender bien el funcionamiento de los distintos paquetes y como usar el `Módulo Net`

### Bibliografía
- [Yargs](https://www.npmjs.com/package/yargs)
- [Chalk](https://www.npmjs.com/package/chalk)
- [node.js](https://nodejs.org/docs/latest/api/fs.html)
- [Modulo fs Node.js](https://nodejs.org/docs/latest/api/fs.html)
- [Módulo Net Node.js](https://nodejs.org/docs/latest/api/net.html)
  
Grado de Ingeniería Informática    
Godgith John    
Desarrollo de Sistemas Informáticos	    
Práctica 10 - Aplicación cliente-servidor para coleccionistas de cartas Magic
