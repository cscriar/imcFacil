// pages/api/cadastrarUsuario.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Método não permitido
  }

  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  const novoUsuario = {
    nome,
    email,
    senha,
  };

  try {
    const usuariosFilePath = path.join(process.cwd(), 'public', 'usuarios.json');
    const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

    usuarios.push(novoUsuario);

    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, 2));

    res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
}
