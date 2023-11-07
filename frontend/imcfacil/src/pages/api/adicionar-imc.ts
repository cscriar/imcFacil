import fs from 'fs';
import path from 'path';

const imcCalculosFilePath = path.join(process.cwd(), 'public', 'imcCalculos.json');
const imcCalculos = JSON.parse(fs.readFileSync(imcCalculosFilePath, 'utf-8'));

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, imc } = req.body;

  const novoCalculo = { email, imc: parseFloat(imc) };
  imcCalculos.push(novoCalculo);

  fs.writeFileSync(imcCalculosFilePath, JSON.stringify(imcCalculos, null, 2));
  res.status(200).json({ message: 'Cálculo de IMC adicionado com sucesso.' });
}
