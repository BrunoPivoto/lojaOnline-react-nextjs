import express from 'express';
import { registrarUsuario, loginUsuario } from '../controllers/usuarioController.js';

const router = express.Router();

  router.post('/registrar', async (req, res, next) => {
    const { email, password, enderecos } = req.body;

    try {
      const usuario = await registrarUsuario(email, password);

      res.send(usuario);
    } catch (err) {
      next(err);
    }
  });

  router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;

    try {
      const usuario = await loginUsuario(email, password);

      res.send(usuario);
    } catch (err) {
      next(err);
    }
  });

  export default router;