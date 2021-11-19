import prisma from "../prisma/prisma.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export async function registrarUsuario(email, password, enderecos) {
	if (email && password) {
    const oldUser = await prisma.usuario.findUnique({ where: { email } });

    const newPass = await bcrypt.hash(password, 10);

    if (oldUser) throw Error("Usuario ja existente");

    const usuario = await prisma.usuario.create({
      data: {
				email,
				password: newPass,
				enderecos
      }
    });


    const token = jwt.sign(
      {
        usuario_id: usuario.id,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: '2h'
      }
    );

    return {usuario_id: usuario.id, token};
  } else {
    throw new Error("Inclua email e senha na requisição");
  }
}

export async function loginUsuario(email, password) {
	const usuario = await prisma.usuario.findUnique({ where: { email } });

  if (usuario && (await bcrypt.compare(password, usuario.password))) {
    const { id, user_type } = usuario;

    const token = jwt.sign(
      {
        usuario_id: id,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: '2h'
      }
    );

    return {usuario_id: id, token};
  } else {
    throw new InvalidCredentials();
  }	
}