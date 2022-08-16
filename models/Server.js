import express from 'express';
import cors from 'cors';
import { router } from '../routes/usuarios.js';

export class Server {
  constructor() {
    this.port = process.env.PORT;
    this.app = express();
    this.usuariosPath = '/api/usuarios';

    // middlewares
    this.middlewares()

    // rutas 
    this.routes();
  }

  middlewares() {
    // directorio publico
    this.app.use(express.static('public'));
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usuariosPath, router);

  }
  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto', this.port);
    });
  }
}

