import jwt from 'jsonwebtoken';
import express from 'express';

// Esse middleware retorna uma
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send('Nenhum token fornecido');

  const decode = jwt.verify(token, process.env.TOKEN_SECRET);

  if (!decode) return res.status(401).send('Falha na autenticação');

  req.usuario = decode;

  next();
};

export default authMiddleware;
