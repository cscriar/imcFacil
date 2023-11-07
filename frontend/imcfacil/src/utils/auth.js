import jwt from 'jsonwebtoken';

const secretKey = 'sua-chave-secreta'; // Substitua por uma chave secreta mais segura

// Função para gerar um token JWT com base no email do usuário
export function generateToken(email) {
  const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
  return token;
}
