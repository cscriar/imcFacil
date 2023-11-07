// pages/api/atualizar-imc.js

import fs from 'fs';
import path from 'path';

const usuariosFilePath = path.join(process.cwd(), 'public', 'usuarios.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, imc } = req.body;

  const usuarioIndex = usuarios.findIndex((usuario) => usuario.email === email);

  if (usuarioIndex !== -1) {
    usuarios[usuarioIndex].imc = parseFloat(imc);
    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, 2));
    res.status(200).json({ message: 'IMC atualizado com sucesso.' });
  } else {
    res.status(404).json({ error: 'Usuário não encontrado.' });
  }
}
