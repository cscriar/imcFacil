// pages/api/login.js

import fs from 'fs';
import path from 'path';

const usuariosFilePath = path.join(process.cwd(), 'public', 'usuarios.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, senha } = req.body;

  const usuarioEncontrado = usuarios.find(
    (usuario) => usuario.email === email && usuario.senha === senha
  );

  if (usuarioEncontrado) {
    res.status(200).json({ nome: usuarioEncontrado.nome, email: usuarioEncontrado.email }); // Retorna o nome e o email do usuário
  } else {
    res.status(401).json({ error: 'Credenciais inválidas.' });
  }
}
