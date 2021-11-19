import express from 'express';
import auth from '../middleware/auth.js';
import { adicionarPedido } from '../controllers/pedidosController.js';

const router = express.Router();

router.post('/adicionar', auth, async (req, res, next) => {
  const { endereco, items, quantidades } = req.body;
  const { usuario_id } = req.usuario;

  try {
    const item = await adicionarPedido(
      usuario_id,
      endereco,
      items,
      quantidades
    );

    res.send(item);
  } catch (err) {
    next(err);
  }
});

export default router;
