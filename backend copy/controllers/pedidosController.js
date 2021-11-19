import prisma from '../prisma/prisma.js';

/* Pedidos tem que ser um vetor com:

*/
export async function adicionarPedido(usuario_id, endereco, items, quantidades) {
  const pedido = await prisma.pedido.create({
    data: {
			timestamp: new Date(Date.now()),
			usuario_id,
			endereco,
			items,
      quantidades
    }
  });

  return pedido;
}


