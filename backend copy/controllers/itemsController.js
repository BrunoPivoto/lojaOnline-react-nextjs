import prisma from "../prisma/prisma.js";

export async function adicionarItemDisponivel(name, price, picture_url) {
	const novoItem = prisma.itemDisponivel.create({
		data: {
			name,
			price,
			picture_url
		}
	})

	return novoItem;
}