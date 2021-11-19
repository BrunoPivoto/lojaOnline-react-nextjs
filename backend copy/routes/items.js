import express from 'express';
import { adicionarItemDisponivel } from '../controllers/itemsController.js';

const router = express.Router();

  router.post('/adicionar', async (req, res, next) => {
    const { name, price, picture_url } = req.body;

    try {
      const item = await adicionarItemDisponivel(name, price, picture_url);

      res.send(item);
    } catch (err) {
      next(err);
    }
  });

  export default router;