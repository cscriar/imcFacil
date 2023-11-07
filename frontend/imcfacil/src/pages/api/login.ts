import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';

const usuariosFilePath = path.join(process.cwd(), 'public', 'usuarios.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

// Chave secreta para assinar o token
const secretKey = 'sua-chave-secreta'; // Substitua por uma chave secreta mais segura

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, senha } = req.body;

  const usuarioEncontrado = usuarios.find(
    (usuario) => usuario.email === email && usuario.senha === senha
  );

  if (usuarioEncontrado) {
    // Credenciais válidas, gere um token JWT
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas.' });
  }
}
