// pages/api/usuario.js

import fs from 'fs';
import path from 'path';

const usuariosFilePath = path.join(process.cwd(), 'public', 'usuarios.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const { email } = req.query;

  const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email);

  if (usuarioEncontrado) {
    res.status(200).json({ nome: usuarioEncontrado.nome });
  } else {
    res.status(404).json({ error: 'Usuário não encontrado.' });
  }
}
