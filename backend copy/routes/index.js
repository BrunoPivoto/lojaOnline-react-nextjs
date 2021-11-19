import express from 'express';
import usuario from './usuario.js';
import item from './items.js';
import pedido from './pedidos.js';

const router = express.Router();

router.use('/usuario', usuario);
router.use('/item', item);
router.use('/pedido', pedido);

export default router;